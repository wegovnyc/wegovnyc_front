import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import LogoCloud from './LogoCloud';
import CallToAction from './CallToAction';
import ProjectNetwork from './ProjectNetwork';
import NewsFeed from './NewsFeed';
import RichText from './RichText';

const sectionComponents = {
    'sections.hero': Hero,
    'sections.feature-grid': FeatureGrid,
    'sections.logo-cloud': LogoCloud,
    'sections.cta': CallToAction,
    'sections.project-network': ProjectNetwork,
    'sections.news-feed': NewsFeed,
    'sections.rich-text': RichText,
};

export default function SectionRenderer({ sections }) {
    if (!sections) return null;

    return (
        <>
            {sections.map((section, index) => {
                const Component = sectionComponents[section.__component];
                if (!Component) {
                    console.warn(`No component found for ${section.__component}`);
                    return null;
                }
                return <Component key={`${section.__component}-${index}`} data={section} />;
            })}
        </>
    );
}
