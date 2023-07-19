import { Reservation } from '../models/reservation';
import { ReservationItem } from './reservation-item';

export interface ReservationListProps {
  reservations: Reservation[];
}
export function ReservationList({ reservations }: ReservationListProps) {
  return (
    <div className="flex">
      {reservations.map((reservation) => <ReservationItem key={reservation.id} reservation={reservation} />) }
    </div>
  );
}
