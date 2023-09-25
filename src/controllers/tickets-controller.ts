import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import { ticketServices } from '@/services/ticket-service';

async function getTicketTypes(req: Request, res: Response) {
  const types = await ticketServices.getTicketTypes();
  res.status(200).send(types);
}

async function getTicketByUser(req: Request, res: Response) {
  const { userId } = req as JwtPayload;
  const ticket = await ticketServices.getTicketByUser(userId);
  return res.status(200).send(ticket);
}

type typeidBody = {
  ticketTypeId: number;
};

async function postUserTicket(req: Request, res: Response) {
  const { userId } = req as JwtPayload;
  const { ticketTypeId } = req.body as typeidBody;
  if (!ticketTypeId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const ticket = await ticketServices.postUserTicket(ticketTypeId, userId);

  return res.status(201).send(ticket);
}

export const ticketControllers = { getTicketTypes, getTicketByUser, postUserTicket };
