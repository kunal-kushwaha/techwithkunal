import {
  Header,
  HeaderCta,
  HeaderDescription,
  HeaderTitle,
} from '@/components/Header';
import { buttonVariants } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const Courses = () => {
  return (
    <div>
      <Header className="bg-gray-50">
        <HeaderTitle>Courses to empower budding developers</HeaderTitle>
        <HeaderDescription>
          — A simple two line subtitle would be enough for this description.
          Anything works as long as it makes some sense.
        </HeaderDescription>
        <HeaderCta>
          <Link
            href="#"
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            Check out courses <ArrowDown />
          </Link>
        </HeaderCta>
      </Header>
    </div>
  );
};

export default Courses;
