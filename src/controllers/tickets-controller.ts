import { ticketServices } from "@/services/ticket-service";
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";




async function getTicketTypes(req: Request, res: Response) {
    const types = await ticketServices.getTicketTypes();
    res.status(200).send(types)
}




async function getTicketByUser(req: Request, res: Response) {
    const { userId } = req as JwtPayload;
    const ticket = await ticketServices.getTicketByUser(userId);
    console.log(ticket);
    return res.status(200).send(ticket);
}





export const ticketControllers = { getTicketTypes, getTicketByUser }