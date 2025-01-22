import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Core Concepts', href: '/core-concepts' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'API Reference', href: '/api' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed w-64 h-screen bg-white shadow-sm pt-16">
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={clsx(
                  'block px-4 py-2 rounded-lg text-sm font-medium',
                  location.pathname === item.href
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm '
                    : 'text-gray-600 hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;