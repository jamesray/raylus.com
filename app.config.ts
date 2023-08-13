export default defineAppConfig({
  alpine: {
    title: 'Raylus',
    description: 'Personal blog about hacking, building applications, 3D printing, and music',
    // image: {
    //   src: '/alpine-0.webp',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300,
    // },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'raylus', // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: true,
        repository: 'https://www.github.com/jamesray',
        text: 'Powered by ⛰ Nuxt Studio',
      },
      navigation: true, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
    },
    socials: {
      twitter: 'realjamesray',
      instagram: 'raylus',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/james-engineer/',
      },
      github: 'jamesray',
    },
  },
});
