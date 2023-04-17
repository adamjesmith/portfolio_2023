import { RiAlarmWarningFill } from 'react-icons/ri';

import s from './Basic.module.css';

import { Link } from '@/components/ui';
type LinkType = {
  download?: boolean;
  href: string;
  label: string;
};

type BasicProps = {
  links?: LinkType[];
  text?: string;
  title?: string;
  subtitle?: string;
  warning?: boolean;
};

export default function Basic({
  links = [
    {
      href: '/',
      label: 'back home',
    },
  ],
  text,
  title,
  subtitle,
  warning,
}: BasicProps) {
  return (
    <main className={s.root}>
      <section className={s.container}>
        {title && <h1 className={s.title}>{title}</h1>}

        {subtitle && <h5 className={s.subtitle}>{subtitle}</h5>}

        {warning && (
          <div className={s.warning}>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow text-red-500 animate-flicker'
            />
          </div>
        )}

        {text && <p className={s.text}>{text}</p>}

        {links && (
          <ul className={s.links}>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  download={link.download}
                  className={s.link}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
