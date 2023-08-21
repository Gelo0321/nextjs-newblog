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
      <p>I am a 3rd year College student at University of the Assumption.
          I am 20 years old, and I come from Macabebe, Pampanga.
          Some of my interests include playing mobile games, badminton.</p>
        <p>  </p>
        <p>Because our technology is expanding and I want to be a part of it.</p>
        <p>After i Graduated, i can see my self as a front end developer, 
          because I enjoy designing a website.</p>

      </section>
    </Layout>
  );
}