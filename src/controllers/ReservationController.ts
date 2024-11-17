import { ReservationService } from "../services/ReservationService";

const reservationService = new ReservationService();

export const createReservation = async (req: { body: { parkingId: any; vehiclePlate: any; startTime: any; endTime: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; }; }) => {
    const { parkingId, vehiclePlate, startTime, endTime } = req.body;

    try {
        const reservation = await reservationService.createReservation(
            parkingId,
            vehiclePlate,
            new Date(startTime),
            new Date(endTime)
        );
        res.json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllReservations = async (_req: any, res: { json: (arg0: any) => void; }) => {
    const reservations = await reservationService.getAllReservations();
    res.json(reservations);
};

export const makePayment = async (req: { body: { reservationId: any; amount: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; }; }) => {
    const { reservationId, amount } = req.body;

    try {
        const updatedReservation = await reservationService.makePayment(reservationId, amount);
        res.json(updatedReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
