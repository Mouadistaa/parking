export class BillingService {
    static calculateFee(hourlyRate: number, durationInHours: number): number {
        return hourlyRate * durationInHours;
    }
    static sortHistoryByDate(history: Array<{ date: Date }>, order: 'asc' | 'desc') {
        return history.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });
    }
}