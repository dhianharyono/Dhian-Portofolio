import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://dhianharyono.vercel.app'),
  title: {
    default: 'Dhian Haryono | Senior Frontend Engineer',
    template: '%s | Dhian Haryono',
  },
  description:
    'Portfolio of Dhian Haryono, a Senior Frontend Engineer specializing in high-performance React.js, Next.js, TypeScript, and modern web application architecture.',
  keywords: [
    'Dhian Haryono',
    'Senior Frontend Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Engineer',
    'Telkom Indonesia',
    'Web Developer Portfolio',
    'Frontend Architect',
  ],
  authors: [{ name: 'Dhian Haryono', url: 'https://github.com/dhianharyono' }],
  creator: 'Dhian Haryono',
  publisher: 'Dhian Haryono',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Dhian Haryono | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in high-performance React & Next.js web applications, UI/UX engineering, and modern web architecture.',
    url: 'https://dhianharyono.vercel.app',
    siteName: 'Dhian Haryono Portfolio',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Dhian Haryono - Senior Frontend Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhian Haryono | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in high-performance React & Next.js web applications.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dhian Haryono',
  jobTitle: 'Senior Frontend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Telkom Indonesia',
  },
  url: 'https://dhianharyono.vercel.app',
  sameAs: [
    'https://github.com/dhianharyono',
    'https://www.linkedin.com/in/dhian-haryono/',
    'https://www.upwork.com/freelancers/~01004f811bfcb5f1ed',
  ],
  knowsAbout: [
    'Frontend Development',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Web Performance Optimization',
    'Software Architecture',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Telkom University',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jakarta.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

