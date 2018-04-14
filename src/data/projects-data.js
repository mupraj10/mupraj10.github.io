const projects = [
  {
    id: 3,
    name: 'Leslie Knope Quotes API',
    link: 'leslie-knope',
    completed: true,
    picture: '/',
    blurb:
      'A simple API serving up Leslie Knope quotes from Parks and Recreation.',
    info:
      'A simple API serving up Leslie Knope quotes from Parks and Recreation.  It allows anyone to get a random quote or multiple quotes as a JSON Object.',
      features: ['Users can make GET requests to recieve a random quote or a group of random quotes '],
    github: 'https://github.com/mupraj10/leslie-knope-quotes',
    demo: 'https://leslie-knope-quotes.herokuapp.com/',
    youtube: false,
    frameworks: [{ name: 'ExpressJS' }, { name: 'NodeJS' }]
  },

  {
    id: 2,
    name: 'Moodifs',
    link: 'moodifs',
    completed: false,
    picture: '/',
    features: ['Users can type in a mood and get a gif related to their feeling back', 'Users can see a gallery of all their previous moods and associated gifs'],
    blurb:
      'A web application that uses sentiment analysis to provide you with a daily gif based on your mood of the day.',
    info:
      'A progressive web application that uses sentiment analysis to provide you witl a daily gif based on your mood of the day. It also provides data visualization of your monthly, weekly moods to get a sense of how you are feeling!',
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
    id: 0,
    name: 'BuJo',
    link: 'bujo',
    completed: true,
    picture: '/',
    blurb:
      'A web-based task management productivity tool inspired by the Bullet Journal system.',
    info:
      'A web-based task management productivity tool inspired by the Bullet Journal system. BuJo combines a journal, a planner, and a to-do list all in one. It provides data visualization of completed tasks to gain insight into what areas you are spending your efforts.',
    features: ['Users can create custom Categories', 'Users can add Tasks, Events, and Notes on the Day View', 'Users can See The Month View with all revelant infomration', 'Users can create multiple habit trackers for each month', 'Users can visualize the tasks that are getting completed'],
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
    completed: true,
    picture: 'https://media.giphy.com/media/69jFa6S1WcGiiJIWIp/giphy.gif',
    blurb:
      'A native application that uses geolocation to find Ice Cream locations near you.',
    info:
      'It gives you a list of approximately 30 places that are relatively close to you. When selecting one of the locations, the information provided will be whether the location is currently open or closed, address, phone number and a map with its location marked in screen.',
    features:['Users can press Find Ice Cream and app will searche for the 50 closest locations',
      'Users can see all the information (name, open/closed, phone number, address) about the location',
      'Users can link to Apple Maps to provide directions to get to the location.'],
      github: 'https://github.com/mupraj10/icecreamapp',
    demo: false,
    youtube: 'https://youtu.be/mcdvn_Keheg',
    frameworks: [
      {
        name: 'React Native',
        link: ''
      },
      {
        name: 'Yelp API',
        link: ''
      }
    ]
  },
  
];

export default projects;

// {
//   id: 3,
//   name: 'Delayed',
//   link: 'delayed',
//   completed: false,
//   picture: '/',
//   blurb:
//     'A progressive web application uses MTA and user feedback to show if a train is delayed in real-time',
//   info:
//     'An application built to see if a train is delayed before the MTA annouces the delay via user communication',
//   github: 'https://github.com/mupraj10/mta-info',
//   features: ['currently still working on getting a frontend for this project'],
//   demo: false,
//   youtube: false,
//   frameworks: [
//     {
//       name: 'react',
//       link: ''
//     }
//   ]
// }