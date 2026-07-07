/**
 * UNNYC — Static data layer for the information hub.
 * All real content sourced from un.org, nyc.gov, ny.gov, and official agency directories.
 * Kept in a separate file to make content updates easy without touching logic or styles.
 */

export const events = [
    {
        id: 1,
        category: 'un',
        date: 'March 9–19, 2026',
        title: 'Commission on the Status of Women (CSW70)',
        location: 'UN Headquarters, New York',
        description: 'The 70th session focuses on gender equality and women\'s empowerment, bringing together government representatives, UN entities, and civil society.',
        link: 'https://www.unwomen.org/en/csw'
    },
    {
        id: 2,
        category: 'un',
        date: 'March 9–13, 2026',
        title: '69th Session — Commission on Narcotic Drugs',
        location: 'UN Headquarters, New York',
        description: 'Annual policy-making session on global drug control, demand reduction, and illicit crop monitoring.',
        link: 'https://www.unodc.org/unodc/en/commissions/CND/'
    },
    {
        id: 3,
        category: 'joint',
        date: 'March 30, 2026',
        title: 'ECOSOC Special Meeting on Credit Ratings',
        location: 'UN Headquarters, New York',
        description: 'ECOSOC convenes to examine how credit rating methodologies affect sustainable development financing.',
        link: 'https://www.un.org/ecosoc/'
    },
    {
        id: 4,
        category: 'un',
        date: 'May 5–8, 2026',
        title: 'International Migration Review Forum',
        location: 'New York City',
        description: 'The primary intergovernmental platform for states to discuss progress on the Global Compact for Safe, Orderly and Regular Migration.',
        link: 'https://migrationnetwork.un.org/international-migration-review-forum-2026'
    },
    {
        id: 5,
        category: 'un',
        date: 'June 17–19, 2026',
        title: 'Humanitarian Affairs Segment',
        location: 'UN Headquarters, New York',
        description: 'ECOSOC Humanitarian Affairs Segment brings together stakeholders to strengthen coordination of humanitarian responses worldwide.',
        link: 'https://www.un.org/ecosoc/'
    },
    {
        id: 6,
        category: 'un',
        date: 'September 9, 2026',
        title: 'UN General Assembly — 81st Session Opens',
        location: 'UN Headquarters, New York',
        description: 'The annual opening of the General Assembly, followed by the High-Level General Debate starting September 22, drawing world leaders to NYC.',
        link: 'https://www.un.org/en/ga/'
    },
    {
        id: 7,
        category: 'joint',
        date: 'Ongoing — 2026',
        title: 'NYC Junior Ambassadors Program',
        location: 'Across NYC & UN Headquarters',
        description: 'The Mayor\'s Office for International Affairs empowers 7th–9th graders to engage with the UN\'s mission. Over 3,500 youth and educators have participated since 2015.',
        link: 'https://www.nyc.gov/site/international/programs/junior-ambassadors.page'
    },
    {
        id: 8,
        category: 'nyc',
        date: '2025–2026',
        title: 'NYC Voluntary Local Review (VLR)',
        location: 'NYC Mayor\'s Office for International Affairs',
        description: 'New York City submits its latest VLR to the UN, reporting local progress on the Sustainable Development Goals. NYC pioneered this process in 2018.',
        link: 'https://www.nyc.gov/site/international/programs/global-vision-urban-action.page'
    },
    {
        id: 9,
        category: 'nyc',
        date: 'Q2 2025 — 2029',
        title: 'UN Plaza $500M Renovation',
        location: 'One & Two UN Plaza, East 44th Street',
        description: 'A major redevelopment backed by the NYC Mayor, Governor Hochul, and UNDC. Includes BuildSmart 2025 energy efficiency upgrades and will create 1,800 construction jobs.',
        link: 'https://www.nyc.gov'
    }
];

