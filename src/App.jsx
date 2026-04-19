import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import ProcessSection from './sections/ProcessSection.jsx';
import GiftSection from './sections/GiftSection.jsx';
import StorySection from './sections/StorySection.jsx';
import LinksSection from './sections/LinksSection.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProcessSection />
        <GiftSection />
        <StorySection />
        <LinksSection />
      </main>
      <Footer />
    </>
  );
}
