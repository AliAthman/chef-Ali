import Image from 'next/image';
import Banner from './components/Banner';
import Cook from './components/Cook';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter/Newsletter';
import Features from './components/Work/index';

export default function Home() {
  return (
    <div >
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />
    </div>
  );
}
