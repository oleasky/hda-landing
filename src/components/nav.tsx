'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#dealership', label: 'The Dealership' },
  { href: '#collection', label: 'The Collection' },
  { href: '#road-ahead', label: 'The Road Ahead' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-white/10 bg-[#0E112B]/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#top" className="flex items-center" aria-label="Highdown Automotive — home">
          <Image
            src="/images/highdown-logo.svg"
            alt="Highdown Automotive"
            width={182}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#cbd5e1] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg border border-[#368EFF]/60 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-[#368EFF] hover:bg-[#368EFF]/10"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-[#0E112B]/95 px-6 pb-8 pt-4 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[#cbd5e1] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg border border-[#368EFF]/60 px-3 py-3 text-center text-base font-semibold text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
