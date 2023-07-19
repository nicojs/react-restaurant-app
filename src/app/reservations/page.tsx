'use client';
import { ReservationForm, ResetController } from '@/app/components/reservation-form';
import { ReservationList } from '../components/reservation-list';
import { Reservation } from '@/app/models/reservation';
import { SubHeader } from '@/app/components/sub-header';
import { Loading } from '../components/loading';
import { useEffect, useState } from 'react';

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[] | undefined>(
    undefined,
  );

  useEffect(() => {
    const abort = new AbortController();
    fetch('http://localhost:3001/reservations', { signal: abort.signal })
      .then((response) => response.json())
      .then((data) => setReservations(data));
    return () => abort.abort();
  }, []);

  async function addReservation(newReservation: Omit<Reservation, 'id'>) {
    const response = await fetch('http://localhost:3001/reservations', {
      method: 'POST',
      headers: { ['Content-Type']: 'application/json' },
      body: JSON.stringify(newReservation),
    });
    const reservation: Reservation = await response.json();
    setReservations((old) => [...(old ?? []), reservation]);
    resetController.reset?.();
  }

  const resetController: ResetController = { };

  return (
    <>
      <SubHeader>My reservations</SubHeader>
      {reservations ? (
        <ReservationList reservations={reservations} />
      ) : (
        <Loading />
      )}
      <SubHeader>Add reservation</SubHeader>
      <ReservationForm resetController={resetController} onSubmit={addReservation} />
    </>
  );
}
