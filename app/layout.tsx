// app/layout.tsx
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js project with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
