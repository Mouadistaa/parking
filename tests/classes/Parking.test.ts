import { describe, it, expect } from "bun:test";
import Parking from "../../src/classes/Parking";

describe("Parking Class Tests", () => {
  it("should return the list of parked vehicle plates", () => {
    const parking = new Parking("Parking Central", 1, 50, 2.5, true, 10);
    parking.currentVehicles.push({ vehiclePlate: "AA-123-AA", entryTime: new Date() });

    const parkedVehicles = parking.getParkedVehicles();
    expect(parkedVehicles).toEqual(["AA-123-AA"]);
  });
});

describe("Parking - Alerte pour les véhicules ayant dépassé 24h", () => {
    it("should return the list of vehicles that have overstayed", () => {
        const parking = new Parking("Parking Central", 1, 50, 2.5, true, 10);
    
        parking.currentVehicles.push(
          { vehiclePlate: "AA-123-AA", entryTime: new Date("2024-11-15T08:00:00Z") },
          { vehiclePlate: "BB-456-BB", entryTime: new Date("2024-11-16T08:00:00Z") }
        );
    
        const overstayedVehicles = parking.getOverstayedVehicles();
        expect(overstayedVehicles).toEqual(["AA-123-AA"]);
      });
});

describe("Parking - Additional Tests", () => {
  it("should return parked vehicle plates", () => {
    const parking = new Parking("Test Parking", 1, 50, 2.5, true, 0);

    parking.currentVehicles.push({ vehiclePlate: "TEST-123", entryTime: new Date() });

    const parkedVehicles = parking.getParkedVehicles();
    expect(parkedVehicles).toEqual(["TEST-123"]);
  });

  it("should return overstayed vehicle plates", () => {
    const parking = new Parking("Test Parking", 1, 50, 2.5, true, 0);

    parking.currentVehicles.push(
      { vehiclePlate: "TEST-123", entryTime: new Date("2024-11-15T08:00:00Z") },
      { vehiclePlate: "TEST-456", entryTime: new Date() }
    );

    const overstayedVehicles = parking.getOverstayedVehicles();
    expect(overstayedVehicles).toEqual(["TEST-123"]);
  });
});
