import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={utilStyles.link__spacing}>
          <Link href={'/hierarchy_view'}>Hierarchy view</Link>
        </div>
        <div className={utilStyles.link__spacing}>
          <Link href={'/drawing_view'}>Drawing view</Link>
        </div>
        <div className={utilStyles.link__spacing}>
          <Link href={'/services_view'}>Services view</Link>
        </div>
      </section>
    </Layout>
  );
}
