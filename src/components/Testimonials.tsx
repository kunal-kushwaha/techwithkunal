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
  title,
  description,
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
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-2 md:mt-3 lg:mt-4 text-gray-500 text-medium text-center w-full md:max-w-[75%] lg:max-w-[70%] mx-auto">
            {description}
          </p>
        )}
        <Carousel
          opts={{
            loop: true,
          }}
          className="relative mt-6 md:mt-8 lg:mt-10"
        >
          <CarouselContent>
            {testimonials.map((testimonial, key) => (
              <CarouselItem
                key={key}
                className="flex flex-col items-center text-center"
              >
                {testimonial.company && (
                  <Image
                    src={testimonial.company}
                    alt={testimonial.author.name}
                    className="max-w-24 md:max-w-30 lg:max-w-32"
                  />
                )}
                <h3 className="mt-6 md:mt-7 lg:mt-8 max-[360px]:text-[18px] leading-tight md:text-[22px] lg:text-[26px] font-medium w-full md:max-w-[75%]">
                  {testimonial.text}
                </h3>
                <div className="flex flex-col items-center mt-8 md:mt-10 lg:mt-16">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="max-w-12 md:max-w-14 rounded-full"
                  />
                  <h4 className="text-base md:text-lg font-medium mt-2 md:mt-3 lg:mt-4 text-gray-500">
                    {testimonial.author.name}
                  </h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[90%] left-[10%] md:left-[30%] lg:left-40" />
          <CarouselNext className="absolute top-[90%] right-[10%] md:right-[30%] lg:right-40" />
        </Carousel>
      </ViewContainer>
    </section>
  );
};

export default Testimonials;
