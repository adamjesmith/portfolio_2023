import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import {
  BreakPoints,
  ColorSwatches,
  Containers,
  FontSizing,
  Iconography,
  StyleLinks,
  StyleSection,
  TypographyStyles,
} from '@/components/styleguide';
import { Button, Container } from '@/components/ui';

export default function StyleGuide() {
  const [active, SetActive] = useState(0);

  const categories = [
    'Colours',
    'Links',
    'Iconography',
    'Typography',
    'Font Sizes',
    'Breakpoints',
    'Containers',
  ];

  return (
    <Layout>
      <Seo
        templateTitle='Style Guide'
        description='Pre-built components with awesome default'
      />

      <main className='pt-24 lg:pt-32'>
        <Container className='mb-12 py-6'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5'>
            {categories.map((category, index) => (
              <Button
                key={category}
                type='button'
                active={active === index}
                variant={active === index ? 'ghost' : 'flat'}
                onClick={() => SetActive(index)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>

        <Container>
          {active === 0 && (
            <StyleSection title='Colours'>
              <ColorSwatches />
            </StyleSection>
          )}

          {active === 1 && (
            <StyleSection title='Links'>
              <StyleLinks />
            </StyleSection>
          )}

          {active === 2 && (
            <StyleSection title='Iconography'>
              <Iconography />
            </StyleSection>
          )}

          {active === 3 && (
            <StyleSection title='Typography'>
              <TypographyStyles />
            </StyleSection>
          )}

          {active === 4 && (
            <StyleSection
              title='Font Sizes'
              intro='The breakpoint for the fonts is 1024px'
            >
              <FontSizing />
            </StyleSection>
          )}
        </Container>
      </main>

      {active === 5 && (
        <div>
          <Container>
            <StyleSection title='Breakpoints'></StyleSection>
          </Container>
          <BreakPoints />
        </div>
      )}

      {active === 6 && (
        <div>
          <Container>
            <StyleSection
              title='Containers'
              intro='Padding for containers is 24px / 48px'
            ></StyleSection>
          </Container>
          <Containers />
        </div>
      )}
    </Layout>
  );
}
