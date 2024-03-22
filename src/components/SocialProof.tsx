import { cn } from '@/lib/utils';
import { SocialProofProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Image from 'next/image';
import {
  companyAdobe,
  companyCisco,
  companyClicklab,
  companyGoogle,
  companyRazorpay,
  companySamsung,
} from '@/assets';

const SocialProof = ({ className, ...props }: SocialProofProps) => {
  return (
    <section className={cn(className, 'py-12 md:py-16 lg:py-20')} {...props}>
      <ViewContainer>
        <h2 className="text-gray-500 font-medium text-center">
          My students work at
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mt-6 md:mt-7 lg:mt-8">
          <Image
            src={companyGoogle}
            alt="Google"
            className="max-w-24 md:max-w-28 lg:max-w-32"
          />
          <Image
            src={companyRazorpay}
            alt="Razorpay"
            className="max-w-24 md:max-w-28 lg:max-w-32"
          />
          <Image
            src={companyAdobe}
            alt="Adobe"
            className="max-w-24 md:max-w-28 lg:max-w-32"
          />
          <Image
            src={companySamsung}
            alt="Samsung"
            className="max-w-24 md:max-w-28 lg:max-w-32"
          />
          <Image
            src={companyCisco}
            alt="Cisco"
            className="max-w-24 md:max-w-28 lg:max-w-32"
          />
          <Image
            src={companyClicklab}
            alt="Clicklab"
            className="max-w-24 md:max-w-28 lg:max-w-32"
          />
        </div>
      </ViewContainer>
    </section>
  );
};

export default SocialProof;
