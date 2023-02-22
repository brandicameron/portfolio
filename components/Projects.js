import styles from './Projects.module.css';
import Image from 'next/image';

export default function Projects() {
  return (
    <article className={styles.project}>
      <figure className={styles.projectImages}>
        <Image
          priority='true'
          src='/images/projects/blackjack-ipad.png'
          width={620}
          height={474}
          alt='Blackjack game shown on iPad.'
          className={styles.ipadImage}
        ></Image>
        <Image
          priority='true'
          src='/images/projects/blackjack-iphone.png'
          width={620}
          height={474}
          alt='Blackjack game shown on iPhone.'
          className={styles.iphoneImage}
        ></Image>
        <figcaption>Design &amp; Developement: Brandi Cameron</figcaption>
      </figure>

      <section className={styles.projectInfo}>
        <h1>Blackjack</h1>

        <ul className={styles.projectTechStack}>
          <li>React</li>
          <li>Redux</li>
          <li>CSS Animations</li>
        </ul>

        <ul className={styles.projectLinks}>
          <li>
            <button className={styles.showOnMobile}>More Info</button>
          </li>
          <li>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              View Live
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              View Code
            </a>
          </li>
        </ul>

        <p>
          My first React project and damn I jumped straight in the deep end, but hey — what a rush!
        </p>
        <p>
          The game plays with a custom designed 6 deck shoe, reshuffling after falling below 75
          cards. Dealer must stand on 17, and blackjack pays 3:2. Selected chips animate to the
          table from the correct location in the bank.
        </p>
        <p>Figuring out how to score aces in all circumstances was an especially fun challenge.</p>
      </section>

      <ul className={styles.projectThumbnails}>
        <li>
          <Image
            priority='true'
            src='/images/projects/blackjack-ipad.png'
            width={620}
            height={474}
            alt='Blackjack game shown on iPad.'
            className={styles.thumbnail}
          ></Image>
        </li>
        <li>
          <Image
            priority='true'
            src='/images/projects/nosh-ipad.png'
            width={620}
            height={474}
            alt='Blackjack game shown on iPad.'
            className={styles.thumbnail}
          ></Image>
        </li>
        <li>
          <Image
            priority='true'
            src='/images/projects/cleangreen-ipad.png'
            width={620}
            height={474}
            alt='Blackjack game shown on iPad.'
            className={styles.thumbnail}
          ></Image>
        </li>
      </ul>
    </article>
  );
}
