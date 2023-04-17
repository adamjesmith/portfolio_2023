import { createClient, Entry, EntryCollection } from 'contentful';

import { IProjectFields } from '../types/contentful';

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT as string,
});

function getContents<T>(contentType: string, queries?: unknown): Promise<T[]> {
  return contentfulClient
    .getEntries(Object.assign({ content_type: contentType }, queries))
    .then((response: EntryCollection<unknown>) => {
      const mapped = response.items.map((entry: Entry<unknown>) => {
        const result: T = entry.fields as T;
        return result;
      });

      const sorted = mapped.sort(
        (a: any, b: any) => a.displayOrder - b.displayOrder
      );

      return sorted;
    });
}

export function requestProjects(): Promise<IProjectFields[]> {
  return getContents<IProjectFields>('project').then(
    (project: IProjectFields[]) => project
  );
}
