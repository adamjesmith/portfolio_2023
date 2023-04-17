import cn from 'clsx';
import React, { FC } from 'react';

import s from './Container.module.css';

interface ContainerProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
  noMaxWidth?: boolean;
  text?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false,
  noMaxWidth = false,
  text = false,
}) => {
  const rootClassName = cn(className, s.root, {
    [s.clean]: clean,
    [s.noMaxWidth]: noMaxWidth,
    [s.text]: text,
  });

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
