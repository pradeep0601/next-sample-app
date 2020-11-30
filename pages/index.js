import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sample Next App
        </h1>
        <p>
          Say <Link href="/greetings/sayhi"><button>Hi</button></Link>
        </p>
        <p>
          Say <Link href="/greetings/sayhello"><button>Hello</button></Link>
        </p>
      </main>
    </div>
  )
}
