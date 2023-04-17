import cn from 'clsx';
import { FC } from 'react';

import s from './TypographyStyles.module.css';
interface TypographyStylesProps {
  className?: string;
}

const TypographyStyles: FC<TypographyStylesProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <div className={rootClassName}>
      <div className={s.block}>
        <h4 className={s.title}>Montserrat</h4>

        <div className={s.contain}>
          <div className={s.example}>
            <h5 className={[s.font, 'font-medium'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>

            <h5 className={[s.font, 'font-medium'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>
          </div>

          <div className={s.info}>
            <span className={s.name}>Regular</span>
            <span className={s.weight}>Weight: 500</span>
            <span className={s.tailwind}>Tailwind:</span>
            <span className={s.styles}>font-medium</span>
          </div>
        </div>

        <div className={s.contain}>
          <div className={s.example}>
            <h5 className={[s.font, 'font-medium italic'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>

            <h5 className={[s.font, 'font-medium italic'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>
          </div>

          <div className={s.info}>
            <span className={s.name}>Regular Italic</span>
            <span className={s.weight}>Weight: 500</span>
            <span className={s.tailwind}>Tailwind:</span>
            <span className={s.styles}>font-medium</span>
          </div>
        </div>

        <div className={s.contain}>
          <div className={s.example}>
            <h5 className={[s.font, 'font-bold'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>

            <h5 className={[s.font, 'font-bold'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>
          </div>

          <div className={s.info}>
            <span className={s.name}>Bold</span>
            <span className={s.weight}>Weight: 700</span>
            <span className={s.tailwind}>Tailwind:</span>
            <span className={s.styles}>font-bold</span>
          </div>
        </div>

        <div className={s.contain}>
          <div className={s.example}>
            <h5 className={[s.font, 'font-bold italic'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>

            <h5 className={[s.font, 'font-bold italic'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>
          </div>

          <div className={s.info}>
            <span className={s.name}>Bold Italic</span>
            <span className={s.weight}>Weight: 700</span>
            <span className={s.tailwind}>Tailwind:</span>
            <span className={s.styles}>font-bold italic</span>
          </div>
        </div>

        <div className={s.contain}>
          <div className={s.example}>
            <h5 className={[s.font, 'font-black'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>

            <h5 className={[s.font, 'font-black'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>
          </div>

          <div className={s.info}>
            <span className={s.name}>Black</span>
            <span className={s.weight}>Weight: 900</span>
            <span className={s.tailwind}>Tailwind:</span>
            <span className={s.styles}>font-black</span>
          </div>
        </div>

        <div className={s.contain}>
          <div className={s.example}>
            <h5 className={[s.font, 'font-black italic'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>

            <h5 className={[s.font, 'font-black italic'].join(' ')}>
              The quick brown fox jumps over the lazy dog
            </h5>
          </div>

          <div className={s.info}>
            <span className={s.name}>Bold Italic</span>
            <span className={s.weight}>Weight: 900</span>
            <span className={s.tailwind}>Tailwind:</span>
            <span className={s.styles}>font-extrabold italic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyStyles;
