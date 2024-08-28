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
      <div class="not-found-text">
        <p class="title">Oops!</p>

        <p class="subtitle">We can&apos;t seem to find the page you are looking for</p>
      </div>

      <button>Back to Homepage</button>

      <div class="socials-section">
        <p class="title">Follow us on</p>

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
    </div>

    <Footer />
  </div>
</template>

<style scoped lang="scss">
.body {
  background-color: rgba(248, 248, 250, 1);
  min-height: 100vh;

  .main-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 722px;
    padding: 100px 16px 118px;
    gap: 0;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

    .pnf-container {
      width: 100%;
      max-width: 722px;
      padding: 0 16px;

      img {
        width: 100%;
      }
    }
    .not-found-text {
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;

      .title {
        font-size: 36px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      .subtitle {
        font-family: inter;
        font-size: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }
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
      margin-top: 61px;
    }

    .socials-section {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      text-align: center;
      gap: 25px;

      .title {
        font-family: inter;
        font-size: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }

      .social-media-links {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;

        .link {
          height: 45px;
          width: 45px;
          display: flex;
          border-radius: 10px;
          background-color: rgba(120, 72, 244, 0.1);
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .not-found-text {
    margin-top: 62px;
  }

  .socials-section {
    margin-top: 68px;

    .social-media-links {
      .link {
        height: 65px;
        width: 65px;
        border-radius: 20px;
      }
    }
  }
}
</style>
