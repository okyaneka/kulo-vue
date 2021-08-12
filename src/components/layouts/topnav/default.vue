<template>
  <v-app-bar dense flat>
    <v-app-bar-nav-icon v-show="collapse" @click="$emit('click:nav-icon')"></v-app-bar-nav-icon>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" v-bind="attrs" icon> <v-icon>mdi-bell</v-icon></v-btn>
      </template>
    </v-menu>
    <v-menu min-width="224" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" v-bind="attrs" icon> <v-icon>mdi-dots-vertical</v-icon></v-btn>
      </template>
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-content>
            {{ $t("Profile") }}
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="logout">
          <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
          <v-list-item-content>{{ $t("Logout") }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    collapse: Boolean,
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