export const policies = [
    {
        icon: '🌡️',
        title: 'Climate Action',
        un: 'Paris Agreement & SDG 13 (Climate Action) — UN Framework Convention targets',
        nyc: 'Local Law 97 — Carbon caps for large buildings. PlaNYC 2023: carbon neutrality by 2050, 100% clean electricity by 2040'
    },
    {
        icon: '🏠',
        title: 'Housing & Development',
        un: 'SDG 11 (Sustainable Cities) & UN-Habitat New Urban Agenda',
        nyc: 'OneNYC 2050: 200,000 affordable housing units. HPD decarbonization of affordable housing, Enterprise Green Communities standards'
    },
    {
        icon: '🚶',
        title: 'Migration & Integration',
        un: 'Global Compact for Safe, Orderly and Regular Migration — 2026 IMRF in NYC',
        nyc: 'Mayor\'s Office of Immigrant Affairs (MOIA) — NYC largest immigrant population in the U.S. (3.1M foreign-born residents)'
    },
    {
        icon: '⚖️',
        title: 'Gender Equality',
        un: 'SDG 5 (Gender Equality), UN Women, CSW70 (March 2026)',
        nyc: 'NYC Commission on Gender Equity — First U.S. city to join UN Safe Cities Global Initiative for women and girls'
    },
    {
        icon: '🌿',
        title: 'Sustainable Development Goals',
        un: '2030 Agenda — 17 SDGs adopted by 193 Member States',
        nyc: 'NYC Voluntary Local Review — first U.S. city to report to the UN on SDG progress. Invest NYC SDG initiative by NYU'
    },
    {
        icon: '🤖',
        title: 'AI & Governance',
        un: 'UN Secretary-General\'s Roadmap for Digital Cooperation and AI Advisory Body',
        nyc: 'NYC Mayor\'s Office co-hosts "AI x Governance" with UN Foundation — public and private sector convergence on AI'
    },
    {
        icon: '🌳',
        title: 'Urban Environment',
        un: 'SDG 15 (Life on Land) & UN Decade on Ecosystem Restoration',
        nyc: 'PlaNYC: 30% tree canopy cover target. NYC Parks urban forestry. Flood resilience strategies for coastal zones'
    },
    {
        icon: '💼',
        title: 'Green Economy & Jobs',
        un: 'SDG 8 (Decent Work) & ILO Just Transition framework',
        nyc: 'NYC Green Economy Action Plan (Feb 2024) — 400,000 green jobs projected by 2040'
    }
];

export const resources = [
    {
        icon: '🚇',
        title: 'Getting Around NYC',
        description: 'Transit information for commuting to UN HQ, City Hall, and state offices across Manhattan.',
        links: [
            { text: 'MTA Subway & Bus', url: 'https://new.mta.info/' },
            { text: 'NYC Ferry', url: 'https://www.nycferry.com/' },
            { text: 'Citi Bike', url: 'https://citibikenyc.com/' },
            { text: 'NYC DOT', url: 'https://www.nyc.gov/html/dot/html/home/home.shtml' }
        ]
    },
    {
        icon: '🏢',
        title: 'Housing Resources',
        description: 'NYC housing programs, tenant protections, and neighborhood guides for new residents.',
        links: [
            { text: 'NYC Housing Connect', url: 'https://housingconnect.nyc.gov/' },
            { text: 'HPD Tenant Resources', url: 'https://www.nyc.gov/site/hpd/renters/tenants.page' },
            { text: 'DHCR Rent Stabilization', url: 'https://hcr.ny.gov/rent-stabilization' }
        ]
    },
    {
        icon: '📞',
        title: 'NYC 311 — City Services',
        description: 'The gateway to NYC government services. Report issues, find information, and connect with agencies.',
        links: [
            { text: 'NYC 311 Online', url: 'https://portal.311.nyc.gov/' },
            { text: 'Dial 311 (in NYC) or 212-NEW-YORK', url: 'tel:+12126399675' }
        ]
    },
    {
        icon: '🎓',
        title: 'UNITAR Courses',
        description: 'Learning programs from the UN Institute for Training and Research based in New York.',
        links: [
            { text: 'UNITAR New York Office', url: 'https://unitar.org/ny' },
            { text: 'Online Courses', url: 'https://www.unitar.org/learning-solutions' }
        ]
    },
    {
        icon: '🏥',
        title: 'Health & Safety',
        description: 'NYC health services, COVID-19 info, and emergency resources.',
        links: [
            { text: 'NYC Health + Hospitals', url: 'https://www.nychealthandhospitals.org/' },
            { text: 'NYC DOHMH', url: 'https://www.nyc.gov/site/doh/index.page' },
            { text: 'NYC Emergency Management', url: 'https://www.nyc.gov/site/em/index.page' }
        ]
    },
    {
        icon: '📚',
        title: 'Libraries & Research',
        description: 'World-class research institutions and public library systems.',
        links: [
            { text: 'Dag Hammarskjöld Library (UN)', url: 'https://www.un.org/en/library' },
            { text: 'New York Public Library', url: 'https://www.nypl.org/' },
            { text: 'NYC Green Book Directory', url: 'https://a856-cityrecord.nyc.gov/GreenBook' }
        ]
    }
];

