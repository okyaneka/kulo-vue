export default (path) => () => import(/* webpackChunkName: "views" */ `./${path}`);
