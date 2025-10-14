// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-calibration-and-option-pricing-with-stochastic-volatility-and-double-exponential-jumps-has-just-been-accepted-in-the-journal-of-computational-and-applied-mathematics-sparkles",
          title: 'Our paper Calibration and option pricing with stochastic volatility and double exponential jumps...',
          description: "",
          section: "News",},{id: "news-our-paper-long-time-asymptotic-behavior-of-a-self-similar-fragmentation-equation-has-just-been-accepted-in-the-nonlinear-analysis-journal-sparkles",
          title: 'Our paper Long time asymptotic behavior of a self-similar fragmentation equation has just...',
          description: "",
          section: "News",},{id: "news-our-paper-calibration-and-option-pricing-with-stochastic-volatility-and-double-exponential-jumps-was-presented-by-j-p-aguilar-at-the-mathematical-finance-seminar-of-texas-tech-university-on-2025-09-19",
          title: 'Our paper Calibration and option pricing with stochastic volatility and double exponential jumps...',
          description: "",
          section: "News",},{id: "news-our-preprint-fast-and-explicit-european-option-pricing-under-tempered-stable-processes-is-now-available-with-its-companion-repository-ts-pricing",
          title: 'Our preprint Fast and explicit European option pricing under tempered stable processes is...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%67%61%7A%7A%6F%74%74%69@%63%72%61%6E%73.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gagazzotti", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
