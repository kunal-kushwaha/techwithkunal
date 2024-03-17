import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { TestimonialsProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Image from 'next/image';

const Testimonials = ({
  testimonials,
  className,
  ...props
}: TestimonialsProps) => {
  return (
    <section
      id="testimonials"
      className={cn(className, 'py-12 md:py-16 lg:py-20')}
      {...props}
    >
      <ViewContainer className="">
        <Carousel
          opts={{
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial, key) => (
              <CarouselItem
                key={key}
                className="flex flex-col items-center text-center gap-5 md:gap-7 lg:gap-8"
              >
                <Image
                  src={testimonial.company}
                  alt={testimonial.author.name}
                  className="max-w-32"
                />
                <h3 className="max-[360px]:text-[22px] text-[24px] leading-tight md:text-[38px] lg:text-[44px] lg:leading-tight font-medium">
                  {testimonial.text}
                </h3>
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="max-w-14"
                  />
                  <h4 className="text-base md:text-lg font-medium mt-2 md:mt-3 lg:mt-4">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-gray-500">
                    {testimonial.author.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[80%] left-[10%] md:left-[30%] lg:left-40" />
          <CarouselNext className="absolute top-[80%] right-[10%] md:right-[30%] lg:right-40" />
        </Carousel>
      </ViewContainer>
    </section>
  );
};

export default Testimonials;
