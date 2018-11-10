<template>
  <div class="w-4/5 m-auto bg-default shadow-theme mt-5 p-5">
    <div class="flex justify-between p-16">
    <primary-button label='Primary Button'/>
    <secondary-button label='Secondary Button'/>
    <default-button label='Secondary Button'/>
    <inverse-button label='Inverse Button'/>
    </div>
    <horizontal-card heading='Large heading' subHeading="Lighter smaller font for subheading"/>
  </div>
</template>

<script>
import PrimaryButton from '@/components/buttons/primarybutton.vue';
import SecondaryButton from '@/components/buttons/secondarybutton.vue';
import InverseButton from '@/components/buttons/inversebutton.vue';
import DefaultButton from '@/components/buttons/flatbutton.vue';
import HorizontalCard from '@/components/horizontalcard.vue';

export default {
  name: 'home',
  components: {
    PrimaryButton,
    SecondaryButton,
    InverseButton,
    DefaultButton,
    HorizontalCard,
  },
};
</script>
