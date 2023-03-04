import { SignInOutButton } from '@/features/next-auth/SignInOutButton'
import { UserSession } from '@/features/next-auth/UserSession'
import styles from '@/styles/pages/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>
          Next.js <span className={styles.accent}>CRUD</span> App
        </h1>

        <SignInOutButton />
        <UserSession />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tsuki-lab"
          target="_blank"
          rel="noopener noreferrer"
        >
          by hanetsuki
        </a>
      </footer>
    </div>
  )
}
