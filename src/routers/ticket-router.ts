import { ticketControllers } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const ticketRouter = Router();

ticketRouter.get('/types', authenticateToken, ticketControllers.getTicketTypes);

export { ticketRouter };
