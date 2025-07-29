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
        <p>
        BrainPad is a STEM coding platform, not a toy, though you can still <strong>PLAY</strong>.
        <br/>
        Understanding <strong>CODE</strong> is essential to <strong>EXCEL</strong> communities in a digitally-transformed-era.
        </p>
        
         <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="community">
            BrainPad is Everywhere!
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
      <div style={{display: 'block',  justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <img src="/img/brainpad-logo.png" alt="logo" />
      </div>
      <HomepageHeader />
      
      <main>
        <HomepageFeatures />
      </main>
      <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            
            to="impact">
            BrainPad Impact
          </Link>
        </div>
        <p> </p>
    </Layout>
  );
}
