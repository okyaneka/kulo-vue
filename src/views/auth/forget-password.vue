<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title class="justify-center">{{ $t("Forget password") }}</v-card-title>
      <v-col>
        <v-text-field
          v-model="formData.id"
          :rules="validation($t('Email address'), 'required|email')"
          :label="$t('Email address')"
          :disabled="loading"
        />
        <v-spacer class="py-2" />
        <v-btn block color="primary" :loading="loading" type="submit">
          {{ $t("Request reset password") }}
        </v-btn>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import validation from "@/mixins/validation";

export default {
  mixins: [validation],
  data: () => ({
    loading: null,
    formData: {},
  }),
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
  },
};
</script>
