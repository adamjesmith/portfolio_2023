import cn from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import s from './Navigation.module.css';

import { navLinks } from '@/lib/utils/nav-links';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Navigation() {
  const router = useRouter();
  const project = router.asPath.includes('projects');

  return (
    <nav className={cn(s.root, { [s.project]: project })}>
      <ul className={s.list}>
        {navLinks.map(({ href, label }) => (
          <li key={`${href}${label}`} className={s.item}>
            <UnstyledLink href={href} className={s.link}>
              {label}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