export const directory = {
    un: {
        label: 'United Nations',
        items: [
            { name: 'UN Headquarters / Secretariat', address: '405 East 42nd Street, NYC 10017', link: 'https://www.un.org' },
            { name: 'UNDP (Development Programme)', address: 'One United Nations Plaza, NYC 10017', link: 'https://www.undp.org' },
            { name: 'UNICEF (Children\'s Fund)', address: '3 United Nations Plaza, NYC 10017', link: 'https://www.unicef.org' },
            { name: 'UN Women', address: '220 East 42nd Street, NYC 10017', link: 'https://www.unwomen.org' },
            { name: 'UNFPA (Population Fund)', address: '605 Third Avenue, NYC 10158', link: 'https://www.unfpa.org' },
            { name: 'UN DESA (Economic & Social Affairs)', address: '405 East 42nd Street, NYC 10017', link: 'https://www.un.org/development/desa/' },
            { name: 'FAO Liaison Office', address: 'One UN Plaza, DC1 Room 1125', link: 'https://www.fao.org/north-america/en/' },
            { name: 'UNITAR New York Office', address: 'One UN Plaza, NYC 10017', link: 'https://unitar.org/ny' }
        ]
    },
    nyc: {
        label: 'NYC Government',
        items: [
            { name: 'Office for International Affairs', address: 'City Hall, NYC 10007', link: 'https://www.nyc.gov/international' },
            { name: 'NYC City Hall', address: 'City Hall Park, NYC 10007', link: 'https://www.nyc.gov' },
            { name: 'Dept. of City Planning', address: '120 Broadway, 31st Floor, NYC 10271', link: 'https://www.nyc.gov/planning' },
            { name: 'Housing Preservation & Development', address: '100 Gold Street, NYC 10038', link: 'https://www.nyc.gov/hpd' },
            { name: 'Dept. of Buildings', address: '280 Broadway, 3rd Floor, NYC 10007', link: 'https://www.nyc.gov/buildings' },
            { name: 'Dept. of Small Business Services', address: '110 William Street, 7th Floor, NYC 10038', link: 'https://www.nyc.gov/sbs' },
            { name: 'Mayor\'s Office of Climate & Environmental Justice', address: 'City Hall, NYC 10007', link: 'https://www.nyc.gov/climate' },
            { name: 'NYC Economic Development Corp.', address: 'One Liberty Plaza, NYC 10006', link: 'https://edc.nyc' }
        ]
    },
    nys: {
        label: 'NYS in NYC',
        items: [
            { name: 'Governor\'s NYC Office', address: '633 Third Avenue, 38th Floor, NYC 10017', link: 'https://www.governor.ny.gov' },
            { name: 'Empire State Development', address: '633 Third Avenue, NYC 10017', link: 'https://esd.ny.gov' },
            { name: 'Dept. of Labor — NYC', address: '9 Bond Street, Brooklyn, NYC', link: 'https://dol.ny.gov' },
            { name: 'Homes & Community Renewal (HCR)', address: '25 Beaver Street, NYC 10004', link: 'https://hcr.ny.gov' },
            { name: 'Dept. of Financial Services', address: 'One State Street, NYC 10004', link: 'https://www.dfs.ny.gov' },
            { name: 'Office of the Attorney General — NYC', address: '28 Liberty Street, NYC 10005', link: 'https://ag.ny.gov' },
            { name: 'Comptroller\'s NYC Office', address: '59 Maiden Lane, NYC 10038', link: 'https://www.osc.ny.gov' },
            { name: 'NYSERDA NYC Office', address: 'See nyserda.ny.gov for locations', link: 'https://www.nyserda.ny.gov' }
        ]
    }
};

