import cn from 'clsx';
import { FC } from 'react';

import s from './StyleLinks.module.css';

import { Link } from '@/components/ui';

interface StyleLinksProps {
  className?: string;
}

const StyleLinks: FC<StyleLinksProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <div className={rootClassName}>
      <h4>Primary</h4>
      <div className={s.row}>
        <div className={s.contain}>
          <Link className={s.button} variant='left' href='/'>
            left link
          </Link>
          <p className={s.name}>Left</p>
        </div>

        <div className={s.contain}>
          <Link className={s.button} variant='right' href='/'>
            right link
          </Link>
          <p className={s.name}>Right</p>
        </div>
      </div>
    </div>
  );
};

export default StyleLinks;
