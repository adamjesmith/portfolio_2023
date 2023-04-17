import cn from 'clsx';
import * as React from 'react';

import s from './Link.module.css';

import { ArrowLeft, ArrowRight } from '@/components/icons';
import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export interface LinkProps extends UnstyledLinkProps {
  variant?: 'left' | 'right';
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, variant = 'right', children, ...rest } = props;

  const rootClassName = cn(s.root, className);

  const iconClass = cn(s.icon, {
    [s.left]: variant === 'left',
    [s.right]: variant === 'right',
  });
  return (
    <UnstyledLink ref={ref} {...rest} className={rootClassName}>
      {variant === 'left' && <ArrowLeft className={iconClass} />}
      {children}
      {variant === 'right' && <ArrowRight className={iconClass} />}
    </UnstyledLink>
  );
});

export default Link;
