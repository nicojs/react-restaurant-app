import { useState } from 'react';
import { FormControlProps } from './form-control-props';

export interface InputProps extends FormControlProps {
  type?: string;
  id?: string;
  defaultChecked?: false;
}

export function Input({
  id,
  name,
  type = 'text',
  required,
  defaultChecked,
  defaultValue,
}: InputProps) {
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState('');
  let classes =
    'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
  if (dirty) {
    classes +=
      ' invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500';
  }
  function updateValidityState(event: React.FocusEvent<HTMLInputElement>) {
    setDirty(true);
    setError(event.currentTarget.validationMessage);
  }
  function reset() {
    console.log('reset');
    return setDirty(false);
  }
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        onBlur={updateValidityState}
        onReset={reset}
        onInvalid={updateValidityState}
        className={classes}
        placeholder=" "
        defaultChecked={defaultChecked}
        required={required}
        defaultValue={defaultValue}
      />
      {dirty && error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );

}
