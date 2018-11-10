<template>
    <button class="flex-no-shrink bg-inverse hover:bg-inverse-darker
                    border-inverse hover:border-inverse-darker text-sm border-4 text-inverse
                    py-1 px-2 rounded-btn">
        {{label}}
    </button>
</template>

<script>
export default {
  name: 'InverseButton',
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
