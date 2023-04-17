import cn from 'clsx';
import { FC } from 'react';

import s from './StyleSection.module.css';

interface StyleSectionProps {
  className?: string;
  children?: any;
  intro?: string;
  title?: string;
}

const StyleSection: FC<StyleSectionProps> = ({
  className,
  children,
  intro,
  title,
}) => {
  const rootClassName = cn(s.root, className);

  return (
    <div className={rootClassName}>
      {title && <h2 className={s.title}>{title}</h2>}

      {intro && <p className={s.intro}>{intro}</p>}

      <hr className={s.hr} />
      {children}
    </div>
  );
};

export default StyleSection;
