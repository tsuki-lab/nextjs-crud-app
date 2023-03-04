import 'ress/dist/ress.min.css'
import '@/styles/global.css'
import { SessionProvider } from '@/features/next-auth/SessionProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="ja">
        <head />
        <body>{children}</body>
      </html>
    </SessionProvider>
  )
}

export const metadata = {
  title: 'Nextjs CRUD App',
  description:
    'CRUD Web APP environment to Next.js, Prisma, PlanetScale, NextAuth.js',
  icons: {
    icon: '/favicon.ico',
  },
}
