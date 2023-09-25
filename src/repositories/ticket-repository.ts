import { prisma } from "@/config";



async function findTicketTypes() {
    const types = await prisma.ticketType.findMany();
    return types
}





export const ticketRepositories = { findTicketTypes }