import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ReservationService {
    async createReservation(parkingId: number, vehiclePlate: string, startTime: Date, endTime: Date) {
        return prisma.reservation.create({
            data: {
                parkingId,
                vehiclePlate,
                startTime,
                endTime,
                status: "PENDING",
            },
        });
    }

    async getAllReservations() {
        return prisma.reservation.findMany();
    }

    async makePayment(reservationId: number, amount: number) {
        const reservation = await prisma.reservation.findUnique({
            where: { id: reservationId },
        });

        if (!reservation) {
            throw new Error("Reservation not found");
        }

        return prisma.reservation.update({
            where: { id: reservationId },
            data: { status: "PAID", paymentAmount: amount },
        });
    }
}
