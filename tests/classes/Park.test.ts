import { describe, it, expect } from "bun:test";
import  Park  from "../../src/classes/Park";

describe("Park", () => {
  it("calcul de la durée en heures", () => {
    const startDate = new Date("2024-11-13T08:00:00");
    const endDate = new Date("2024-11-13T10:30:00");
    const parkInstance = new Park(1, startDate, endDate, 0, true, 4.5);

    const duration = parkInstance.getDurationInHours();

    expect(duration).toBe(2.5);
  });
});
