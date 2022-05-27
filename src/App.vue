<template>
  <v-app>
    <v-main>
      <v-row v-if="loading" class="fill-height" align="center" justify="center">
        <v-progress-circular class="d-block" size="64" width="4" indeterminate color="primary" />
      </v-row>
      <v-fade-transition v-else hide-on-leave leave-absolute>
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: null,
  }),
  mounted() {
    this.$root.$on('loading-init', () => {
      this.loading = true;
    });
    this.$root.$on('loading-end', () => {
      this.loading = false;
    });
    this.initApp();
  },
  methods: {
    async initApp() {
      this.$root.$emit('loading-init');
      await this.$store.dispatch('init-app');
      this.$root.$emit('loading-end');
    },
  },
};
</script>
