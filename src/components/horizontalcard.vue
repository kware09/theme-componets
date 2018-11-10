<template>
        <div class="w-4/5 m-auto p-5 border-secondary bg-default
                    rounded-btn shadow-theme border flex
                    hover:bg-default-darker hover:shadow-md hover: cursor-pointer">
            <div>
                <p class="text-lg text-default">{{heading}}</p>
                <p class="text-sm text-default-soft">{{subHeading}}</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'HorizontalCard',
  props: {
    heading: {
      type: String,
    },
    subHeading: {
      type: String,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
