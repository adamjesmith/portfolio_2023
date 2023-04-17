import cn from 'clsx';
import { FC } from 'react';

import s from './FontHeading.module.css';

interface FontHeadingProps {
  className?: string;
  name: string;
  html: string;
  sizes: string[];
  typographyClass?: string;
}

const FontHeading: FC<FontHeadingProps> = ({
  className,
  name,
  html,
  sizes,
  typographyClass,
}) => {
  const rootClassName = cn(s.root, className);
  const headerClass = `${typographyClass && typographyClass}`;
  const header = `<${html} class=${headerClass}>${name}</${html}>`;

  return (
    <div className={rootClassName}>
      <div className={s.row}>
        <div
          className={s.example}
          dangerouslySetInnerHTML={{ __html: header }}
        ></div>

        <div className={s.info}>
          <span className={s.name}>{name}</span>
          <span className={s.fonts}>Font sizes:</span>
          <div className={s.sizes}>
            {sizes.map((size) => (
              <span key={size} className={s.size}>
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontHeading;
