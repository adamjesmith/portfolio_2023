import cn from 'clsx';
import React, { FC } from 'react';

import s from './Section.module.css';

interface SectionProps {
  className?: string;
  children?: any;
  clean?: boolean;
  noMaxWidth?: boolean;
  text?: boolean;
  noPaddingBottom?: boolean;
  noPaddingTop?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  className,
  noPaddingBottom = true,
  noPaddingTop = false,
}) => {
  const rootClassName = cn(className, s.root, {
    [s.noPaddingBottom]: noPaddingBottom,
    [s.noPaddingTop]: noPaddingTop,
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Section;
