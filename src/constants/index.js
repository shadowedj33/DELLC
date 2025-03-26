import {
  pencil,
  thumbprint,
  speed,
  folder,
  admin,
  personal,
  chromecast,
  disc02,
  linkedin,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  meeting,
  production,
  design,
  hosting,
  searchMd,
  sliders04,
  twitter,
  html,
  css,
  react,
  js,
  tailwind,
  vite,
  reacticon,
  htmlicon,
  tailwindcss,
  threejs,
  nodejs,
  nextjs,
  eslinticon,
  logo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Benefits",
    url: "#benefits",
  },
  {
    id: "1",
    title: "Tools",
    url: "#tools",
  },
  {
    id: "2",
    title: "Features",
    url: "#features",
  },
  {
    id: "3",
    title: "Services",
    url: "#services",
  },
  {
    id: "4",
    title: "Our Process",
    url: "#our-process",
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [html, js, react, css, tailwind];

export const digendFeatures = [
  "Custom User Interfaces",
  "3-D Model Integration",
  "Interactive Animations",
];

export const digendIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Initial Discovery",
    text: "The Beginning Stage of Our Process is what sets us apart from the competition. We personally meet with our clients, whether in-person or on a video-call, and truly dive into their wants and needs. Unlike template page builds, we focus on making our clients using attractive and adaptive features and components. In a world full of web template companies, we devote time into making sure our clients' business stands in front of others on the web.",
    stage: "Stage 1",
    status: "done",
    imageUrl: meeting,
    colorful: true,
  },
  {
    id: "1",
    title: "Design Concept",
    text: "As soon as we grasp our clients' vision our team spares no time jumping right into designing layout concepts. These layouts are build specifically for each client, serving as a framework for the rest of the application to be built and designed upon.",
    stage: "Stage 2",
    status: "progress",
    imageUrl: design,
  },
  {
    id: "2",
    title: "Production",
    text: "After we agree upon a final design concept with the client, we dive right into the exciting part! Production is the most consuming stage of the process. This is where our team builds intricate and unique interfaces, animations, and all the eye-catching elements the client desires!",
    stage: "Stage 3",
    status: "done",
    imageUrl: production,
  },
  {
    id: "3",
    title: "Deployment/Maintenance",
    text: "Finally, once final configurations are made. We present the client's digital masterpiece to the world and deploy it. As well, many other processes can be included such as future maintenance, development, repair, and more.",
    stage: "Stage 4",
    status: "progress",
    imageUrl: hosting,
  },
];

export const collabText =
  "Using the most advanced packages and toolkits, our applications are fully customizable to any element you need!";

export const collabContent = [
  {
    id: "0",
    title: "Staying ahead of the competition",
    text: collabText,
  },
  {
    id: "1",
    title: "Vite + React Development",
  },
  {
    id: "2",
    title: "Tailwind CSS Integration",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "HTML5",
    icon: htmlicon,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Tailwindcss",
    icon: tailwindcss,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Threejs",
    icon: threejs,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Nodejs",
    icon: nodejs,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Nextjs",
    icon: nextjs,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "ESLint",
    icon: eslinticon,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Vite",
    icon: vite,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "React",
    icon: reacticon,
    width: 38,
    height: 32,
  },
];

export const services = [
  {
    id: "0",
    title: "Digital Advertising & AI-Powered Campaigns",
    description:
      "Turn Clicks Into Conversions with Smart Ads. We create and manage high-performance",
    features: [
      "Facebook, Instagram, & TikTok Ads - Precision-targeted campaigns that drive results.",
      "Google & Youtube Ads - Capture high-intent traffic and boost brand visibility.",
      "Retargeting & AI Optimization - Show the right ads to the right people at the right time.",
    ],
  },
  {
    id: "1",
    title: "Website Development & Optimization",
    description:
      "Your website is your 24/7 salesperson - we make sure it works fast, looks amazing, and converts visitors into customers.",
    features: [
      "Custom Web Development - Modern, SEO-optimized websites that load lightning-fast.",
      "E-Commerce & Sales Funnels – Shopify, WooCommerce & funnel-building for more sales.",
      "Conversion-Optimized Landing Pages – Designed for lead generation & higher engagement.",
      "Mobile & UX Optimization – Ensuring a seamless experience across all devices.",
    ],
  },
  {
    id: "2",
    title: "AI Systems Integrations",
    description:
      "We integrate cutting-edge AI tools and automation systems to streamline your marketing, customer service, and sales processes.",
    features: [
      "Chatbots & AI Customer Support – 24/7 AI-powered responses to boost customer engagement.",
      "CRM Automation – Seamlessly connect sales, marketing, and customer data.",
      "AI-Driven Email & SMS Marketing – Smart campaigns that adapt to customer behavior.",
      "Marketing & Sales Automation – Reduce manual work and increase efficiency.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "AI-Powered Marketing",
    text: "Smarter advertising with data-driven automation.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: folder,
    imageUrl: logo,
  },
  {
    id: "1",
    title: "Seamless System Integrations",
    text: "Automate your business for maximum efficiency.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: personal,
    imageUrl: logo,
    light: true,
  },
  {
    id: "2",
    title: "High-Impact Ad Campaigns",
    text: "More clicks, conversions, and revenue.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: pencil,
    imageUrl: logo,
  },
  {
    id: "3",
    title: "Custom Websites That Convert",
    text: "Optimized for speed, SEO, and sales.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: speed,
    imageUrl: logo,
    light: true,
  },
  {
    id: "4",
    title: "Words That Sell",
    text: "Persuasive messaging that speaks to your audience.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: thumbprint,
    imageUrl: logo,
  },
  {
    id: "5",
    title: "Result:",
    text: "Lower costs, higher conversions, and effortless scalability!",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: admin,
    imageUrl: logo,
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/james-defoggia/",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/digendeavors?s=21",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/digital.endeavors/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61559794712034",
  },
];
