<script setup lang="ts">
import { reactive, ref } from 'vue';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import Register from './Register.vue';

const state = reactive({
  name: '',
  email: '',
  password: '',
  accept: null,
});

const rules = {
  name: { required },
  email: { required, email },
  password: { required },
  accept: { required },
};

const submitted = ref(false);
const showMessage = ref(false);
const date = ref();

const v$ = useVuelidate(rules, state);

const resetForm = () => {
  state.name = '';
  state.email = '';
  state.password = '';
  // state.date = null;
  state.accept = null;
  submitted.value = false;
};

const toggleDialog = () => {
  showMessage.value = !showMessage.value;

  if (!showMessage.value) resetForm();
};

const handleSubmit = (isFormValid: boolean) => {
  submitted.value = true;

  if (!isFormValid) return;

  toggleDialog();
};
</script>

<template>
  <Story title="Register Molecules" :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Basic">
      <Register />
      <template #controls />
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.form-demo {
  .card {
    width: 100%;

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
