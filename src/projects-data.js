const projects = [
  {
    id: 0,
    name: 'BuJo',
    link: 'bujo',
    completed: true,
    picture: '/',
    blurb:
      'A web-based task management productivity tool inspired by the Bullet Journal system.',
    info:
      'A web-based task management productivity tool inspired by the Bullet Journal system. BuJo combines a journal, a planner, and a to-do list all in one. It provides data visualization of completed tasks to gain insight into what areas you are spending your efforts.',
    features: '',
    github: 'https://github.com/bujo1604/BuJo',
    demo: 'https://bujo.herokuapp.com/',
    youtube: 'https://www.youtube.com/watch?v=um_jAmuSNNM',
    frameworks: [
      {
        name: 'reactJS',
        link: ''
      },
      {
        name: 'react-redux',
        link: ''
      },

      {
        name: 'momentJS',
        link: ''
      },
      {
        name: 'd3JS',
        link: ''
      },
      {
        name: 'node',
        link: ''
      },
      {
        name: 'express',
        link: ''
      },
      {
        name: 'sequelize',
        link: ''
      }
    ]
  },
  {
    id: 1,
    name: 'Ice Creamy',
    link: 'icecreamy',
    completed: false,
    picture: '/',
    blurb:
      'A native application that uses geolocation to find Ice Cream locations near you.',
    info:
      'It gives you a list of approximately 30 places that are relatively close to you. When selecting one of the locations, the information provided will be whether the location is currently open or closed, address, phone number and a map with its location marked in screen.',
    github: 'https://github.com/mupraj10/icecreamapp',
    demo: false,
    youtube: 'https://youtu.be/mcdvn_Keheg',
    frameworks: [
      {
        name: 'reactnative',
        link: ''
      },
      {
        name: 'yelpAPI',
        link: ''
      }
    ]
  },
  {
    id: 2,
    name: 'Moodifs',
    link: 'moodifs',
    completed: false,
    picture: '/',
    blurb:
      'A progressive web application that uses sentiment analysis to provide you will a daily gif based on your mood of the day.',
    info:
      'It also provides data visualization of your monthly, weekly moods to get a sense of how you are feeling!',
    github: 'https://github.com/mupraj10/mooddif',
    demo: false,
    youtube: false,
    frameworks: [
      {
        name: 'react',
        link: ''
      },
      {
        name: 'sentimentJS',
        link: ''
      },
      {
        name: 'giphyAPI',
        link: ''
      }
    ]
  },
  {
    id: 3,
    name: 'Delayed',
    link: 'delayed',
    completed: false,
    picture: '/',
    blurb:
      'A progressive web application that uses sentiment analysis to provide you will a daily gif based on your mood of the day.',
    info:
      'It also provides data visualization of your monthly, weekly moods to get a sense of how you are feeling!',
    github: 'https://github.com/mupraj10/mooddif',
    demo: false,
    youtube: false,
    frameworks: [
      {
        name: 'react',
        link: ''
      },
      {
        name: 'sentimentJS',
        link: ''
      },
      {
        name: 'giphyAPI',
        link: ''
      }
    ]
  },
  {
    id: 4,
    name: 'Leslie Knope Quotes API',
    link: 'leslie-knope',
    completed: true,
    picture: '/',
    blurb:
      'A simple API serving up Leslie Knope quotes from Parks and Recreation.',
    info:
      'A simple API serving up Leslie Knope quotes from Parks and Recreation.  It allows anyone to get a random quote or muliple quotes as a JSON Object.',
    github: 'https://github.com/mupraj10/leslie-knope-quotes',
    demo: 'https://leslie-knope-quotes.herokuapp.com/',
    youtube: false,
    frameworks: [{ name: 'ExpressJS' }, { name: 'NodeJS' }]
  }
];

export default projects;
