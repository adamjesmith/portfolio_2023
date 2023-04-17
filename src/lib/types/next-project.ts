import { Asset } from 'contentful';

export type NextProject = {
  image: Asset;
  primary: string;
  secondary: string;
  slug: string;
  title: string;
};
