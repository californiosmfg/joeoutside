import '../src/styles/index.css'; // Assuming styles are in src/styles/
import Navbar from '../src/components/Navbar'; // Assuming Navbar is in src/components/
import Footer from '../src/components/Footer'; // Assuming Footer is in src/components/
import ScrollToTop from '../src/components/ScrollToTop'; // Assuming ScrollToTop is in src/components/

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF8E7] text-gray-800">
      {/* ScrollToTop might need rethinking in Next.js, as it often handles scroll restoration.
          For now, we include it. It might be better as a component used per-page or via Next.js router events. */}
      <ScrollToTop /> 
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp; 