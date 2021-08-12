export default {
  computed: {
    menuItems() {
      return [
        { title: this.$t("Home"), icon: "mdi-home", to: { path: "/" } },
    ];
    },
  },
};
