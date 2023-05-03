import '../styles/globals.css';

import Header from '@/components/Header';

export const metadata = {
  title: 'Eco Genius',
  description: 'Site feito para APS 2023',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body className='dark'>
        <section className='transition duration-300 min-h-screen bg-grayMain dark:bg-darkMain'>
          <Header />
          {children}
        </section>
      </body>
    </html>
  )
}

export default RootLayout;