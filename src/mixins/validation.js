const REQUIRED = "required";
const EMAIL = "email";
const CONFIRMED = "confirmed";
const MAX = "max";
const MIN = "min";

export default {
  methods: {
    validation(label, rules) {
      var index;

      if (typeof rules == "string") {
        rules = rules.split("|");
      }

      if ((index = rules.indexOf(REQUIRED)) != -1) {
        rules[index] = (v) => !!v || this.$t(`validation.${REQUIRED}`, { label });
      }

      if ((index = rules.indexOf(EMAIL)) != -1) {
        rules[index] = (v) => /.+@.+\..+/.test(v) || this.$t(`validation.${EMAIL}`, { label });
      }

      index = rules.findIndex((v) => typeof v == "string" && v.search(CONFIRMED) === 0);
      if (index != -1) {
        const confirmed = rules[index]
          .substr(rules[index].search(":") + 1)
          .split(".")
          .reduce((v, c) => v?.[c], this);
        rules[index] = (v) => v == confirmed || this.$t(`validation.${CONFIRMED}`, { label });
      }

      index = rules.findIndex((v) => typeof v == "string" && v.search(MAX) === 0);
      if (index != -1) {
        const data = { label, max: rules[index].substr(rules[index].search(":") + 1) };
        rules[index] = (v) => {
          if (Array.isArray(v)) {
            return v.length <= data.max || this.$t(`validation.${MAX}.array`, data);
          }
          if (typeof v == "string") {
            return v.length <= data.max || this.$t(`validation.${MAX}.string`, data);
          }
          if (typeof v == "number") {
            return v <= data.max || this.$t(`validation.${MAX}.numeric`, data);
          }
          return "";
        };
      }

      index = rules.findIndex((v) => typeof v == "string" && v.search(MIN) === 0);
      if (index != -1) {
        const data = { label, min: rules[index].substr(rules[index].search(":") + 1) };
        rules[index] = (v) => {
          if (Array.isArray(v)) {
            return v.length >= data.min || this.$t(`validation.${MIN}.array`, data);
          }
          if (typeof v == "string") {
            return v.length >= data.min || this.$t(`validation.${MIN}.string`, data);
          }
          if (typeof v == "number") {
            return v >= data.min || this.$t(`validation.${MIN}.numeric`, data);
          }
          return "";
        };
      }

      return rules;
    },
  },
};
