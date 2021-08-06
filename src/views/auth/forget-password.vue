<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title class="justify-center">{{ $t("Forget password") }}</v-card-title>
      <v-col>
        <v-text-field v-model="formData.id" :label="$t('Email address')" :disabled="loading" />
        <v-btn block color="primary" :loading="loading" type="submit">
          {{ $t("Request reset password") }}
        </v-btn>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    loading: null,
    formData: {},
  }),
  methods: {
    handleSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
