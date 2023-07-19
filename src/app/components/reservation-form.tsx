'use client';
import { SyntheticEvent, useContext, useRef } from 'react';
import { Checkbox } from './forms/checkbox';
import { FloatingLabel } from './forms/floating-label';
import { Input } from './forms/input';
import { Label } from './forms/label';
import { Select, SelectOption } from './forms/select';
import { Reservation } from '../models/reservation';
import { LanguageContext } from '../i18n';

export interface ResetController {
  reset?(): void;
}

export interface ReservationFormProps<T extends Omit<Reservation, 'id'>> {
  onSubmit(reservation: T): void;
  resetController: ResetController;
}
export function ReservationForm<T extends Omit<Reservation, 'id'>>({
  onSubmit,
  resetController
}: ReservationFormProps<T>) {
  const formRef = useRef<HTMLFormElement>(null);
  resetController.reset = () => {
    formRef.current?.reset();
  }
  const defaultTimeslot = '19:00';
  const timeslots: SelectOption[] = [
    { value: '18:00' },
    { value: '18:30' },
    { value: defaultTimeslot },
    { value: '19:30' },
    { value: '20:00' },
    { value: '20:30' },
    { value: '21:00' },
  ];
  const defaultDate = new Date().toISOString().split('T')[0];
  const occupants: SelectOption[] = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '10' },
  ];

  function submit(ev: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    if (form.checkValidity()) {
      const reservation = Object.fromEntries(
        new FormData(form).entries(),
      ) as unknown as T;
      onSubmit(reservation);
    } else {
      console.log('invalid form');
    }
  }
  const { i18n } = useContext(LanguageContext);

  return (
    <form noValidate={true} ref={formRef} onSubmit={submit}>
      <div className="relative z-0 w-full mb-6 group">
        <FloatingLabel id="reservationNameInput" label={i18n.name}>
          <Input id="reservationNameInput" name="name" required={true} />
        </FloatingLabel>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <FloatingLabel id="reservationEmailInput" label={i18n.email}>
          <Input id="reservationEmailInput" name="email" required={true} />
        </FloatingLabel>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <FloatingLabel id="dateInput" label={i18n.date}>
          <Input
            id="dateInput"
            name="date"
            type="date"
            defaultValue={defaultDate}
            required={true}
          />
        </FloatingLabel>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <Label label="Occupants">
          <Select name="" options={occupants} defaultValue="2"></Select>
        </Label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <Label label="Timeslot">
          <Select name="timeslot" options={timeslots} defaultValue={defaultTimeslot}></Select>
        </Label>
      </div>

      <Label label="Prefer window seat">
        <Checkbox name="preferWindowSeat" defaultChecked={false} />
      </Label>
      <Label label="Agree to terms and conditions">
        <Checkbox name="agree" required={true} defaultChecked={false} />
      </Label>
      <button type="submit">Submit</button>
    </form>
  );
}
