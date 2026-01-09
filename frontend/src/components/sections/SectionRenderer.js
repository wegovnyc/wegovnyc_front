import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import LogoCloud from './LogoCloud';
import CallToAction from './CallToAction';
import ProjectNetwork from './ProjectNetwork';
import NewsFeed from './NewsFeed';
import RichText from './RichText';
import Embed from './Embed';

const sectionComponents = {
    'sections.hero': Hero,
    'sections.feature-grid': FeatureGrid,
    'sections.logo-cloud': LogoCloud,
    'sections.cta': CallToAction,
    'sections.project-network': ProjectNetwork,
    'sections.news-feed': NewsFeed,
    'sections.rich-text': RichText,
    'sections.embed': Embed,
};

export default function SectionRenderer({ sections }) {
    if (!sections || sections.length === 0) {
        return <div className="container" style={{ padding: '4rem 0', textAlign: 'center', color: '#666' }}>No content sections found on this page.</div>;
    }

    const renderedSections = [];
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const nextSection = sections[i + 1];

        // Check for consecutive FeatureGrid (Databook) and LogoCloud (As Seen In)
        if (section.__component === 'sections.feature-grid' && nextSection?.__component === 'sections.logo-cloud') {
            const FeatureGrid = sectionComponents['sections.feature-grid'];
            const LogoCloud = sectionComponents['sections.logo-cloud'];

            renderedSections.push(
                <div key={`merged-${i}`} className="merged-section-wrapper">
                    <FeatureGrid data={section} />
                    <LogoCloud data={nextSection} />
                </div>
            );
            i++; // Skip the next section as it's now merged
        } else {
            const Component = sectionComponents[section.__component];
            if (Component) {
                renderedSections.push(<Component key={`${section.__component}-${i}`} data={section} />);
            } else {
                console.warn(`No component found for ${section.__component}`);
            }
        }
    }

    return <>{renderedSections}</>;
}
