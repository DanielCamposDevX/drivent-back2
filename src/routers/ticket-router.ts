import { Router } from 'express';
import { ticketControllers } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';

const ticketRouter = Router();

ticketRouter
  .get('/types', authenticateToken, ticketControllers.getTicketTypes)
  .get('/', authenticateToken, ticketControllers.getTicketByUser)
  .post('/', authenticateToken, ticketControllers.postUserTicket);

export { ticketRouter };
