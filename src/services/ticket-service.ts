import { Ticket, TicketType } from '@prisma/client';
import { ticketRepositories } from '@/repositories/ticket-repository';

async function getTicketTypes(): Promise<TicketType[] | null> {
  const types = await ticketRepositories.findTicketTypes();
  return types;
}

async function getTicketByUser(id: number): Promise<Ticket> {
  const ticket = await ticketRepositories.findUserTicket(id);
  return ticket;
}

async function postUserTicket(ticketId: number, id: number) {
  const ticket = await ticketRepositories.createUserTicket(id, ticketId);
  return ticket;
}

export const ticketServices = { getTicketTypes, getTicketByUser, postUserTicket };
