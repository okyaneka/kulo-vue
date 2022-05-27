<template>
  <kulo-layout-public :loading="loading">
    <v-col cols="12">
      <kulo-hello-world />
    </v-col>

    <v-col class="text-center" cols="12">
      <span>Home</span> |
      <router-link to="/about">About</router-link>
    </v-col>
  </kulo-layout-public>
</template>

<script>
// @ is an alias to /src
import KuloLayoutPublic from '@/components/layouts/kulo-layout-public.vue';
import KuloHelloWorld from '@/components/global/kulo-hello-world.vue';

export default {
  components: {
    KuloLayoutPublic,
    KuloHelloWorld,
  },
  data: () => ({
    loading: null,
  }),
  mounted() {
    // this.loading = true;
    // this.$emit('loading-init');
    // setTimeout(() => {
    //   this.loading = false;
    // }, 1000);
  },
};
</script>
