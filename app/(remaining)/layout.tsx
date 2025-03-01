// app/layout.tsx
import Footer from '@/components/footer';
import '../globals.css';
import Navbar from '@/components/navbar';
import { CartProvider } from '@/context/CartContext';

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
      <body className="flex flex-col min-h-screen text-gray-800">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
