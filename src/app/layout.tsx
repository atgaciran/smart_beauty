import './globals.css';
import Header from '@/components/ui/Header';
import CartDrawer from '@/components/ui/CartDrawer';

export const metadata = {
  title: 'Smart Beauty',
  description: 'Discover your perfect skin routine with AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA] text-slate-800 antialiased selection:bg-brand-50 selection:text-brand">
        <Header />
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}