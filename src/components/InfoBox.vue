<script setup>
  defineProps({
    image: String,
    title: String,
    date: String,
    location: String    
  })
</script>

<template>
  <div class="event">
    <div>
      <img :src="image">
    </div>
    <div class="event-info">
      <h4 class="title">{{ title }}</h4>
      <p class="date">{{ date }}</p>
      <p class="location">{{ location }}</p>
    </div>
  </div>
</template>

<style scoped>
  .event {
    margin: 0;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    
    img {
      width: 100%;
    }

    .event-info {
      .title {
        font-weight: 600;
        line-height: 18px;
        margin: 12px 0;
      }

      .date {
        color: #7848F4;
        font-weight: 500;
        margin-bottom: 12px;
        font-size: 11px;
      }

      .location {
        font-size: 13px;
        color: #7E7E7E;
      }
    }
  }
</style>