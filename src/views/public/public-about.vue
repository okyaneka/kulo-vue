<template>
  <kulo-layout-public :loading="loading">
    <v-col cols="12">
      <div class="text-h1 text-center">{{ $t('about') }}</div>
    </v-col>

    <v-col class="text-center" cols="12">
      <router-link to="/">Home</router-link> |
      <span>About</span>
    </v-col>
  </kulo-layout-public>
</template>

<script>
import KuloLayoutPublic from '@/components/layouts/kulo-layout-public.vue';

export default {
  components: { KuloLayoutPublic },
  data: () => ({
    loading: null,
  }),
  mounted() {
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1000);
  },
};
</script>
