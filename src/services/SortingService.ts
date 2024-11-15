import Parking from '../classes/Parking';

export class SortingService {
    static sortByTotalSpots(parkings: Parking[], order: 'asc' | 'desc'): Parking[] {
        return parkings.sort((a, b) => order === 'asc' ? a.numberOfSpots - b.numberOfSpots : b.numberOfSpots - a.numberOfSpots);
    }

    static sortByAvailableSpots(parkings: Parking[], order: 'asc' | 'desc'): Parking[] {
        return parkings.sort((a, b) => {
            const availableA = a.numberOfSpots - a.occupiedSpots;
            const availableB = b.numberOfSpots - b.occupiedSpots;
            return order === 'asc' ? availableA - availableB : availableB - availableA;
        });
    }
}
