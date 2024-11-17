import { Hono } from "hono";
import { createReservation, getAllReservations, makePayment } from "../controllers/ReservationController";

const reservationRoutes = new Hono();

reservationRoutes.post("/reservations", createReservation);
reservationRoutes.get("/reservations", getAllReservations);
reservationRoutes.post("/payments", makePayment);

export default reservationRoutes;
