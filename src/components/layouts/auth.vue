<template>
  <v-row no-gutters>
    <v-navigation-drawer
      v-model="drawer"
      color="white"
      :permanent="!collapse"
      :absolute="collapse"
      :temporary="collapse"
      :mini-variant="mini"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/favicon.png"></v-img>
        </v-list-item-avatar>

          <v-list-item-title class="text-h6">
            {{ title }}
          </v-list-item-title>
        <v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, index) in menuItems" :key="index" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template slot="append">
        <v-divider />
        <v-list nav dense>
          <v-list-item @click="mini = !mini">
            <v-list-item-content>
              <v-icon small>
                {{ !mini ? "mdi-arrow-expand-left" : "mdi-arrow-expand-right" }}
              </v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main class="overflow-y-auto" style="height: 100vh">
      <v-app-bar dense flat>
        <v-app-bar-nav-icon v-show="collapse" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer />
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" icon> <v-icon>$menu</v-icon></v-btn>
          </template>
          <v-list dense>
            <v-list-item @click="logout">
              <v-list-item-title>{{ $t("Logout") }}</v-list-item-title>
              <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-container fluid class="overflow-y-auto" style="height: calc(100% - 48px)">
        <slot class="pa-4" />
      </v-container>
    </v-main>
  </v-row>
</template>

<script>
import menu from "@/mixins/menu";

export default {
  mixins: [menu],
  data: () => ({
    drawer: null,
    mini: null,
    selectedItem: null,
  }),
  computed: {
    title() {
      return process.env.VUE_APP_TITLE;
    },
    collapse() {
      console.log(this.$vuetify.breakpoint.mdAndUp);
      return !this.$vuetify.breakpoint.mdAndUp;
    },
  },
  mounted() {
    this.selectedItem = this.menuItems.findIndex((v) => {
      return v.to.path == this.$route.path;
    });
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>
