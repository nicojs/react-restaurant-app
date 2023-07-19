import { render, screen  } from '@testing-library/react';
import { SubHeader } from './sub-header';

describe(SubHeader, () => {
  it('should render an h2', () => {
    const thing = render(<SubHeader>Hello world</SubHeader>);
    const h2 = thing.getByText('Hello world');
    expect(h2.tagName).toBe('H2');
    expect(h2.className).toBe('text-xl my-3 font-bold');
  });

  it('should match snapshot', () => {
    const fragment = render(<SubHeader>Hello world</SubHeader>).asFragment();
    expect(fragment).toMatchSnapshot();
  });
});
