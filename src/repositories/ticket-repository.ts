import { prisma } from '@/config';
import { notFoundError } from '@/errors';

async function findTicketTypes() {
  const types = await prisma.ticketType.findMany();
  return types;
}

async function findUserTicket(id: number) {
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId: id,
    },
  });
  if (!enrollment) {
    throw notFoundError();
  }
  const ticket = await prisma.ticket.findUnique({
    where: {
      enrollmentId: enrollment.id,
    },
    include: {
      TicketType: true,
    },
  });
  if (!ticket) {
    throw notFoundError();
  }
  return ticket;
}

async function createUserTicket(id: number, ticketTypeId: number) {
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId: id,
    },
  });
  if (!enrollment) {
    throw notFoundError();
  }
  const ticket = await prisma.ticket.create({
    data: {
      status: 'RESERVED',
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollment.id,
    },
    include: {
      TicketType: true,
    },
  });
  return ticket;
}

export const ticketRepositories = { findTicketTypes, findUserTicket, createUserTicket };
