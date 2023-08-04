module.exports = {
  siteTitle: 'Aniruddha Ghosh',
  siteDescription:
    'Aniruddha Ghosh is a cybersecurity enthusiast, based in India, who loves learning new things and implementing them in real life.',
  siteKeywords:
    'Aniruddha Ghosh, Aniruddha, Ghosh, aghosh0605, security engineer, web developer, javascript, python, typescript, srmist, chennai, cybersecurity , cloud, iot, linux, networking',
  siteUrl: 'https://cybersupport.in/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-STK2LEVWC2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aniruddha Ghosh',
  location: 'Chennai, India',
  email: 'aghosh0605@gmail.com',
  github: 'https://github.com/aghosh0605',
  twitterHandle: '@aghosh0605',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/aghosh0605',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aghosh0605/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/yashitanamdeo',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aghosh0605',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aghosh0605',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
