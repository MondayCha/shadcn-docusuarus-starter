import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tailwind + Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Seamlessly integrate Tailwind CSS with Docusaurus while preserving all the
        default styling. Use Tailwind classes alongside Docusaurus&apos;s built-in
        classes for maximum flexibility.
      </>
    ),
  },
  {
    title: 'CLI Component Installation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Install new components effortlessly using the CLI. Everything works out of
        the box - from setup to implementation. Just run <code>npx shadcn@latest add [name]></code> and
        you are ready to go.
      </>
    ),
  },
  {
    title: 'TypeScript Ready',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Built with TypeScript from the ground up. Enjoy full type safety and
        excellent IDE support while building your components. Props validation and
        autocomplete work right away.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="flex justify-center items-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="text-2xl font-bold">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
