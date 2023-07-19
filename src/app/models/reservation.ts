export interface Reservation {
  id: number;
  name: string;
  occupants: number;
  date: string;
  timeslot: string;
  preferWindowSeat: boolean;
}
