import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import cn from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import s from './MobileNavigation.module.css';

import { useDebounce, useWindowSize } from '@/lib/hooks';
import { useUI } from '@/lib/utils/context';
import { footerLinks } from '@/lib/utils/footer-links';
import { navLinks } from '@/lib/utils/nav-links';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function MobileNavigation() {
  const { burgerMenuOpen, openBurgerMenu, closeBurgerMenu } = useUI();
  const ref = useRef() as React.MutableRefObject<HTMLUListElement>;
  const [prevWidth, setPrevWidth] = useState(0);
  const { width } = useWindowSize();
  const debounceWidth = useDebounce<number>(width, 500);

  const router = useRouter();
  const index = router.asPath === '/';

  const links = [...navLinks, ...footerLinks];

  useEffect(() => {
    if (ref.current) {
      if (burgerMenuOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }

      if (prevWidth <= 1023 && debounceWidth > 1023 && burgerMenuOpen) {
        // if resized from mobile to desktop & burger menu is open
        // close burger menu & clear body lock
        disableBodyScroll(ref.current);
        closeBurgerMenu();
      }
    }

    setPrevWidth(debounceWidth);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [burgerMenuOpen, debounceWidth]);

  return (
    <nav
      ref={ref}
      className={cn(s.root, { [s.open]: burgerMenuOpen, [s.index]: index })}
    >
      <button
        onClick={() => (burgerMenuOpen ? closeBurgerMenu() : openBurgerMenu())}
        className={s.burger}
      >
        <span className={s.lines}>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </span>
      </button>

      <ul className={s.list}>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className={s.item}>
            <UnstyledLink
              onClick={() => burgerMenuOpen && closeBurgerMenu()}
              href={href}
              className={s.link}
            >
              {label}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
