import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/containers', label: 'Containers' },
  { href: '/financing', label: 'Financing' },
  { href: '/about', label: 'About' },
];

function Navigation() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="text-lg font-semibold tracking-wide text-white">
          Ballast Logistics Ltd.
        </Link>
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-1.5 text-sm transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ballast-500/30"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
