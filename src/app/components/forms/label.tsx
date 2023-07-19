import { PropsWithChildren } from 'react';

interface LabelProps extends PropsWithChildren {
  label: string;
}

export function Label({ label, children }: LabelProps) {
  return (
    <div className="mb-6">
      <label className="block mr-2">
        <span className="mr-2">{label}</span>
        {children}
      </label>
    </div>
  );
}
