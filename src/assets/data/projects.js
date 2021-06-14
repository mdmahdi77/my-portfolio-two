import { v4 as uuidv4 } from 'uuid';
import DoctorsPortal from '../images/doctorsPortal.PNG';
import DiamondWorld from '../images/DiamondWorld.PNG';
import MobileShop from '../images/mobileShop.PNG';
import FoodStall from '../images/foodStall.PNG';
import CruiseQueen from '../images/cruiseQueen.PNG';
import Sports from '../images/sports.PNG';
import Panda from '../images/panda.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Diamond World',
    desc:'A fullstack diamond world app using React JS, Node JS, MongoDB, Bootstrap."',
    img: DiamondWorld,
    code: "https://github.com/mdmahdi77/Diamond-World-Client",
    live: "https://last-assignment-f788f.firebaseapp.com/",
  },
  {
    id: uuidv4(),
    name: 'Doctors Portal',
    desc:'A fullstack doctors-portal app using React JS, Node JS, Express JS, MongoDB, Bootstrap.',
    img: DoctorsPortal,
    code: "https://github.com/mdmahdi77/doctors-portal-client",
    live: "https://doctors-portal-project-63a75.web.app/",
  },
  {
    id: uuidv4(),
    name: 'Mobile Shop',
    desc:'A fullstack e-commerce mobile shop app using React JS, Node JS, Express JS, MongoDB, Bootstrap.',
    img: MobileShop,
    code: "https://github.com/mdmahdi77/mobile-shop-cllient",
    live: "https://assignment10-1.firebaseapp.com/",
  },
  {
    id: uuidv4(),
    name: "Food Stall",
    desc:'Food Stall is a food searching app using HTML5, CSS3, Bootstrap, JavaScript and Netlify.',
    img: FoodStall,
    code: "https://github.com/mdmahdi77/assignment-5",
    live: "https://youthful-leavitt-be35f7.netlify.app/",
  },
  {
    id: uuidv4(),
    name: 'Cruise Queen',
    desc:'Cruise Queen is a ticket booking app using HTML5, CSS3, Bootstrap, JavaScript.',
    img: CruiseQueen,
    code: "https://github.com/mdmahdi77/ninja-tickets",
    live: "https://loving-thompson-33f36f.netlify.app/",
  },
  {
    id: uuidv4(),
    name: 'English Premier League',
    desc:'English Premier League is sports related app using HTML5, CSS3, React js and netlify.',
    img: Sports,
    code: "https://github.com/mdmahdi77/english-premiar-league",
    live: "https://elated-bassi-4506d7.netlify.app/",
  },
  {
    id: uuidv4(),
    name: 'Panda Commerce',
    desc:'Panda Commerce is e-commerce app using HTML4, CSS3, Bootstrap and netlify',
    img: Panda,
    code: "https://github.com/mdmahdi77/panda_commerce_bootstrape",
    live: "https://wonderful-sammet-2165fe.netlify.app/",
  },
];

export default projects;
