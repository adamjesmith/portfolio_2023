import cn from 'clsx';
import { FC } from 'react';

import s from './Iconography.module.css';

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Contentful,
  Figma,
  Github,
  Heroku,
  Invision,
  Javascript,
  Klaviyo,
  Next,
  Nosto,
  Photoshop,
  React,
  Recharge,
  Sass,
  Shopify,
  Sketch,
  Tailwind,
  Typescript,
  Vercel,
  Vue,
  Webpack,
} from '@/components/icons';

interface IconographyProps {
  className?: string;
}

const Iconography: FC<IconographyProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  const icons = [
    { name: '<ArrowDown />', component: ArrowDown },
    { name: '<ArrowLeft />', component: ArrowLeft },
    { name: '<ArrowRight />', component: ArrowRight },
    { name: '<ArrowUp />', component: ArrowUp },
    { name: '<ChevronDown />', component: ChevronDown },
    { name: '<ChevronLeft />', component: ChevronLeft },
    { name: '<ChevronRight />', component: ChevronRight },
    { name: '<ChevronUp />', component: ChevronUp },
    { name: '<Contentful />', component: Contentful },
    { name: '<Figma />', component: Figma },
    { name: '<Github />', component: Github },
    { name: '<Heroku />', component: Heroku },
    { name: '<Invision />', component: Invision },
    { name: '<Javascript />', component: Javascript },
    { name: '<Klaviyo />', component: Klaviyo },
    { name: '<Next />', component: Next },
    { name: '<Nosto />', component: Nosto },
    { name: '<Photoshop />', component: Photoshop },
    { name: '<React />', component: React },
    { name: '<Recharge />', component: Recharge },
    { name: '<Sass />', component: Sass },
    { name: '<Shopify />', component: Shopify },
    { name: '<Sketch />', component: Sketch },
    { name: '<Tailwind />', component: Tailwind },
    { name: '<Typescript />', component: Typescript },
    { name: '<Vercel />', component: Vercel },
    { name: '<Vue />', component: Vue },
    { name: '<Webpack />', component: Webpack },
  ];

  return (
    <div className={rootClassName}>
      <div className={s.row}>
        {icons.map((icon) => {
          const Component = icon.component;
          return (
            <div className={s.contain} key={icon.name}>
              <Component className={s.icon} />
              <span className={s.name}>{icon.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Iconography;
