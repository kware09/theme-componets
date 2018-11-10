<template>
  <div class="w-4/5 m-auto bg-default shadow mt-5 h-screen">
    <div class="flex justify-between p-16">
    <primary-button label='Primary Button'/>
    <secondary-button label='Secondary Button'/>
    <default-button label='Secondary Button'/>
    <inverse-button label='Inverse Button'/>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/buttons/primarybutton.vue';
import SecondaryButton from '@/components/buttons/secondarybutton.vue';
import InverseButton from '@/components/buttons/inversebutton.vue';
import DefaultButton from '@/components/buttons/flatbutton.vue';

export default {
  name: 'home',
  components: {
    PrimaryButton,
    SecondaryButton,
    InverseButton,
    DefaultButton,
  },
};
</script>
