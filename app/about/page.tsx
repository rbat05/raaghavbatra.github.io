import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
  title: 'About | Raaghav Batra',
  description: 'Get to know Raaghav.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="About Me"
          description="Learn about my journey, interests, and aspirations in the field of chemistry."
        />

        <AboutContent />
      </SectionContainer>
    </div>
  );
}