import clsx from 'clsx';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import Header from '@/components/Sections/Header';
import { ServerThemeProvider } from '@wits/next-themes';
import ScrollBar from '@/components/Utility/ScrollBar';

export const metadata = {
  title: 'Eco Genius',
  description: 'Site feito para APS 2023',
  icons: {
    icon: '/favicon.ico'
  }
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
              'selection:text-main selection:bg-transparent'
            )}
            id='page-top'
          >
            <ScrollBar />
            <Header />
            {children}
          </section>
        </body>
      </html>
    </ServerThemeProvider>
  )
}

export default RootLayout;