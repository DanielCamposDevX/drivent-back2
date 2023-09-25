import { ticketRepositories } from "@/repositories/ticket-repository";
import { TicketType } from "@prisma/client";



async function getTicketTypes(): Promise<TicketType[] | null> {
    const types = await ticketRepositories.findTicketTypes();
    return types;
}






export const ticketServices = { getTicketTypes }