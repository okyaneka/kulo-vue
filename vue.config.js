module.exports = {
  assetsDir: process.env.VUE_APP_ASSETS_DIR || "public",
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
};
