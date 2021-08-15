export default {
  computed: {
    menuItems() {
      return [
        { title: this.$t("Dashboard"), icon: "mdi-home", to: { path: "/" } },
        { title: this.$t("Layout"), icon: "mdi-home", to: { path: "/a" } },
    ];
    },
  },
};
