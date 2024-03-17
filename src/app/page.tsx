import About from '@/components/About';
import Courses from '@/components/Courses';
import Header from '@/components/Header';
import Sponsorships from '@/components/Sponsorships';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Courses />
      <Sponsorships />
    </div>
  );
}
