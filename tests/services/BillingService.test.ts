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
