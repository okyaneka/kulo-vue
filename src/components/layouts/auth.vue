<template>
  <v-row no-gutters>
    <sidenav-default color="primary" v-model="drawer" :collapse="collapse" />
    <v-main class="overflow-y-auto" style="height: 100vh">
      <topnav-default @click:nav-icon="drawer = !drawer" :collapse="collapse" />
      <v-container fluid class="overflow-y-auto" style="height: calc(100% - 48px)">
        <slot class="pa-4" />
      </v-container>
    </v-main>
  </v-row>
</template>

<script>
import menu from "@/mixins/menu";
import SidenavDefault from "./sidenav/default.vue";
import TopnavDefault from "./topnav/default.vue";

export default {
  mixins: [menu],
  components: { SidenavDefault, TopnavDefault },
  data: () => ({
    drawer: null,
    mini: null,
    selectedItem: null,
  }),
  computed: {
    collapse() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
  },
  mounted() {
    this.selectedItem = this.menuItems.findIndex((v) => {
      return v.to.path == this.$route.path;
    });
  },
  methods: {},
};
</script>
