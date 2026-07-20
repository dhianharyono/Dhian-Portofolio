import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Dhian Haryono | Senior Frontend Engineer',
  description: '',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jakarta.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
