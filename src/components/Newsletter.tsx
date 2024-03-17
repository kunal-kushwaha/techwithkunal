'use client';

import { cn } from '@/lib/utils';
import { NewsletterProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email!',
  }),
});

const Newsletter = ({ className, ...props }: NewsletterProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value);
    const authToken = process.env.HASHNODE_AUTH_TOKEN!;

    try {
      const response = await fetch('https://gql.hashnode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify({
          query: `
            mutation {
              subscribeToNewsletter(input: {
                publicationId: "635191d16e41e3b5f5561c1e"
                email: "${value.email}"
              }) {
              status
              }
            }
          `,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="newsletter"
      className={cn(
        className,
        'py-10 md:py-16 lg:py-20 before:w-full before:h-1/2 relative z-0 before:-z-10 before:absolute before:bottom-0 before:left-0 before:bg-gray-800'
      )}
      {...props}
    >
      <ViewContainer className="flex justify-between p-10 md:p-12 lg:p-16 bg-gray-50 rounded-lg flex-wrap gap-8 md:gap-12 lg:gap-16">
        <div className="grow">
          <h2 className="text-2xl md:text-[28px] font-semibold">
            Join the newsletter
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3">
            Sign up for the very best tutorials and the latest news.
          </p>
        </div>
        <Form {...form}>
          <form className="grow" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-2 flex-col md:flex-row items-start">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Your privacy is important. I never share your email.
            </p>
          </form>
        </Form>
      </ViewContainer>
    </section>
  );
};

export default Newsletter;
