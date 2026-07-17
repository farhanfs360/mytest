import './globals.css';

export const metadata = {
  title: 'Farhan | Portfolio',
  description: 'Portfolio website for Farhan built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
