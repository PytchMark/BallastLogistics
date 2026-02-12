import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/containers', label: 'Containers' },
  { href: '/financing', label: 'Financing' },
  { href: '/about', label: 'About' },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-30 px-3 md:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/30 bg-white/10 shadow-[0_14px_35px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_24px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)] sm:text-lg"
            >
              Ballast Logistics Ltd.
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-slate-900/50 px-3 py-2 text-sm font-medium text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              Menu
            </button>

            <nav className="hidden items-center gap-1 rounded-full border border-white/25 bg-slate-900/35 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] md:flex">
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

          <motion.nav
            initial={false}
            animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
            className="overflow-hidden border-t border-white/15 md:hidden"
          >
            <div className="grid gap-1 px-3 py-3">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-sm transition ${
                      isActive
                        ? 'border border-cyan-200/40 bg-gradient-to-b from-white/35 via-ballast-300/25 to-ballast-500/30 text-white'
                        : 'border border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
