<template>
    <button class="flex-no-shrink bg-default hover:bg-default-darker border-primary
                   hover:border-primary-darker text-sm
                   border-2 text-default py-1 px-2 rounded-btn">
        {{label}}
    </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    label: {
      type: String,
      default: 'Label',
    },
  },
};
</script>

<style scoped>

</style>
