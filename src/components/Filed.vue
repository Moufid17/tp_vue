<script setup>
import { ref } from 'vue'
const type = ref("input")

const props = defineProps({
  name: {
    type: string,
  },
})

</script>

<template>
  <slot :as="type" :name="name"/>
</template>

<style scoped>

</style>
