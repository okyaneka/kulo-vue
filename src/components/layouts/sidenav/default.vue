<template>
  <v-navigation-drawer
    v-model="drawer"
    :color="background"
    :dark="dark"
    :permanent="!collapse"
    :absolute="collapse"
    :temporary="collapse"
    :mini-variant="expand && !collapse"
  >
    <v-list-item class="pa-2">
      <v-list-item-avatar>
        <v-img src="/favicon.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-title class="text-h6">
        {{ title }}
      </v-list-item-title>
      <v-list-item-content> </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" :dark="dark" :color="color">
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
    <template v-if="!collapse" slot="append">
      <v-divider />
      <v-list nav dense>
        <v-list-item @click="expand = !expand">
          <v-list-item-content>
            <v-icon small>
              {{ !expand ? "mdi-arrow-expand-left" : "mdi-arrow-expand-right" }}
            </v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import menu from "@/mixins/menu";

export default {
  mixins: [menu],
  model: {
    prop: "model",
    event: "change",
  },
  props: {
    model: Boolean,
    collapse: Boolean,
    color: String,
    background: String,
    dark: Boolean,
  },
  data: () => ({
    expand: null,
    selectedItem: null,
  }),
  computed: {
    title() {
      return process.env.VUE_APP_TITLE;
    },
    drawer: {
      get() {
        return this.model;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
  mounted() {
    this.selectedItem = this.menuItems.findIndex((v) => {
      return v.to.path == this.$route.path;
    });
  },
};
</script>

<style></style>
