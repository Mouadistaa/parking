export class BillingService {
    static calculateFee(hourlyRate: number, durationInHours: number): number {
        return hourlyRate * durationInHours;
    }
}