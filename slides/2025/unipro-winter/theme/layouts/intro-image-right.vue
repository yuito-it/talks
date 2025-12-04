<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full" style="position:relative;">
    <div class="slidev-layout default image-right my-auto" :class="props.class">
      <slot />
    </div>
    <div class="my-14 mr-14" :style="style" />
  <img class="slidev-logo-bottomright" src="/static/imgs/logo.png" alt="logo" />
  </div>
</template>
