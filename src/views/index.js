export default (path) => () => import(/* webpackChunkName: "view-" */ `./${path}`);
