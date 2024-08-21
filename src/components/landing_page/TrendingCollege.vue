<script setup>
  defineProps({
    image: String,
    college: String,
    location: String
  })

</script>

<template>
  <div class="trendz">
    <img :src="image" alt="college image">
    <h4>{{ college }}</h4>
    <div>
      <p>{{ location }}</p>
      <img src="/public/icons/Button.png">
    </div>
  </div>
</template>

<style scoped>
  .trendz {
    background-color: white;
    border-radius: 8px;

    img {
      width: 100%;
    }

    h4 {
      font-weight: bold;
      color: #131315;
    }

    h4, div {
      padding: 0 10px;
      margin-bottom: 20px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 10px;
        font-weight: bold;
        color: black;
      }

      img {
        width: 30px;
      }
    }

  }
</style>