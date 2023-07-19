import { PropsWithChildren } from 'react';

export function SubHeader({ children }: PropsWithChildren) {
  return <h2 className="text-xl my-3 font-bold">{children}</h2>;
}
