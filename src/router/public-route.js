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
];

export { api };

export default web;
