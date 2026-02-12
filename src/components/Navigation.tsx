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
    <header className="sticky top-3 z-30 px-3 md:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/30 bg-white/10 shadow-[0_14px_35px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_24px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <Link to="/" className="text-lg font-semibold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)]">
              Ballast Logistics Ltd.
            </Link>
            <nav className="flex items-center gap-1 rounded-full border border-white/25 bg-slate-900/35 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
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
                          className="absolute inset-0 -z-10 rounded-full border border-cyan-200/40 bg-gradient-to-b from-white/35 via-ballast-300/25 to-ballast-500/30 shadow-[0_6px_18px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.5)]"
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
        </div>
      </div>
    </header>
  );
}

export default Navigation;
