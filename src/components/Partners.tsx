import { PartnerData } from '@/types';
import {
  bootdevAuthor,
  bootdevLogo,
  kodecloudAuthor,
  kodecloudLogo,
  kubesphereAuthor,
  kubesphereLogo,
  teleportAuthor,
  teleportLogo,
  wilcoAuthor,
  wilcoLogo,
  komodorAuthor,
  komodorLogo,
  kubesphereAuthor2,
  riseinAuthor,
  riseinLogo,
  slashdataAuthor,
  slashdataLogo,
  streamAuthor,
  streamLogo,
} from '@/assets/testimonials';
import { ViewContainer } from './ui/view-container';
import {
  PartnerCard,
  PartnerCardAuthorImage,
  PartnerCardAuthorName,
  PartnerCardLogo,
  PartnerCardQuote,
} from './PartnerCard';

const partnersData: PartnerData[] = [
  {
    image: bootdevAuthor,
    logo: bootdevLogo,
    author: 'Lane',
    name: 'Boot Dev',
    quote:
      "Fantastic, looking forward to more. I think you're doing great, I'd love to continue swinging by the channel whenever you feel it's appropriate. Boot.dev has a YouTube channel now, so I'd love to have you on there as well.",
  },
  {
    image: kodecloudAuthor,
    logo: kodecloudLogo,
    author: 'Prabhjyot Kaur',
    name: 'Kode Kloud',
    quote:
      'Excellent! So there was a sudden spike in audience from YT redirected to our site after the collaboration and that was really good to see.',
  },
  {
    image: teleportAuthor,
    logo: teleportLogo,
    author: 'Kateryna Ivashchenko',
    name: 'Teleport',
    quote:
      'Partnering with Kunal and his community was one of the highlights for the Teleport team this year. The quality of content is top-notch, the community engagement is very high, and the ROI is there to prove it. It brought in 10K+ new web sessions and 100+ downloads with majority being new users.',
  },
  {
    image: wilcoAuthor,
    logo: wilcoLogo,
    author: 'Alexandra Macias',
    name: 'Wilco',
    quote:
      'It was extremely successful. We got around 1700 signups through our campaigns. Thank you for everything, Kunal. You have a wonderful community.',
  },
  {
    image: kubesphereAuthor,
    logo: kubesphereLogo,
    author: 'Yun Li',
    name: 'Kubesphere',
    quote:
      "It's been a great feeling to collaborate with Kunal and his community, and he has made the entire process a pleasure. Kunal has made great contributions to letting more people know the benefits of our services and increase our user base. We got over 11K stars and 5K signups.",
  },
  {
    image: kubesphereAuthor2,
    logo: kubesphereLogo,
    author: 'Calvin Yu',
    name: 'Kubesphere',
    quote:
      'Very efficient, smooth communication and focused work. 15+ twitter followers and 30 + starts in two days!',
  },
  {
    image: komodorAuthor,
    logo: komodorLogo,
    author: 'Udi Hofesh',
    name: 'Komodor',
    quote:
      'AMAZING!!! After every activity with Kunal my community grows by 100s and the same goes for GH stars!',
  },
  {
    image: riseinAuthor,
    logo: riseinLogo,
    author: 'Ankit Raj',
    name: 'Rise in',
    quote:
      'He delivered more than he promised. I am absolutely happy and would keep working with him on a regular basis. It brought in 2000+ signups for our web3 bootcamp!',
  },
  {
    image: streamAuthor,
    logo: streamLogo,
    author: 'Kimmy Leslie',
    name: 'Stream',
    quote:
      "We've worked on various collaborations with Kunal's community, all of which have been an extraordinary and profitable experience. Kunal's interest to detail, clear expectations, and innovative work paired with his reach is a fantastic equation. The partnership brought in 100+ chat trials in Q4!",
  },
  {
    image: slashdataAuthor,
    logo: slashdataLogo,
    author: 'Nurpari Damirova',
    name: 'Slash Data',
    quote:
      'The collab was smooth and very fruitful! We got 283 qualified responses for our survey!',
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-28 scroll-m-[100px] bg-accent z-0">
      <ViewContainer>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            <PartnerCard className="relative md:col-span-2">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[1].logo}
                title={partnersData[1].name}
              />
              <PartnerCardQuote>{partnersData[1].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[1].image}
                  title={partnersData[1].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[1].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
            <PartnerCard className="relative md:col-span-3">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[4].logo}
                title={partnersData[4].name}
              />
              <PartnerCardQuote>{partnersData[4].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[4].image}
                  title={partnersData[4].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[4].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
            <PartnerCard className="relative md:col-span-2">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[3].logo}
                title={partnersData[3].name}
              />
              <PartnerCardQuote>{partnersData[3].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-5">
                <PartnerCardAuthorImage
                  img={partnersData[3].image}
                  title={partnersData[3].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[3].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PartnerCard className="relative ">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[2].logo}
                title={partnersData[2].name}
              />
              <PartnerCardQuote>{partnersData[2].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[2].image}
                  title={partnersData[2].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[2].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
            <PartnerCard className="relative ">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[0].logo}
                title={partnersData[0].name}
              />
              <PartnerCardQuote>{partnersData[0].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[0].image}
                  title={partnersData[0].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[0].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            <PartnerCard className="relative md:col-span-2">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[5].logo}
                title={partnersData[5].name}
              />
              <PartnerCardQuote>{partnersData[5].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[5].image}
                  title={partnersData[5].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[5].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
            <PartnerCard className="relative md:col-span-3">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[6].logo}
                title={partnersData[6].name}
              />
              <PartnerCardQuote>{partnersData[6].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[6].image}
                  title={partnersData[6].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[6].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
            <PartnerCard className="relative md:col-span-2">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[9].logo}
                title={partnersData[9].name}
              />
              <PartnerCardQuote>{partnersData[9].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-5">
                <PartnerCardAuthorImage
                  img={partnersData[9].image}
                  title={partnersData[9].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[9].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PartnerCard className="relative ">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[8].logo}
                title={partnersData[8].name}
              />
              <PartnerCardQuote>{partnersData[8].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[8].image}
                  title={partnersData[8].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[8].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
            <PartnerCard className="relative ">
              <PartnerCardLogo
                className="mb-6"
                img={partnersData[7].logo}
                title={partnersData[7].name}
              />
              <PartnerCardQuote>{partnersData[7].quote}</PartnerCardQuote>
              <div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
                <PartnerCardAuthorImage
                  img={partnersData[7].image}
                  title={partnersData[7].author}
                  className="w-10"
                />
                <PartnerCardAuthorName>
                  {partnersData[7].author}{' '}
                </PartnerCardAuthorName>
              </div>
            </PartnerCard>
          </div>
        </div>
      </ViewContainer>
    </section>
  );
};

export default Partners;
