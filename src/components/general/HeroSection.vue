<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  subtitles: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="hero-section" :style="{ backgroundImage: `url($image)` }">
    <div class="overlay"></div>
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ subtitles }}</p>
      <slot></slot>  
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 21%; 
  position: relative;
  text-align: center;
}


@media screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>