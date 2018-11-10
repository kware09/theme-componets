<template>
    <button class="flex-no-shrink bg-primary hover:bg-primary-darker border-primary
                    hover:border-primary-darker text-sm border-4 text-primary py-1
                    px-2 rounded-btn">
        {{label}}
    </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
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
