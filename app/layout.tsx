// app/layout.tsx
import Footer from '@/components/footer';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Vaselsa',
  description: 'A simple Next.js project with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
