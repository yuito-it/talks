<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  image: {
    type: String,
  },
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="slidev-layout w-full h-full intro-image" :style="style" style="position:relative;">
    <slot />
  <img class="slidev-logo-bottomright" src="/static/imgs/logo.png" alt="logo" />
  </div>
</template>
