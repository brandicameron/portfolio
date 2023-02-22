import Head from 'next/head';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandi Cameron | Front-end Developer in Nashville</title>
        <meta
          name='description'
          content="Hi, I'm Brandi, a front-end developer and graphic designer in Nashville. I love creating projects that engage and delight users — let's make something cool together."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Projects />
    </div>
  );
}
