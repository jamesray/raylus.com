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
        text: '©️ 2023 - James Ray',
      },

      // possible value are : true | false
      navigation: false,

      // possible value are : 'none' | 'left' | 'center' | 'right'
      alignment: 'left',

      message: 'powered by nuxt.studio',
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

    image: {
      src: '/alpine-0.webp',
      alt: '',
    },

    backToTop: {
      text: 'to top',
    },
    integrations: {
      formspree: { 
        url: 'https://formspree.io/f/xjvqypge' 
      }
    },
  },

  prose: {
    headings: {
      icon: 'icon-park-solid:copy-link',
    },

    h1: {
      icon: 'material-symbols:format-h1',
    },
  },

  nuxtIcon: {
    size: '1.2em',
  },
});
