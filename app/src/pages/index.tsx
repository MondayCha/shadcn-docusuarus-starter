import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Button } from '@/components/ui/button';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container space-y-4">
        <Heading as="h1" className="text-4xl font-bold">
          {siteConfig.title}
        </Heading>
        <p className="text-xl">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <Link to="/docs/intro">
              Check out some component examples
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
