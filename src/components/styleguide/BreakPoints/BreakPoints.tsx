import cn from 'clsx';
import { FC } from 'react';

import s from './BreakPoints.module.css';

interface BreakPointsProps {
  className?: string;
}

const BreakPoints: FC<BreakPointsProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);
  return (
    <div className={rootClassName}>
      <div className={[s.none, s.cell].join(' ')}>
        <span className={s.breakpoint}>No Breakpoint</span>
        <span className={s.size}>0px - 374px</span>
      </div>
      <div className={[s.xxs, s.cell].join(' ')}>
        <span className={s.breakpoint}>XXS</span>
        <span className={s.size}>375px - 507px</span>
      </div>
      <div className={[s.xs, s.cell].join(' ')}>
        <span className={s.breakpoint}>XS</span>
        <span className={s.size}>508px - 639px</span>
      </div>
      <div className={[s.sm, s.cell].join(' ')}>
        <span className={s.breakpoint}>SM</span>
        <span className={s.size}>640px - 767px</span>
      </div>
      <div className={[s.md, s.cell].join(' ')}>
        <span className={s.breakpoint}>MD</span>
        <span className={s.size}>768px - 1023px</span>
      </div>
      <div className={[s.lg, s.cell].join(' ')}>
        <span className={s.breakpoint}>LG</span>
        <span className={s.size}>1024px - 1279px</span>
      </div>
      <div className={[s.xl, s.cell].join(' ')}>
        <span className={s.breakpoint}>XL</span>
        <span className={s.size}>1280px - 1535px</span>
      </div>
      <div className={[s.xl2, s.cell].join(' ')}>
        <span className={s.breakpoint}>2XL</span>
        <span className={s.size}>1536px +</span>
      </div>
    </div>
  );
};

export default BreakPoints;
