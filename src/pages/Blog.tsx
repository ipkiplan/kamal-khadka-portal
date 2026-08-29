import { BlogResources } from '../sections/BlogResources';
import { useSEO } from '../hooks/useSEO';

export function Blog() {
  useSEO({
    title: 'Blog & Resources — Legal Insights | Kamal Khadka',
    description: 'Articles and resources on legal practice, notarial services and professional topics from Kamal Khadka, Advocate and Notary Public in Nepal.',
  });

  return <BlogResources />;
}