export const mapMarkers = [
    // UN
    { lat: 40.7489, lng: -73.9680, label: 'UN Headquarters', type: 'un', desc: '405 East 42nd Street' },
    { lat: 40.7493, lng: -73.9688, label: 'UNDP', type: 'un', desc: 'One United Nations Plaza' },
    { lat: 40.7497, lng: -73.9695, label: 'UNICEF House', type: 'un', desc: '3 United Nations Plaza' },
    { lat: 40.7495, lng: -73.9731, label: 'UN Women', type: 'un', desc: '220 East 42nd Street' },
    { lat: 40.7502, lng: -73.9718, label: 'UNFPA', type: 'un', desc: '605 Third Avenue' },
    // NYC
    { lat: 40.7128, lng: -74.0060, label: 'NYC City Hall', type: 'nyc', desc: 'City Hall Park' },
    { lat: 40.7087, lng: -74.0128, label: 'NYC Planning', type: 'nyc', desc: '120 Broadway' },
    { lat: 40.7102, lng: -74.0052, label: 'NYC HPD', type: 'nyc', desc: '100 Gold Street' },
    { lat: 40.7143, lng: -74.0072, label: 'NYC Buildings', type: 'nyc', desc: '280 Broadway' },
    { lat: 40.7090, lng: -74.0095, label: 'NYC EDC', type: 'nyc', desc: 'One Liberty Plaza' },
    // NYS
    { lat: 40.7506, lng: -73.9745, label: 'Governor\'s NYC Office', type: 'nys', desc: '633 Third Avenue, 38th Fl' },
    { lat: 40.7508, lng: -73.9747, label: 'Empire State Development', type: 'nys', desc: '633 Third Avenue' },
    { lat: 40.7036, lng: -74.0136, label: 'NYS HCR', type: 'nys', desc: '25 Beaver Street' },
    { lat: 40.7014, lng: -74.0142, label: 'NYS Financial Services', type: 'nys', desc: 'One State Street' },
    { lat: 40.7087, lng: -74.0090, label: 'NYS Attorney General', type: 'nys', desc: '28 Liberty Street' }
];

export const news = [
    {
        source: 'NYC Mayor\'s Office',
        title: '$500 Million UN Plaza Redevelopment Announced',
        excerpt: 'Mayor, Governor Hochul, and UNDC announce a transformative renovation of One and Two UN Plaza, including BuildSmart 2025 energy upgrades and 1,800 construction jobs.',
        date: 'Q1 2025',
        link: 'https://www.nyc.gov'
    },
    {
        source: 'United Nations',
        title: 'International Migration Review Forum Comes to NYC',
        excerpt: 'The 2026 IMRF convenes in New York City (May 5–8) to assess progress on the Global Compact for Migration — a topic with direct local relevance.',
        date: 'Upcoming — May 2026',
        link: 'https://migrationnetwork.un.org/'
    },
    {
        source: 'NYC International Affairs',
        title: '2025 NYC Junior Ambassadors Cohort Selected',
        excerpt: 'Seventh through ninth graders from all five boroughs will engage with the UN mission, continuing a program that has reached over 3,500 youth since 2015.',
        date: 'March 2025',
        link: 'https://www.nyc.gov/site/international/programs/junior-ambassadors.page'
    },
    {
        source: 'NYC Climate',
        title: 'Green Economy Action Plan Targets 400,000 Jobs by 2040',
        excerpt: 'NYC launches an ambitious plan to build a green workforce, aligning with both Local Law 97 building targets and UN SDG 8 (Decent Work and Economic Growth).',
        date: 'February 2024',
        link: 'https://www.nyc.gov/climate'
    },
    {
        source: 'NYS Governor',
        title: 'BuildSmart 2025: Energy Efficiency Standards for State Buildings',
        excerpt: 'Governor Hochul\'s BuildSmart program sets new energy efficiency requirements, directly supporting the UN Plaza renovation and broader climate goals.',
        date: '2025',
        link: 'https://www.governor.ny.gov'
    },
    {
        source: 'United Nations',
        title: 'CSW70: Gender Equality on the Agenda at UN Headquarters',
        excerpt: 'The 70th session of the Commission on the Status of Women (March 9–19, 2026) will gather advocates, policymakers, and NGOs in New York City.',
        date: 'Upcoming — March 2026',
        link: 'https://www.unwomen.org/en/csw'
    }
];

export const mapLegend = [
    { type: 'un', label: 'UN System', color: '#4B92DB' },
    { type: 'nyc', label: 'NYC Government', color: '#D4A843' },
    { type: 'nys', label: 'NYS Offices in NYC', color: '#2A3D63' }
];
