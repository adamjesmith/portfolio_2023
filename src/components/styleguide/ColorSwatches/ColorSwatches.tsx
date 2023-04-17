import cn from 'clsx';
import { FC } from 'react';

import s from './ColorSwatches.module.css';

import data from './data.json';

interface ColorSwatchesProps {
  className?: string;
}

const ColorSwatches: FC<ColorSwatchesProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);
  const { colors } = data;

  return (
    <div className={rootClassName}>
      {colors.map((color) => (
        <div className={s.block} key={color.name}>
          <h4 className={s.title}>{color.name}</h4>

          {color.swatches.map((swatch) => (
            <div className={s.container} key={swatch.hex}>
              <div
                className={s.swatch}
                style={{
                  backgroundColor: swatch.hex,
                }}
              ></div>

              <div className={s.refs}>
                <span className={s.hex}>{swatch.hex}</span>
                <span className={s.code}>{swatch.code}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorSwatches;
