import cn from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import s from './Header.module.css';

import { useUI } from '@/lib/utils/context';

import { MobileNavigation, Navigation } from '@/components/common';
import UnstyledLink from '@/components/links/UnstyledLink';
import { Link } from '@/components/ui';

export default function Header() {
  const { burgerMenuOpen, closeBurgerMenu } = useUI();
  const router = useRouter();
  const project = router.asPath.includes('projects');

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScrolled(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={cn(s.root, {
        [s.burgerOpen]: burgerMenuOpen,
        [s.project]: project,
        [s.scrolled]: scrolled,
      })}
    >
      <div className={s.container}>
        {!project && (
          <UnstyledLink
            onClick={() => burgerMenuOpen && closeBurgerMenu()}
            href='/'
            className={s.home}
          >
            adam smith
          </UnstyledLink>
        )}

        {project && (
          <Link
            onClick={() => burgerMenuOpen && closeBurgerMenu()}
            className={s.back}
            variant='left'
            href='/'
          >
            go back
          </Link>
        )}

        <Navigation></Navigation>
        <MobileNavigation></MobileNavigation>
      </div>
    </header>
  );
}
