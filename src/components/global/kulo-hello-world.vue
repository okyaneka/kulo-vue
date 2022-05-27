<template>
  <v-row>
    <v-col>
      <div>
        <v-img :src="require('@/assets/logo.svg')" contain height="200" />
      </div>
      <div class="text-h1 text-center">
        {{ $t('hello_world') }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
