import Ref1 from '../../../../public/images/wee_start.png'
import Ref2 from '../../../../public/images/tc_screenshot.png'
import Ref3 from '../../../../public/images/sl_screenshot.png'
import Daniel from '../../../../public/images/DanielFounder2.png'
import Viktor from '../../../../public/images/ViKCeo2.png'
import Tony from '../../../../public/images/TonyDev2.png'
import Denny from '../../assets/image/agency/client/denny.png'
import Menny from '../../assets/image/agency/client/menny.png'

const data = {
  menuItems: [
    {
      label: 'Leistungen',
      path: '/#featureSection',
      offset: '80',
    },
    {
      label: 'Unser Know-How',
      path: '/#AboutUsSection',
      offset: '67',
    },
    {
      label: 'Work smart, not hard',
      path: '/#workHistorySection',
      offset: '67',
    },
    {
      label: 'Portfolio',
      path: '/#blogSection',
      offset: '50',
    },
    // {
    //   label: 'Wie wir arbeiten',
    //   path: '/#videoSection',
    //   offset: '67',
    // },
    {
      label: 'Team',
      path: '/#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '/#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Hervorragende Kommunikationsfähigkeiten',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Nutzung von modernsten Design-Tools',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Cyber-Security Maßnahmen',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: 'KI-Anwendungen (z.B. Chatbots)',
      icon: 'flaticon-next',
    },
    {
      id: 5,
      title: 'Digitale Telefonanlagen mit nativer Smartphone-Anbindung',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Suchmaschinen-Optimierung (SEO)',
      description:
        'Bringen Sie Ihre Website an die Spitze der Suchergebnisse, mit cleveren SEO-Strategien, die Sie vom Rest abheben.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Ui/UX Design',
      description:
        'Schicke Designs und simple Interfaces, die Ihre Nutzer lieben werden – wir haben das Auge dafür und setzen es um!',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Cyber-Security',
      description:
        'Ihr digitaler Bodyguard – robuste Cyber Security, die Hacker alt aussehen lässt.',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Flexibler Tech-Stack',
      description:
        'Egal, ob Javascript, PHP oder MySQL – wir sind die Tech-Chamäleons, die für jedes deiner Probleme den richtigen Code parat haben.',
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Digitale Telefonanlage',
      description:
        'Telefonieren 2.0 – überall und jederzeit erreichbar, mit einer Telefonanlage, die sich Ihrem Business anpasst.',
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'KI-unterstütze Software',
      description:
        'Work smart, not hard! KI-unterstützte Software boostet Ihre Prozesse und lässt Ihnen Raum für andere Aufgaben.',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Cyber-Security',
      description:
        'Anwendung modernster Sicherheits-Mechanismen zum Schutz vor Cyber-Angriffen.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Flexible Stack',
      description:
        'Software-Entwicklung verändert sich stetig und wir passen unser Know How daran an.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'Design und Bedienfreundlichkeit entscheiden über den Erfolg einer Internetseite, daher liegt hier unser besonderer Augenmerk.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Digitale Telefonanlage',
      description:
        'Festnetz und Mobilfunk perfekt vereint und mit KI-Funktionen optimiert.',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Weser Ems Eisenbahn',
      thumbnail_url: Ref1,
      date: 'September 2023',
      postLink: 'https://www.wee.gmbh',
    },
    {
      id: 2,
      title: 'Traincrew',
      thumbnail_url: Ref2,
      date: 'August 2023',
      postLink: 'https://www.traincrew.de',
    },
    {
      id: 3,
      title: 'Schnellimbiss Schmeckt Lecker',
      thumbnail_url: Ref3,
      date: 'Januar 2024',
      postLink: 'https://www.schmeckt-lecker.net',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Daniel Wulfing',
      thumbnail_url: Daniel,
      designation: 'Founder / Developer',
      social_links: [
        // {
        //   id: 1,
        //   icon: 'flaticon-facebook-logo',
        //   url: 'https://de-de.facebook.com/people/Daniel-Wulfing/pfbid02Ba1n4Pt5PDjCnEMmcDrKJ5kWMUoBs6641SWAsfJ2CTtDfk67L4nvUBs3myDf2Da5l/',
        // },
        // {
        //   id: 1,
        //   icon: 'flaticon-twitter-logo-silhouette',
        //   url: '#',
        // },
        {
          id: 1,
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/daniel-wulfing-522150178/?originalSubdomain=de',
        },
        {
          id: 2,
          icon: 'xing',
          url: 'https://www.xing.com/profile/Daniel_Wulfing',
        },
      ],
    },
    {
      id: 2,
      name: 'Viktor Grünwald',
      thumbnail_url: Viktor,
      designation: 'CEO / Developer',
      social_links: [
        {
          id: 1,
          icon: 'linkedin',
          url: '#',
        },
        {
          id: 2,
          icon: 'xing',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Tony Schroeder',
      thumbnail_url: Tony,
      designation: 'Developer / Ui-UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'linkedin',
          url: '#',
        },
        {
          id: 2,
          icon: 'xing',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Jon Doe',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Jone Doe',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title:
        'Was umfasst Ihre Dienstleistungen in der Software- und Webentwicklung?',
      description:
        'Von der ersten Skizze bis zum finalen Code – wir sind Ihre digitalen Zauberer! Ob Sie eine komplett neue Software brauchen, Ihre Website einen Frischekick vertragen könnte oder Sie einfach technischen Support suchen – wir haben den richtigen Tech-Stack und das Know-how, um Ihr Projekt zum Laufen zu bringen.',
    },
    {
      id: 2,
      title:
        'Wie gewährleisten Sie die Qualität und Sicherheit der entwickelten Software?',
      description:
        'Qualität und Sicherheit? Bei uns Standard! Wir checken jeden Code zweimal, testen was das Zeug hält und bleiben immer auf dem neuesten Stand der Techniksicherheit. Unsere Devs sind wie Detektive – nichts entgeht ihrem scharfen Blick!',
    },
    {
      id: 3,
      title:
        'Welche Vorteile bietet eine Online-Telefonanlage für kleine und mittelständische Unternehmen?',
      description:
        'Stell Sie sich vor, Ihre Telefonanlage macht, was Sie wollen – und das überall! Keine hohen Kosten mehr, super flexibel und skalierbar. Plus: Telefonanlage von überall, also auch im Homeoffice oder im Café. Willkommen in der Zukunft der Telefonie!',
    },
    {
      id: 4,
      title:
        'Kann ich meine vorhandene Telefonnummer behalten, wenn ich zu Ihrer Online-Telefonanlage wechsle?',
      description:
        'Klar doch, Ihre Nummer können Sie mitnehmen! Wechseln Sie zu twylo phone und nehmen Sie Ihre alte Rufnummer einfach mit. Kein Drama, kein Papierkram – einfach weiter telefonieren wie gewohnt.',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'Über uns',
      menuItems: [
        {
          id: 1,
          url: '#featureSection',
          text: 'Leistungen',
        },
        {
          id: 2,
          url: '#AboutUsSection',
          text: 'Unser Know-How',
        },
        {
          id: 3,
          url: '#workHistorySection',
          text: 'Work smart, not hard',
        },
        {
          id: 4,
          url: '#blogSection',
          text: 'Portfolio',
        },
        // {
        //   id: 5,
        //   url: '#videoSection',
        //   text: 'Wie wir arbeiten',
        // },
        {
          id: 6,
          url: '#teamSection',
          text: 'Team',
        },
        {
          id: 7,
          url: '#faqSection',
          text: 'FAQ',
        },
      ],
    },
    // {
    //   id: 2,
    //   title: 'Our Information',
    //   menuItems: [
    //     // {
    //     //   id: 1,
    //     //   url: '#1',
    //     //   text: 'Return Policy',
    //     // },
    //     {
    //       id: 2,
    //       url: '#2',
    //       text: 'Privacy Policy',
    //     },
    //     // {
    //     //   id: 3,
    //     //   url: '#2',
    //     //   text: 'Terms & Conditions',
    //     // },
    //     // {
    //     //   id: 4,
    //     //   url: '#4',
    //     //   text: 'Site Map',
    //     // },
    //     // {
    //     //   id: 5,
    //     //   url: '#5',
    //     //   text: 'Store Hours',
    //     // },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: 'My Account',
    //   menuItems: [
    //     {
    //       id: 1,
    //       url: '#1',
    //       text: 'Press inquiries',
    //     },
    //     {
    //       id: 2,
    //       url: '#2',
    //       text: 'Social media directories',
    //     },
    //     {
    //       id: 3,
    //       url: '#3',
    //       text: 'Images & B-roll',
    //     },
    //     {
    //       id: 4,
    //       url: '#4',
    //       text: 'Permissions',
    //     },
    //     {
    //       id: 5,
    //       url: '#5',
    //       text: 'Speaker requests',
    //     },
    //   ],
    // },
    {
      id: 4,
      title: 'Rechtliches',
      menuItems: [
        {
          id: 1,
          url: 'policy',
          text: 'Datenschutzbestimmungen',
        },
        // {
        //   id: 2,
        //   url: '#',
        //   text: 'Cookies',
        // },
        {
          id: 3,
          url: 'imprint',
          text: 'Impressum',
        },
        // {
        //   id: 4,
        //   url: '#4',
        //   text: 'Responsible supply chain',
        // },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
}
export default data
