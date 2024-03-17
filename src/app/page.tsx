import About from '@/components/About';
import Courses from '@/components/Courses';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import Sponsorships from '@/components/Sponsorships';
import Testimonials from '@/components/Testimonials';
import { TESTIMONIALS_HOME } from '@/constants';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Courses />
      <Sponsorships />
      <Testimonials testimonials={TESTIMONIALS_HOME} />
      <Newsletter />
    </div>
  );
}
