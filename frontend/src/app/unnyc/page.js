import UnnycHero from '@/components/unnyc/UnnycHero';
import UnnycAbout from '@/components/unnyc/UnnycAbout';
import UnnycEvents from '@/components/unnyc/UnnycEvents';
import UnnycPolicy from '@/components/unnyc/UnnycPolicy';
import UnnycResources from '@/components/unnyc/UnnycResources';
import UnnycDirectory from '@/components/unnyc/UnnycDirectory';
import UnnycMap from '@/components/unnyc/UnnycMap';
import UnnycNews from '@/components/unnyc/UnnycNews';
import ScrollReveal from '@/components/unnyc/ScrollReveal';

/**
 * Main UNNYC hub page at /unnyc.
 * Composes all UNNYC sections in order with scroll reveal animations.
 */
export default function UnnycPage() {
    return (
        <>
            <UnnycHero />
            <ScrollReveal>
                <UnnycAbout />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycEvents />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycPolicy />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycResources />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycDirectory />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycMap />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycNews />
            </ScrollReveal>
        </>
    );
}
