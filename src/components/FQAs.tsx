import { cn } from '@/lib/utils';
import { FAQsProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FQAs = ({
  className,
  title,
  description,
  items,
  ...props
}: FAQsProps) => {
  return (
    <section
      id="faq"
      className={cn(className, 'bg-gray-50 py-12 md:py-16 lg:py-20')}
      {...props}
    >
      <ViewContainer className="">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-4 lg:mt-5 text-center">
          {description}
        </p>
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-10 md:mt-12 lg:mt-16 w-full md:max-w-[70%] lg:max-w-[60%]"
        >
          {items.map((item, key) => (
            <AccordionItem key={key} value={`item=${key}`}>
              <AccordionTrigger className="text-base md:text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ViewContainer>
    </section>
  );
};

export default FQAs;
