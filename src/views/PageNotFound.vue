<script setup>
import Header from '@/components/general/Header.vue'
import Footer from '@/components/general/Footer.vue'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="body">
    <Header />
    <div class="main-section">
      <div class="pnf-container">
        <img src="/images/page-not-found.png" alt="Page Not Found" />
      </div>

      <p class="oops-paragraph">Oops!</p>

      <p class="message-paragraph">We can&apos;t seem to find the page you are looking for</p>

      <button>Back to Homepage</button>

      <p class="follow-us-paragraph">Follow us on</p>

      <div class="social-media-links">
        <div class="link">
          <a href=""><img src="/images/instagram-icon.png" alt="" /></a>
        </div>

        <div class="link">
          <a href=""><img src="/images/facebook-icon.png" alt="" /></a>
        </div>

        <div class="link">
          <a href=""><img src="/images/linkedin-icon.png" alt="" /></a>
        </div>

        <div class="link">
          <a href=""><img src="/images/twitter-icon.png" alt="" /></a>
        </div>

        <div class="link">
          <a href=""><img src="/images/youtube-icon.png" alt="" /></a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.body {
  background-color: rgba(248, 248, 250, 1);
  min-height: 100vh;

  .main-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 722px;
    padding: 50px 16px;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 30px;
    align-items: center;

    .pnf-container {
      width: 100%;
      max-width: 722px;
    }

    .oops-paragraph {
      font-size: 36px;
      font-weight: 700;
      color: rgba(0, 0, 0, 1);
      margin-top: 50px;
    }

    .message-paragraph {
      font-family: inter;
      font-size: 24px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 5px;
    }

    button {
      font-family: inter;
      background-color: rgba(120, 72, 244, 1);
      color: rgba(255, 255, 255, 1);
      border: none;
      height: 45px;
      padding: 0 20px;
      border-radius: 30px;
      font-size: 18px;
      font-weight: 700;
      margin-top: 50px;
    }

    .follow-us-paragraph {
      font-family: inter;
      font-size: 18px;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      margin-top: 50px;
    }

    .social-media-links {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 405px;

      .link {
        height: 65px;
        width: 65px;
        display: flex;
        border-radius: 20px;
        background-color: rgba(120, 72, 244, 0.1);
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
