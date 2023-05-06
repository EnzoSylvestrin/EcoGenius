import clsx from 'clsx';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import Header from '@/components/Sections/Header';
import { ServerThemeProvider } from '@wits/next-themes';

export const metadata = {
  title: 'Eco Genius',
  description: 'Site feito para APS 2023',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ServerThemeProvider
      attribute="class"
      defaultTheme='dark'
    >
      <html lang="pt">
        <body>
          <section
            className={clsx(
              'transition duration-300 min-h-screen bg-grayMain dark:bg-darkMain',
            )}
            id='page-top'
          >
            <Header />
            {children}
          </section>
        </body>
      </html>
    </ServerThemeProvider>
  )
}

export default RootLayout;