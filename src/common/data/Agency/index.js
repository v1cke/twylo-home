import Ref1 from '../../../../public/images/wee_screenshot.png'
import Ref2 from '../../../../public/images/tc_screenshot.png'
import Ref3 from '../../../../public/images/sl_screenshot.png'
import Daniel from '../../../../public/images/sl_screenshot.png'
import Viktor from '../../../../public/images/ViKCeo.png'
import Tony from '../../../../public/images/TonyDev.png'
import Member1 from '../../assets/image/agency/team/member-1.jpg'
import Member2 from '../../assets/image/agency/team/member-2.jpg'
import Member3 from '../../assets/image/agency/team/member-3.jpg'
import Denny from '../../assets/image/agency/client/denny.png'
import Menny from '../../assets/image/agency/client/menny.png'

const data = {
  menuItems: [
    {
      label: 'Leistungen',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Geschichte',
      path: '#workHistorySection',
      offset: '67',
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '67',
    },
    // {
    //   label: 'Quality feature',
    //   path: '#qualitySection',
    //   offset: '67',
    // },
    {
      label: 'Kundenmeinungen',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'Team',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
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
      title: 'Anwendung modernster Design-Tools',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Cyber-Security Maßnahmen',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: 'KI-Anwendungen zur Optimierung Ihrer Arbeitsabläufe',
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
      title: 'Suchmaschinenoptimierung (SEO)',
      description:
        'Durch Nutzung von Suchmaschinenoptimierung erhalten Sie mehr Kunden.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Ui/UX Design',
      description:
        'Wir bieten das beste UI/UX Design, indem wir den neuesten Trends des Marktes folgen.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Cyber-Security',
      description:
        'Anwendung modernster Sicherheits-Mechanismen zum Schutz vor Cyber-Angriffen.',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Flexible Stack',
      description:
        'Software-Entwicklung verändert sich stetig. Daher erweitern auch wir unser Tech-Stack stetig.',
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Digitale Telefonanlage',
      description:
        'Festnetz und Mobilfunk perfekt vereint und mit KI-Funktionen optimiert.',
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'KI-unterstütze Software',
      description:
        'KI-unterstützte Software für eine maximale Effiziens Ihrer Arbeitsabläufe.',
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
      thumbnail_url: Viktor,
      designation: 'Founder / Developer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: 'https://de-de.facebook.com/people/Daniel-Wulfing/pfbid02Ba1n4Pt5PDjCnEMmcDrKJ5kWMUoBs6641SWAsfJ2CTtDfk67L4nvUBs3myDf2Da5l/',
        },
        {
          id: 1,
          icon: 'flaticon-x',
          url: '#',
        },
        {
          id: 1,

          icon: 'flaticon-linkedin-logo-silhouette',
          url: 'https://www.linkedin.com/in/daniel-wulfing-522150178/?originalSubdomain=de',
        },
        {
          id: 1,
          icon: 'flaticon-xing-logo',
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
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
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
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
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
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Support Center',
        },
        {
          id: 2,
          url: '#2',
          text: 'Customer Support',
        },
        {
          id: 3,
          url: '#3',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright',
        },
        {
          id: 5,
          url: '#5',
          text: 'Popular Campaign',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#4',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#5',
          text: 'Store Hours',
        },
      ],
    },
    {
      id: 3,
      title: 'My Account',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Press inquiries',
        },
        {
          id: 2,
          url: '#2',
          text: 'Social media directories',
        },
        {
          id: 3,
          url: '#3',
          text: 'Images & B-roll',
        },
        {
          id: 4,
          url: '#4',
          text: 'Permissions',
        },
        {
          id: 5,
          url: '#5',
          text: 'Speaker requests',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Application security',
        },
        {
          id: 2,
          url: '#2',
          text: 'Software principles',
        },
        {
          id: 3,
          url: '#3',
          text: 'Unwanted software policy',
        },
        {
          id: 4,
          url: '#4',
          text: 'Responsible supply chain',
        },
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
