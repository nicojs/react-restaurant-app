import { Reservation } from '../models/reservation';

interface ReservationItemProps {
  reservation: Reservation;
}

export function ReservationItem({ reservation }: ReservationItemProps) {
  const style = { backgroundColor: new Date(Date.parse(reservation.date)) < new Date() ? '#644' : '#446' };
  return (
    <a
      href="#"
      className="block mr-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      style={style}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {reservation.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {reservation.date}
      </p>
    </a>
  );
}
