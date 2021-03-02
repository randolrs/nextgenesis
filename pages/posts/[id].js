import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function PostId() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Post ID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Post #
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/posts/[id].js</code>
        </p>
      </main>
    </div>
  )
}
