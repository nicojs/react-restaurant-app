import { useState } from 'react';
import { FormControlProps } from './form-control-props';

export interface CheckboxProps extends FormControlProps {
  defaultChecked?: boolean;
}
export function Checkbox({ defaultChecked, required }: CheckboxProps) {
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState('');

  let classes = '';
  if (dirty) {
    classes +=
      ' invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500';
  }
  function updateValidityState(event: React.FocusEvent<HTMLInputElement>) {
    setDirty(true);
    setError(event.currentTarget.validationMessage);
  }

  return (
    <>
      <input
        type="checkbox"
        className={classes}
        required={required}
        onBlur={updateValidityState}
        onReset={() => setDirty(false)}
        onInvalid={updateValidityState}
        defaultChecked={defaultChecked}
      />
      {dirty && error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
}
