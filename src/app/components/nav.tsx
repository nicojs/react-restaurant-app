import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

export function NavBar({ children }: PropsWithChildren) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export interface NavItemProps extends PropsWithChildren {
  active?: boolean;
  href: string;
}
export function NavItem({ children, active, href }: NavItemProps) {
  const pathname = usePathname()
  active ??= pathname === href;
  const classes = 'block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white ' + (active ? 'dark:text-blue-700 text-blue-700 bg-blue-700' : '');
  return (
    <li>
      <Link
        href={href}
        className={classes}
        aria-current="page"
      >
        {children}
      </Link>
    </li>
  );
}
