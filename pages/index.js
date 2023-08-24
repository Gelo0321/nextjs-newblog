import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>My First impression for the 1st month as a 3rd year CpE student.</p>
        <p>  </p>
        <p>As a 3rd yr. CpE student, my 1st month in this yr. is very hard and stressed because 
          of our schedule, and transportation. But our major subjects are very challenging and I enjoying doing it. I learned some knowledge about programming, and how to use Visual studio, gitbush..</p>
          <p> were trying to build application </p>
          <p> we know now how to update a website </p>

      </section>
    </Layout>
  );
}