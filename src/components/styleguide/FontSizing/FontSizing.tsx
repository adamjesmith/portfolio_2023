import cn from 'clsx';
import { FC } from 'react';

import s from './FontSizing.module.css';

import { FontHeading } from '@/components/styleguide';
interface FontSizingProps {
  className?: string;
}

const FontSizing: FC<FontSizingProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <div className={rootClassName}>
      <h4 className={s.title}>Headings</h4>

      <FontHeading
        name='Display 1'
        html='h1'
        typographyClass='d1'
        sizes={['96px', '128px']}
      />
      <FontHeading
        name='Display 2'
        html='h1'
        typographyClass='d2'
        sizes={['72px', '96px']}
      />
      <FontHeading
        name='Display 3'
        html='h1'
        typographyClass='d3'
        sizes={['60px', '72px']}
      />

      <FontHeading name='Heading 1' html='h1' sizes={['48px', '60px']} />
      <FontHeading name='Heading 2' html='h2' sizes={['36px', '48px']} />
      <FontHeading name='Heading 3' html='h3' sizes={['30px', '36px']} />
      <FontHeading name='Heading 4' html='h4' sizes={['24px', '30px']} />
      <FontHeading name='Heading 5' html='h5' sizes={['20px', '24px']} />
      <FontHeading name='Heading 6' html='h6' sizes={['18px', '20px']} />

      <h4 className={s.title}>Paragraph</h4>
      <p>
        Yet there was bitterness. And bitterness not only invaded us from the
        world; it welled up also within our own magic circle. For horror at our
        futility, at our own unreality, and not only at the world’s delirium,
        had driven me out on to the hill.
      </p>
      <p>
        <span className='font-bold'>Font-size:</span>
        <span className='pl-2'>16px</span>
      </p>

      <h4 className={s.title}>Small Text</h4>
      <p className='text-sm'>
        Yet there was bitterness. And bitterness not only invaded us from the
        world; it welled up also within our own magic circle. For horror at our
        futility, at our own unreality, and not only at the world’s delirium,
        had driven me out on to the hill.
      </p>
      <p>
        <span className='font-bold'>Font-size:</span>
        <span className='pl-2'>14px</span>
      </p>

      <h4 className={s.title}>Lists</h4>
      <ul>
        <li>We had first met when she was a child</li>
        <li>Our eyes encountered</li>
        <li>She looked at me for a moment with quiet attention</li>
        <li>
          Even, I had romantically imagined, with obscure, deep-lying
          recognition
          <ul>
            <li>I, at any rate, recognized in that look</li>
            <li>So I persuaded myself in my fever of adolescence</li>
          </ul>
        </li>
        <li>My destiny</li>
      </ul>

      <ol>
        <li>The Diversity of Worlds</li>
        <li>Strange Mankinds</li>
        <li>Nautiloids</li>
        <li>
          The Earth
          <ul>
            <li>The Starting Point</li>
            <li>Earth Among the Stars</li>
          </ul>
        </li>
        <li>More Worlds</li>
      </ol>

      <p>
        <small>
          Text excerpt from{' '}
          <a href='http://ebooks.adelaide.edu.au/s/stapledon/olaf/star/'>
            <i>Star Maker</i> by Olaf Stapledon
          </a>
        </small>
      </p>
    </div>
  );
};

export default FontSizing;
