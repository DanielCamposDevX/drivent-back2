import { ticketServices } from "@/services/ticket-service";
import { Request, Response } from "express";




async function getTicketTypes(req: Request, res: Response) {
    const types = await ticketServices.getTicketTypes();
    res.status(200).send(types)
}





export const ticketControllers = { getTicketTypes }