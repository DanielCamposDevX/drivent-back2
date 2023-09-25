import { ticketRepositories } from "@/repositories/ticket-repository";
import { Ticket, TicketType } from "@prisma/client";



async function getTicketTypes(): Promise<TicketType[] | null> {
    const types = await ticketRepositories.findTicketTypes();
    return types;
}


async function getTicketByUser(id: number):Promise<Ticket> {
    const ticket = await ticketRepositories.findUserTicket(id);
    return ticket
}






export const ticketServices = { getTicketTypes, getTicketByUser }