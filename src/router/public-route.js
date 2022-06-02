import view from '../views';

const api = [];
const web = [
  {
    path: '/',
    name: 'home',
    component: view('public/public-home'),
  },
  {
    path: '/about',
    name: 'about',
    component: view('public/public-about'),
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: view('public/public-canvas'),
  },
];

export { api };

export default web;
