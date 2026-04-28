import Nav from '@/components/Nav';
import HeroEditorial from '@/components/HeroEditorial';
import Challenges from '@/components/Challenges';
import ProductSplit from '@/components/ProductSplit';
import Differentiators from '@/components/Differentiators';
import ValueSection from '@/components/ValueSection';
import Manifest from '@/components/Manifest';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav variant="editorial" />
      <HeroEditorial />
      <Challenges />
      <ProductSplit />
      <Differentiators />
      <ValueSection />
      <Manifest />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
