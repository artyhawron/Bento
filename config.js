// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Amber',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '3bd7418650b35b74f269201362c0c5a3',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '-33.7585013',
  defaultLongitude: '150.97979999999998',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '2',
      name: 'Canvas',
      icon: 'activity',
      link: 'https://castlehill.instructure.com',
    },
    {
      id: '1',
      name: 'MPPS-Sentral',
      icon: 'framer',
      link: 'https://web2.mattpearce-p.schools.nsw.edu.au/dashboard/',
    },
    {
      id: '3',
      name: 'Portal',
      icon: 'user-check',
      link: 'https://portal.det.nsw.edu.au/group/staff-portal',
    },
    {
      id: '4',
      name: 'CHHS-Sentral',
      icon: 'check-circle',
      link: 'https://castlehill-h.sentral.com.au/portal2/#!/dashboard',
    },
    {
      id: '5',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '6',
      name: 'Seesaw',
      icon: 'book-open',
      link: 'https://app.seesaw.me',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Jack Hartmann',
        link: 'https://www.youtube.com/channel/UCVcQH8A634mauPrGbWs7QlQ',
      },
      {
        name: 'Just Dance',
        link: 'https://www.youtube.com/watch?v=6Q7-tzCCh3w',
      },
      {
        name: 'Kidz Bop',
        link: 'https://www.youtube.com/watch?v=yss0SGzrUIY',
      },
      {
        name: 'The Learning Station',
        link: 'https://www.youtube.com/watch?v=388Q44ReOWE',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
