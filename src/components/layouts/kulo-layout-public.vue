<template>
  <v-container class="fill-height">
    <v-row v-if="loading" class="fill-height" align="center" justify="center">
      <v-progress-circular class="d-block" size="64" width="4" indeterminate color="primary" />
    </v-row>
    <v-row v-else>
      <slot />
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
  data: () => ({}),
  mounted() {},
};
</script>
