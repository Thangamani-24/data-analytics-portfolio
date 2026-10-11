/**
 * Central portfolio data for Thangamani K, grounded in the supplied CV.
 * Keep this file as the single source of truth for the portfolio's content.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Thangamani K',
  displayName: 'Thangamani K',
  firstName: 'THANGAMANI',
  seriesTag: 'THE DATA SERIES',
  originalLabel: 'A THANGAMANI ORIGINAL',
  role: 'Data Analyst',
  tagline: ['DATA ANALYTICS', 'SQL · PYTHON · BI', 'E-COMMERCE & MARKETING'],
  intro:
    'Early-career Data Analyst and 2026 B.Tech Information Technology graduate with project-based experience in e-commerce analytics, conversion funnel analysis, A/B testing and digital marketing performance. I use SQL, Python, BigQuery and Power BI to evaluate trends, identify conversion drop-offs and turn findings into actionable CRO recommendations. Open to relocate to Dubai, UAE.',
  location: 'Karaikal, Puducherry, India',
  email: 'thangamanikumaran24@gmail.com',
  phone: '+91-7094156305',
  links: {
    linkedin: 'https://linkedin.com/in/thangamani-k-7a38273a3',
    github: 'https://github.com/Thangamani-24',
    portfolio: 'https://data-analytics-portfolio-nine.vercel.app/',
  },
  resumePdf: '/assets/Thangamani_K_CV.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Abstract data analytics dashboard artwork in the Thangamani K portfolio theme',
  },
  interests: ['Business Intelligence', 'Experimentation & CRO', 'E-commerce Analytics', 'Marketing Performance'],
};

export const education = [
  {
    school: 'Puducherry Technological University',
    place: 'Puducherry, India',
    degree: 'B.Tech — Information Technology',
    period: '2022 – 2026',
    score: 'CGPA 7.98/10',
  },
];

export const experience = [
  {
    company: 'NSIC',
    role: 'AI & Machine Learning Intern',
    place: 'Chennai',
    period: '3 weeks',
    points: [
      'Applied Python-based AI/ML fundamentals and automation techniques to analytical problem-solving and basic model-building workflows.',
    ],
  },
  {
    company: 'National Mental Health Program | GH',
    role: 'Frontend Development Intern',
    place: 'Puducherry',
    period: '3 weeks',
    points: [
      'Contributed to a healthcare learning-disability detection system using React, responsive UI development and secure healthcare-data handling.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the CV doesn't provide a project-specific public repository URL. */
  github?: string;
  palette: Palette;
  motif: 'funnel' | 'experiment' | 'campaign' | 'dashboard';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'ecommerce-funnel',
    title: 'E-Commerce Conversion Funnel Analysis',
    year: 'CASE STUDY',
    genre: 'SQL • BIGQUERY • GA4 • PYTHON',
    logline: 'A customer-journey analysis of product views, add-to-cart, checkout and purchase events to find conversion friction.',
    stack: ['SQL', 'BigQuery', 'GA4 Event Data', 'Python'],
    build: [
      'Queried GA4 event data for product views, add-to-cart, checkout and purchase; compared funnel drop-offs by device and acquisition source to pinpoint conversion friction.',
      'Translated segment-level findings into prioritized, testable CRO hypotheses and checkout-optimization recommendations.',
    ],
    features: [
      'Four-stage customer journey: product view → add-to-cart → checkout → purchase',
      'Segment comparisons by device and acquisition source',
      'Conversion drop-off analysis across funnel steps',
      'Prioritized, testable CRO hypotheses',
      'Checkout-optimization recommendations',
    ],
    metrics: [
      { value: '04', label: 'Customer journey stages' },
      { value: 'GA4', label: 'Event data source' },
      { value: 'Device', label: 'Segmentation dimension' },
      { value: 'Source', label: 'Acquisition comparison' },
      { value: 'CRO', label: 'Testable recommendations' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'funnel',
  },
  {
    id: 'ab-testing',
    title: 'A/B Testing & Statistical Analysis',
    year: 'CASE STUDY',
    genre: 'PYTHON • PANDAS • SCIPY',
    logline: 'An evidence-led comparison of control and treatment conversion rates, with uncertainty and bias considerations documented.',
    stack: ['Python', 'Pandas', 'SciPy', 'Hypothesis Testing'],
    build: [
      'Compared control and treatment conversion rates using hypothesis testing, p-values and confidence intervals.',
      'Documented sample-size considerations, significance thresholds and bias risks; converted results into evidence-based product and marketing recommendations.',
    ],
    features: [
      'Control-versus-treatment conversion comparison',
      'Hypothesis testing and p-value interpretation',
      'Confidence intervals to describe uncertainty',
      'Sample-size and significance-threshold considerations',
      'Bias-risk documentation for decision-making',
    ],
    metrics: [
      { value: 'A/B', label: 'Control vs treatment' },
      { value: 'p-value', label: 'Significance evaluation' },
      { value: 'CI', label: 'Confidence intervals' },
      { value: 'N', label: 'Sample-size considerations' },
      { value: 'Bias', label: 'Risk assessment' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'experiment',
  },
  {
    id: 'marketing-campaigns',
    title: 'Marketing Campaign Performance Analysis',
    year: 'CASE STUDY',
    genre: 'PYTHON • PANDAS • MATPLOTLIB',
    logline: 'A channel-efficiency analysis connecting campaign impressions, clicks, spend and revenue to core marketing KPIs.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Marketing KPIs'],
    build: [
      'Calculated CTR, CPC, conversion rate, CPA and ROAS from campaign impressions, clicks, spend and revenue to compare acquisition-channel efficiency.',
      'Visualized performance trends and identified budget-optimization opportunities focused on improving ROAS and reducing CPA.',
    ],
    features: [
      'CTR and CPC calculations',
      'Conversion-rate and CPA comparisons',
      'ROAS evaluation by acquisition channel',
      'Performance-trend visualizations',
      'Budget-optimization recommendations',
    ],
    metrics: [
      { value: 'CTR', label: 'Click-through rate' },
      { value: 'CPC', label: 'Cost per click' },
      { value: 'CVR', label: 'Conversion rate' },
      { value: 'CPA', label: 'Cost per acquisition' },
      { value: 'ROAS', label: 'Return on ad spend' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'campaign',
  },
  {
    id: 'shopify-powerbi',
    title: 'Shopify Sales & Customer Funnel Analysis',
    year: 'CASE STUDY',
    genre: 'POWER BI • E-COMMERCE',
    logline: 'An interactive Power BI dashboard for sales performance, order value, repeat purchases and customer behavior.',
    stack: ['Power BI', 'Shopify Data', 'KPI Reporting', 'Dashboard Design'],
    build: [
      'Performed sales and customer funnel analysis using Shopify data, evaluating net sales, order value, customer retention, repeat purchases, products and payment gateways.',
      'Built an interactive Power BI dashboard with KPI metrics, maps, charts, slicers and trend analysis to monitor sales performance and customer behavior.',
    ],
    features: [
      'Net sales and order-value KPIs',
      'Customer retention and repeat-purchase analysis',
      'Product and payment-gateway comparisons',
      'Interactive charts, maps and slicers',
      'Trend analysis for sales and customer behavior',
    ],
    metrics: [
      { value: 'Sales', label: 'Net sales & order value' },
      { value: 'Repeat', label: 'Customer retention' },
      { value: 'Products', label: 'Product performance' },
      { value: 'Payments', label: 'Payment gateways' },
      { value: 'BI', label: 'Interactive Power BI report' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'dashboard',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/** Career and project highlights, rather than unlisted awards. */
export const achievements: Achievement[] = [
  {
    id: 'funnel-analysis',
    title: 'Funnel Analysis',
    org: 'E-Commerce Analytics',
    detail: 'Mapped product views, add-to-cart, checkout and purchase events, comparing drop-offs by device and acquisition source.',
    laurel: 'Customer Journey',
  },
  {
    id: 'experimentation',
    title: 'A/B Testing',
    org: 'Experimentation & Statistics',
    detail: 'Evaluated control and treatment conversion rates using hypothesis tests, p-values, confidence intervals and bias considerations.',
    laurel: 'Evidence-Led',
  },
  {
    id: 'campaign-performance',
    title: 'Campaign Metrics',
    org: 'Digital Marketing Analytics',
    detail: 'Compared acquisition efficiency with CTR, CPC, conversion rate, CPA and ROAS to inform budget recommendations.',
    laurel: 'Growth Analytics',
  },
  {
    id: 'powerbi-dashboard',
    title: 'Power BI Dashboard',
    org: 'Shopify Sales Analysis',
    detail: 'Built an interactive dashboard to monitor sales, order value, customer retention, repeat purchases and customer behavior.',
    laurel: 'Business Intelligence',
  },
  {
    id: 'education',
    title: '2026 Graduate',
    org: 'B.Tech Information Technology',
    detail: 'Puducherry Technological University · CGPA 7.98/10.',
    laurel: 'Education',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

// The supplied CV lists these credentials but does not contain individual verification URLs.
export const certifications: Certification[] = [
  { issuer: 'Forage', name: 'Deloitte Data Analytics Job Simulation' },
  { issuer: 'Forage', name: 'Tata GenAI Powered Data Analytics Job Simulation' },
  { issuer: 'Cognitive Class', name: 'IBM Data Analysis with Python' },
  { issuer: 'Simplilearn', name: 'SQL Certification' },
  { issuer: 'Simplilearn', name: 'Microsoft Excel Certification' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'sql-data',
    title: 'SQL & Data',
    subtitle: 'Querying, structuring and validating datasets',
    skills: [
      { name: 'SQL', mono: 'SQL', note: 'Core' },
      { name: 'BigQuery', mono: 'BQ' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Joins', mono: 'Jn' },
      { name: 'CTEs', mono: 'CTE' },
      { name: 'Window Functions', mono: 'WF' },
      { name: 'Aggregations', mono: 'Σ' },
      { name: 'GA4 Event Data', mono: 'GA4' },
      { name: 'Data Cleaning', mono: 'DC' },
      { name: 'Data Validation', mono: 'DV' },
    ],
  },
  {
    id: 'python-stats',
    title: 'Python & Statistics',
    subtitle: 'Analysis, visualization and statistical reasoning',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Core' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'SciPy', mono: 'Sp' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'EDA', mono: 'EDA' },
      { name: 'Hypothesis Testing', mono: 'H₀' },
      { name: 'P-values', mono: 'p' },
      { name: 'Confidence Intervals', mono: 'CI' },
      { name: 'Automation', mono: 'Au' },
    ],
  },
  {
    id: 'bi-viz',
    title: 'BI & Visualization',
    subtitle: 'Interactive dashboards and KPI reporting',
    skills: [
      { name: 'Power BI', mono: 'BI', note: 'Dashboard' },
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Excel', mono: 'Xl' },
      { name: 'KPI Reporting', mono: 'KPI' },
      { name: 'Charts & Maps', mono: 'Viz' },
      { name: 'Slicers', mono: 'Sl' },
      { name: 'Trend Analysis', mono: 'Tr' },
    ],
  },
  {
    id: 'marketing-commerce',
    title: 'E-commerce & Marketing',
    subtitle: 'Customer behavior, acquisition and sales metrics',
    skills: [
      { name: 'Shopify Sales Analysis', mono: 'Sh' },
      { name: 'Funnel Analysis', mono: 'Fn' },
      { name: 'Conversion Rate', mono: 'CVR' },
      { name: 'CTR', mono: 'CTR' },
      { name: 'CPC', mono: 'CPC' },
      { name: 'CPA', mono: 'CPA' },
      { name: 'ROAS', mono: 'ROAS' },
      { name: 'Customer Retention', mono: 'CR' },
      { name: 'Repeat Purchases', mono: 'RP' },
    ],
  },
  {
    id: 'experimentation-cro',
    title: 'Experimentation & CRO',
    subtitle: 'Testing, segmentation and conversion improvement',
    skills: [
      { name: 'A/B Testing', mono: 'A/B', note: 'Experimentation' },
      { name: 'Sample-size Considerations', mono: 'N' },
      { name: 'Statistical Significance', mono: 'Sig' },
      { name: 'Segmentation', mono: 'Seg' },
      { name: 'Root-cause Analysis', mono: 'RCA' },
      { name: 'CRO Recommendations', mono: 'CRO' },
      { name: 'ChatGPT-assisted Reporting', mono: 'AI' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  SQL: ['E-Commerce Conversion Funnel Analysis', 'SQL Certification'],
  BigQuery: ['E-Commerce Conversion Funnel Analysis'],
  MySQL: ['SQL & Data skills listed on the CV'],
  Joins: ['SQL & Data skills listed on the CV'],
  CTEs: ['SQL & Data skills listed on the CV'],
  'Window Functions': ['SQL & Data skills listed on the CV'],
  Aggregations: ['SQL & Data skills listed on the CV'],
  'GA4 Event Data': ['E-Commerce Conversion Funnel Analysis'],
  'Data Cleaning': ['SQL & Data skills listed on the CV'],
  'Data Validation': ['SQL & Data skills listed on the CV'],
  Python: ['A/B Testing', 'Marketing Campaign Analysis', 'NSIC internship'],
  Pandas: ['A/B Testing', 'Marketing Campaign Analysis'],
  NumPy: ['Python & Statistics skills listed on the CV'],
  SciPy: ['A/B Testing & Statistical Analysis'],
  Matplotlib: ['Marketing Campaign Performance Analysis'],
  EDA: ['Python & Statistics skills listed on the CV'],
  'Hypothesis Testing': ['A/B Testing & Statistical Analysis'],
  'P-values': ['A/B Testing & Statistical Analysis'],
  'Confidence Intervals': ['A/B Testing & Statistical Analysis'],
  Automation: ['NSIC internship'],
  'Power BI': ['Shopify Sales & Customer Funnel Analysis'],
  Tableau: ['BI & AI Tools listed on the CV'],
  Excel: ['Microsoft Excel Certification'],
  'KPI Reporting': ['Shopify dashboard and marketing campaign analysis'],
  'Charts & Maps': ['Shopify Power BI dashboard'],
  Slicers: ['Shopify Power BI dashboard'],
  'Trend Analysis': ['Shopify dashboard and marketing campaign analysis'],
  'Shopify Sales Analysis': ['Shopify Sales & Customer Funnel Analysis'],
  'Funnel Analysis': ['E-Commerce Conversion Funnel Analysis', 'Shopify Sales & Customer Funnel Analysis'],
  'Conversion Rate': ['A/B Testing', 'Marketing Campaign Performance Analysis'],
  CTR: ['Marketing Campaign Performance Analysis'],
  CPC: ['Marketing Campaign Performance Analysis'],
  CPA: ['Marketing Campaign Performance Analysis'],
  ROAS: ['Marketing Campaign Performance Analysis'],
  'Customer Retention': ['Shopify Sales & Customer Funnel Analysis'],
  'Repeat Purchases': ['Shopify Sales & Customer Funnel Analysis'],
  'A/B Testing': ['A/B Testing & Statistical Analysis'],
  'Sample-size Considerations': ['A/B Testing & Statistical Analysis'],
  'Statistical Significance': ['A/B Testing & Statistical Analysis'],
  Segmentation: ['E-Commerce Conversion Funnel Analysis'],
  'Root-cause Analysis': ['Core Skills listed on the CV'],
  'CRO Recommendations': ['E-Commerce Conversion Funnel Analysis'],
  'ChatGPT-assisted Reporting': ['BI & AI Tools listed on the CV'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Information Technology at Puducherry Technological University, completed in 2026 with a CGPA of 7.98/10.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Graduate',
        description: 'B.Tech — Information Technology, Puducherry Technological University. CGPA 7.98/10.',
        tags: ['B.Tech', 'Information Technology', 'CGPA 7.98/10'],
        runtime: '2022 – 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Reading Customer Journeys',
    period: 'Analytics Projects',
    synopsis: 'E-commerce funnel and Shopify sales analysis focused on customer behavior, conversion points and business performance.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Funnel Analyst',
        description: 'Queried GA4 event data across product views, add-to-cart, checkout and purchase, comparing drop-offs by device and acquisition source.',
        tags: ['SQL', 'BigQuery', 'GA4', 'Python'],
        runtime: 'Portfolio project',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Commerce Analyst',
        description: 'Analyzed Shopify net sales, order value, retention, repeat purchases, products and payment gateways through an interactive Power BI dashboard.',
        tags: ['Shopify', 'Power BI', 'KPI Reporting'],
        runtime: 'Portfolio project',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Testing & Optimization',
    period: 'Experimentation & Marketing',
    synopsis: 'A/B testing, statistical analysis and digital marketing performance measurement to support evidence-based decisions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Experimenter',
        description: 'Compared treatment and control conversion rates using hypothesis tests, p-values and confidence intervals, while documenting sample-size and bias considerations.',
        tags: ['Python', 'Pandas', 'SciPy', 'A/B Testing'],
        runtime: 'Portfolio project',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Campaign Analyst',
        description: 'Compared acquisition-channel efficiency using CTR, CPC, conversion rate, CPA and ROAS; visualized trends and outlined budget-optimization opportunities.',
        tags: ['Python', 'Pandas', 'Matplotlib', 'ROAS'],
        runtime: 'Portfolio project',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Applied Learning',
    period: 'Internships',
    synopsis: 'Two three-week internships provided exposure to Python-based AI/ML workflows and a healthcare learning-disability detection system.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AI & Machine Learning',
        description: 'At NSIC in Chennai, applied Python-based AI/ML fundamentals and automation techniques to analytical problem-solving and basic model-building workflows.',
        tags: ['Python', 'AI/ML Fundamentals', 'Automation'],
        runtime: '3-week internship',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Healthcare Technology',
        description: 'Contributed to a healthcare learning-disability detection system with React, responsive UI development and secure healthcare-data handling.',
        tags: ['React', 'Responsive UI', 'Healthcare Data'],
        runtime: '3-week internship',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: 'Focused on analytics',
    synopsis: 'Building a career around SQL, Python, experimentation, business intelligence and e-commerce / marketing analytics, with relocation openness for Dubai, UAE.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'From Data to Decisions',
        description: 'Focused on identifying trends and conversion friction, then communicating actionable findings through dashboards and recommendations.',
        tags: ['Data Analytics', 'Power BI', 'CRO', 'Dubai, UAE'],
        runtime: 'Career focus',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Core query skill', title: 'SQL + BigQuery', detail: 'GA4 event data and customer journey analysis', palette: crimson },
  { label: 'Statistical analysis', title: 'A/B Testing', detail: 'Hypothesis tests, p-values and confidence intervals', palette: amber },
  { label: 'Marketing KPIs', title: 'CTR · CPC · CPA', detail: 'Conversion rate and ROAS channel comparisons', palette: ocean },
  { label: 'Business intelligence', title: 'Power BI', detail: 'Interactive Shopify sales & customer dashboard', palette: jade },
  { label: 'Programming', title: 'Python', detail: 'Pandas, NumPy, SciPy and Matplotlib', palette: violet },
  { label: 'Customer journey', title: 'Funnel Analysis', detail: 'Product views through purchase', palette: crimson },
  { label: 'Event analytics', title: 'GA4', detail: 'Device and acquisition-source comparisons', palette: ocean },
  { label: 'Data visualization', title: 'Dashboards', detail: 'KPI metrics, maps, charts, slicers and trends', palette: jade },
  { label: 'Graduate profile', title: 'B.Tech IT', detail: 'Puducherry Technological University · 7.98/10', palette: amber },
  { label: 'Career direction', title: 'Data Analyst', detail: 'E-commerce, marketing analytics and CRO · Dubai-ready', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Data Analyst',
    lines: ['Thangamani K', 'B.Tech Information Technology · 2026 graduate', 'Open to relocate to Dubai, UAE'],
    chips: ['CGPA 7.98/10'],
  },
  {
    kicker: 'Data toolkit',
    title: 'SQL + Python',
    lines: ['SQL, BigQuery, MySQL and GA4 event data', 'Python, Pandas, NumPy, SciPy and Matplotlib'],
    chips: ['SQL', 'BigQuery', 'Python', 'Pandas'],
  },
  {
    kicker: 'Business intelligence',
    title: 'From KPIs to Dashboards',
    lines: ['Power BI, Tableau and Excel', 'Interactive views, trend analysis and KPI reporting'],
    chips: ['Power BI', 'Tableau', 'Excel'],
  },
  {
    kicker: 'Projects',
    title: 'Four Analytics Case Studies',
    lines: ['E-Commerce Conversion Funnel Analysis', 'A/B Testing & Statistical Analysis', 'Marketing Campaign Performance Analysis', 'Shopify Sales & Customer Funnel Analysis'],
  },
  {
    kicker: 'Experimentation',
    title: 'Test. Measure. Learn.',
    lines: ['Control-versus-treatment conversion comparisons', 'P-values, confidence intervals, sample-size considerations and bias risks'],
  },
  {
    kicker: 'Experience & learning',
    title: 'Applied Analytics',
    lines: ['AI & Machine Learning Intern · NSIC · 3 weeks', 'Frontend Development Intern · National Mental Health Program | GH · 3 weeks'],
  },
  {
    kicker: 'Current mission',
    title: 'Data Into Decisions',
    lines: ['E-commerce analytics · Marketing performance · Conversion Rate Optimization', 'Open to Data Analyst opportunities in Dubai, UAE'],
  },
];

export type ProfileId = 'thangamani' | 'recruiter' | 'analyst' | 'business';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'thangamani',
    name: 'Thangamani',
    blurb: 'The full analytics series',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, internships & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'analyst',
    name: 'Data Analyst',
    blurb: 'Projects, tools & methods first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'picks', 'about', 'moments', 'story'],
  },
  {
    id: 'business',
    name: 'Business Team',
    blurb: 'Insights, dashboards & outcomes first',
    color: '#ffb547',
    order: ['about', 'picks', 'originals', 'skills', 'moments', 'journey', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'Analytics Projects', meta: `${projects.length} Case Studies • Data Analytics`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Analytics Highlights', meta: 'Key tools, methods & focus areas', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Skill Categories`, palette: ocean },
  moments: { nav: 'Credentials', card: 'Highlights & Credentials', meta: `${achievements.length} Highlights • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'CV', card: 'Resume & CV', meta: 'Resume • View & download', palette: violet },
};
