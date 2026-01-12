'use client';

export default function StyleGuidePage() {
    const colors = {
        nycTheme: [
            { name: 'Dark Blue', value: '#1a1a2e', usage: 'Header, footer, primary' },
            { name: 'NYC Orange', value: '#F15A22', usage: 'Accent, buttons' },
            { name: 'Header Text', value: '#ffffff', usage: 'White text on black' },
            { name: 'Body Background', value: '#f7f7f7', usage: 'Page background' },
        ],
        primary: [
            { name: 'Primary Blue', value: '#0070f3', usage: 'Links, CTAs' },
            { name: 'Primary Purple', value: '#4F46E5', usage: 'Gradients, accents' },
            { name: 'NYC Orange', value: '#F15A22', usage: 'Gradient endpoints, accents' },
        ],
        neutral: [
            { name: 'Background', value: '#ffffff', usage: 'Page background' },
            { name: 'Foreground', value: '#171717', usage: 'Main text' },
            { name: 'Dark Blue', value: '#1a1a2e', usage: 'Headings, dark text' },
            { name: 'Gray 600', value: '#666666', usage: 'Secondary text' },
            { name: 'Gray 400', value: '#888888', usage: 'Muted text, dates' },
            { name: 'Light Gray', value: '#f8f9fa', usage: 'Section backgrounds' },
            { name: 'Border Gray', value: '#eeeeee', usage: 'Borders, dividers' },
        ],
        gradients: [
            { name: 'Hero Gradient', value: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', usage: 'Hero sections' },
            { name: 'Category Badge', value: 'linear-gradient(135deg, #4F46E5, #F15A22)', usage: 'Category badges' },
            { name: 'Section BG', value: 'linear-gradient(to bottom, #f8f9fa, #ffffff)', usage: 'Section backgrounds' },
        ],
    };

    const typography = {
        fonts: [
            { name: 'Primary', value: 'Arial, Helvetica, sans-serif', usage: 'All text' },
        ],
        sizes: [
            { name: 'Hero Title', size: '3.5rem', weight: '800', usage: 'Main hero headings' },
            { name: 'Section Title', size: '2.5rem', weight: '700', usage: 'Section headings (h2)' },
            { name: 'Card Title', size: '1.25rem', weight: '600', usage: 'Card headings (h3)' },
            { name: 'Subtitle', size: '1.5rem', weight: '400', usage: 'Hero subtitles' },
            { name: 'Body', size: '1rem', weight: '400', usage: 'Body text' },
            { name: 'Small', size: '0.85rem', weight: '400', usage: 'Dates, metadata' },
            { name: 'Caption', size: '0.75rem', weight: '600', usage: 'Category badges' },
        ],
    };

    const spacing = [
        { name: 'Section Padding', value: '5rem 0', usage: 'Vertical section spacing' },
        { name: 'Container Max Width', value: '1200px', usage: 'Content container' },
        { name: 'Card Padding', value: '1.5rem', usage: 'Card content padding' },
        { name: 'Grid Gap', value: '2rem', usage: 'Grid item spacing' },
    ];

    const effects = [
        { name: 'Card Shadow', value: '0 4px 20px rgba(0, 0, 0, 0.08)', usage: 'Default card shadow' },
        { name: 'Card Hover Shadow', value: '0 8px 30px rgba(0, 0, 0, 0.12)', usage: 'Hovered card shadow' },
        { name: 'Border Radius - Card', value: '12px', usage: 'Cards, large elements' },
        { name: 'Border Radius - Button', value: '4px', usage: 'Buttons' },
        { name: 'Border Radius - Badge', value: '20px', usage: 'Category badges' },
        { name: 'Transition', value: '0.3s ease', usage: 'Hover animations' },
    ];

    return (
        <div className="style-guide">
            <section className="style-guide-hero">
                <h1>WeGovNYC Style Guide</h1>
                <p>Design system documentation for the WeGovNYC website</p>
            </section>

            <section className="style-guide-section">
                <h2>Colors</h2>

                <h3>NYC Theme Colors</h3>
                <div className="color-grid">
                    {colors.nycTheme.map((color) => (
                        <div key={color.name} className="color-swatch">
                            <div className="swatch" style={{ backgroundColor: color.value, border: color.value === '#ffffff' ? '1px solid #eee' : 'none' }} />
                            <div className="color-info">
                                <strong>{color.name}</strong>
                                <code>{color.value}</code>
                                <span>{color.usage}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <h3>Primary Colors</h3>
                <div className="color-grid">
                    {colors.primary.map((color) => (
                        <div key={color.name} className="color-swatch">
                            <div className="swatch" style={{ backgroundColor: color.value }} />
                            <div className="color-info">
                                <strong>{color.name}</strong>
                                <code>{color.value}</code>
                                <span>{color.usage}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <h3>Neutral Colors</h3>
                <div className="color-grid">
                    {colors.neutral.map((color) => (
                        <div key={color.name} className="color-swatch">
                            <div className="swatch" style={{ backgroundColor: color.value, border: color.value === '#ffffff' ? '1px solid #eee' : 'none' }} />
                            <div className="color-info">
                                <strong>{color.name}</strong>
                                <code>{color.value}</code>
                                <span>{color.usage}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <h3>Gradients</h3>
                <div className="color-grid">
                    {colors.gradients.map((gradient) => (
                        <div key={gradient.name} className="color-swatch gradient-swatch">
                            <div className="swatch" style={{ background: gradient.value }} />
                            <div className="color-info">
                                <strong>{gradient.name}</strong>
                                <code style={{ fontSize: '0.7rem' }}>{gradient.value}</code>
                                <span>{gradient.usage}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="style-guide-section">
                <h2>Typography</h2>

                <h3>Font Family</h3>
                <div className="font-display">
                    <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '1.5rem' }}>
                        Arial / Helvetica / sans-serif
                    </p>
                    <code>font-family: Arial, Helvetica, sans-serif;</code>
                </div>

                <h3>Type Scale</h3>
                <div className="type-scale">
                    {typography.sizes.map((type) => (
                        <div key={type.name} className="type-sample">
                            <span style={{ fontSize: type.size, fontWeight: type.weight }}>{type.name}</span>
                            <div className="type-info">
                                <code>{type.size} / {type.weight}</code>
                                <span>{type.usage}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="style-guide-section">
                <h2>Buttons</h2>
                <div className="button-examples">
                    <div className="button-example">
                        <button className="btn btn-primary">Primary Button</button>
                        <code>.btn .btn-primary</code>
                    </div>
                    <div className="button-example">
                        <button className="btn btn-secondary">Secondary Button</button>
                        <code>.btn .btn-secondary</code>
                    </div>
                </div>
            </section>

            <section className="style-guide-section">
                <h2>Spacing</h2>
                <div className="spacing-table">
                    {spacing.map((item) => (
                        <div key={item.name} className="spacing-row">
                            <strong>{item.name}</strong>
                            <code>{item.value}</code>
                            <span>{item.usage}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="style-guide-section">
                <h2>Effects</h2>
                <div className="effects-grid">
                    {effects.map((effect) => (
                        <div key={effect.name} className="effect-item">
                            <strong>{effect.name}</strong>
                            <code>{effect.value}</code>
                            <span>{effect.usage}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="style-guide-section">
                <h2>Components</h2>

                <h3>Cards</h3>
                <div className="component-demo">
                    <div className="demo-card">
                        <div className="demo-card-image" />
                        <div className="demo-card-content">
                            <span className="demo-category">Category</span>
                            <h4>Card Title</h4>
                            <p>Card description text goes here with a brief excerpt.</p>
                        </div>
                    </div>
                </div>

                <h3>Badges</h3>
                <div className="badge-examples">
                    <span className="article-category">Category Badge</span>
                    <span className="blog-card-tag">Tag</span>
                </div>
            </section>

            <style jsx>{`
                .style-guide {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                .style-guide-hero {
                    text-align: center;
                    padding: 4rem 2rem;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    color: white;
                    border-radius: 12px;
                    margin-bottom: 3rem;
                }
                .style-guide-hero h1 {
                    margin: 0 0 1rem;
                    font-size: 2.5rem;
                }
                .style-guide-hero p {
                    margin: 0;
                    opacity: 0.9;
                }
                .style-guide-section {
                    margin-bottom: 4rem;
                }
                .style-guide-section h2 {
                    font-size: 2rem;
                    border-bottom: 2px solid #1a1a2e;
                    padding-bottom: 0.5rem;
                    margin-bottom: 2rem;
                }
                .style-guide-section h3 {
                    font-size: 1.25rem;
                    color: #666;
                    margin: 2rem 0 1rem;
                }
                .color-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 1.5rem;
                }
                .color-swatch {
                    background: white;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .swatch {
                    height: 80px;
                }
                .color-info {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }
                .color-info code {
                    font-size: 0.8rem;
                    color: #666;
                }
                .color-info span {
                    font-size: 0.8rem;
                    color: #888;
                }
                .font-display {
                    background: #f8f9fa;
                    padding: 2rem;
                    border-radius: 8px;
                }
                .font-display code {
                    display: block;
                    margin-top: 1rem;
                    color: #666;
                }
                .type-scale {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .type-sample {
                    display: flex;
                    align-items: baseline;
                    gap: 2rem;
                    padding: 1rem 0;
                    border-bottom: 1px solid #eee;
                }
                .type-info {
                    display: flex;
                    gap: 1rem;
                }
                .type-info code {
                    color: #666;
                }
                .type-info span {
                    color: #888;
                }
                .button-examples {
                    display: flex;
                    gap: 2rem;
                    flex-wrap: wrap;
                }
                .button-example {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    align-items: flex-start;
                }
                .button-example code {
                    font-size: 0.8rem;
                    color: #666;
                }
                .spacing-table, .effects-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .spacing-row, .effect-item {
                    display: grid;
                    grid-template-columns: 200px 1fr 1fr;
                    gap: 1rem;
                    padding: 0.75rem;
                    background: #f8f9fa;
                    border-radius: 4px;
                }
                .spacing-row code, .effect-item code {
                    color: #666;
                    font-size: 0.85rem;
                }
                .spacing-row span, .effect-item span {
                    color: #888;
                    font-size: 0.85rem;
                }
                .demo-card {
                    width: 300px;
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }
                .demo-card-image {
                    height: 150px;
                    background: linear-gradient(135deg, #4F46E5, #F15A22);
                }
                .demo-card-content {
                    padding: 1.5rem;
                }
                .demo-category {
                    display: inline-block;
                    background: linear-gradient(135deg, #4F46E5, #F15A22);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }
                .demo-card-content h4 {
                    margin: 0.5rem 0;
                }
                .demo-card-content p {
                    color: #666;
                    font-size: 0.9rem;
                    margin: 0;
                }
                .badge-examples {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
            `}</style>
        </div>
    );
}
