<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title class="justify-center">{{ $t("Register") }}</v-card-title>
      <v-col>
        <v-text-field
          v-model="formData.id"
          :rules="validation($t('Email / Username'), 'required|min:8')"
          :label="$t('Email / Username')"
          :disabled="loading"
        />
        <v-text-field
          v-model="formData.password"
          type="password"
          :rules="validation($t('Password'), 'required|min:8|max:10|confirmed:formData.passwordConfirm')"
          :label="$t('Password')"
          :disabled="loading"
        />
        <v-text-field
          v-model="formData.passwordConfirm"
          type="password"
          :rules="validation($t('Confirm Password'), 'required')"
          :label="$t('Confirm Password')"
          :disabled="loading"
        />
        <v-spacer class="py-2" />
        <v-btn block color="primary" :loading="loading" type="submit">
          {{ $t("Register") }}
        </v-btn>
      </v-col>
    </v-card>
    <v-spacer class="py-4" />
    <v-row no-gutters justify="center">
      <span>{{ $t("Already have account?") }}</span>
      &nbsp;
      <router-link :to="{ name: 'login' }">{{ $t("Login") }}</router-link>
    </v-row>
  </v-form>
</template>

<script>
import validation from "@/mixins/validation";

export default {
  mixins: [validation],
  data: () => ({
    loading: null,
    formData: {},
    password: null,
    passwordConfirm: null,
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
