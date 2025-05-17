import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div class="videocontainer">
        <iframe class="responsive-width" 
        src="https://www.youtube.com/embed/0nTYkD6aCSc" 
        frameborder="0"
        allowfullscreen></iframe>

      </div>
        <p>
        BrainPad is a STEM coding platform, not a toy, though you can still PLAY.
        <br/>
        Understanding CODE is essential to EXCEL in this digitally-transformed-era.
        </p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
         <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            In progress... come back soon!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`BrainPad`}
      description="PLAY|CODE|EXCEL">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
