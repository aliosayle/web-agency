import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
