import * as React from 'react';

import s from './Footer.module.css';

import { footerLinks } from '@/lib/utils/footer-links';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className={s.root}>
      <p className={s.title}>frontend developer</p>
      <ul className={s.list}>
        {footerLinks.map((link, index) => (
          <li className={s.item} key={index}>
            <UnstyledLink
              className={s.link}
              href={link.href}
              download={link.download}
            >
              {link.label}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
