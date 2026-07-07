import './unnyc.css';
import UnnycFooter from '@/components/unnyc/UnnycFooter';

export const metadata = {
    title: 'UNNYC — Where the United Nations Meets New York City',
    description: 'An information hub connecting United Nations staff in NYC with New York City and New York State government professionals. Events, policy intersections, resources, and more.',
    openGraph: {
        title: 'UNNYC — Where the United Nations Meets New York City',
        description: 'Bridging the UN community and NYC/NYS government workers through shared resources, events, and policy collaboration.',
        type: 'website',
    },
};

/**
 * UNNYC layout — wraps all /unnyc pages with UNNYC-scoped styles
 * and the UNNYC-specific footer. Inherits the main WeGov header
 * from the root layout.
 */
export default function UnnycLayout({ children }) {
    return (
        <div className="unnyc-page">
            {children}
            <UnnycFooter />
        </div>
    );
}
