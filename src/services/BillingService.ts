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
    calculateDifferentiatedRate(entryTime: Date, exitTime: Date, hourlyRate: number): number {
        let totalAmount = 0;
        let currentTime = new Date(entryTime);

        while (currentTime < exitTime) {
            const nextTime = new Date(currentTime);
            nextTime.setMinutes(0, 0, 0);
            nextTime.setHours(nextTime.getHours() + 1);

            if (nextTime > exitTime) {
                nextTime.setTime(exitTime.getTime()); 
            }

            const currentHour = currentTime.getHours();
            const isDayTime = currentHour >= 7 && currentHour < 19;
            const rateMultiplier = isDayTime ? 1 : 0.7; 

            const durationInHours = (nextTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60);

            totalAmount += durationInHours * hourlyRate * rateMultiplier;

            currentTime = nextTime;
        }

        return Math.ceil(totalAmount);
    }
}