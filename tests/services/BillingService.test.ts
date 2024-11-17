import { BillingService } from "../../src/services/BillingService";
import { describe, it, expect } from "bun:test";

describe("BillingService", () => {
    const billingService = new BillingService();
  
    it("calcul du montant pour 2 heures à 5€/h", () => {
      const fee = BillingService.calculateFee(2, 5);
      expect(fee).toBe(10); 
    });
  
    it("calcul du montant pour 1.5 heures à 4€/h", () => {
      const fee = BillingService.calculateFee(1.5, 4);
      expect(fee).toBe(6); 
    });
  });

  describe("BillingService - Tarifs différenciés", () => {
    const billingService = new BillingService();

    it("calcul du montant pour 2 heures à 100% (tarif de jour)", () => {
        const entryTime = new Date("2024-11-14T10:00:00"); 
        const exitTime = new Date("2024-11-14T12:00:00"); 
        const hourlyRate = 5; 

        const fee = billingService.calculateDifferentiatedRate(entryTime, exitTime, hourlyRate);
        expect(fee).toBe(10); 
    });

    it("calcul du montant pour 2 heures à 70% (tarif de nuit)", () => {
        const entryTime = new Date("2024-11-14T20:00:00");
        const exitTime = new Date("2024-11-14T22:00:00"); 
        const hourlyRate = 5; 

        const fee = billingService.calculateDifferentiatedRate(entryTime, exitTime, hourlyRate);
        expect(fee).toBe(7); 
    });

    it("calcul du montant pour 1 heure de jour et 1.5 heures de nuit", () => {
        const entryTime = new Date("2024-11-14T18:30:00"); 
        const exitTime = new Date("2024-11-14T21:00:00"); 
        const hourlyRate = 10; 

        const fee = billingService.calculateDifferentiatedRate(entryTime, exitTime, hourlyRate);
        expect(fee).toBe(16); 
    });

    it("calcul pour une durée chevauchant deux jours (jour et nuit)", () => {
        const entryTime = new Date("2024-11-14T18:00:00"); 
        const exitTime = new Date("2024-11-15T06:00:00"); 
        const hourlyRate = 10; 

        const fee = billingService.calculateDifferentiatedRate(entryTime, exitTime, hourlyRate);
        expect(fee).toBe(87); 
    });
});

describe('BillingService - Tarifs différenciés', () => {
  const billingService = new BillingService();

  it('doit calculer le montant correct pour des tarifs de jour et de nuit', () => {
      const montant = billingService.calculateDifferentiatedRate(
          new Date('2024-11-14T18:00:00'), 
          new Date('2024-11-14T20:30:00'), 
          10 
      );
      expect(montant).toBe(21); 
  });

  it('doit calculer le montant correct pour une période de jour complète', () => {
      const montant = billingService.calculateDifferentiatedRate(
          new Date('2024-11-14T08:00:00'),
          new Date('2024-11-14T10:00:00'), 
          10 
      );
      expect(montant).toBe(20); 
  });

  it('doit calculer le montant correct pour une période de nuit complète', () => {
      const montant = billingService.calculateDifferentiatedRate(
          new Date('2024-11-14T20:00:00'), 
          new Date('2024-11-14T22:00:00'), 
          10 
      );
      expect(montant).toBe(14); 
  });
});