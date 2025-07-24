import '../src/styles/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';

export const metadata = {
  title: 'Joe Outside',
  description: 'Outdoor guides & tips',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FEF8E7] text-gray-800">
        {/* Scroll restoration */}
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
