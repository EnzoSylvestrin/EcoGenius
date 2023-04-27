import '../styles/globals.css';

export const metadata = {
  title: 'Eco Genius',
  description: 'Site feito para APS 2023',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;