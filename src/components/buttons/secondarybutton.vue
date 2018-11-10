<template>
    <button class="flex-no-shrink bg-secondary hover:bg-secondary-darker border-secondary
                hover:border-secondary-darker text-sm border-4 text-secondary
                py-1 px-2 rounded-btn">
        {{label}}
    </button>
</template>

<script>
export default {
  name: 'SecondaryButton',
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
