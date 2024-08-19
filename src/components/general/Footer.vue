<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue';

const selectedLanguage = ref('English')

const languages = ['English', 'French', 'Dutch']

const selectLanguage = (language) => {
  selectedLanguage.value = language
}

</script>

<template>
  <footer>
    <div class="upper-footer">
      <Logo style="color: white;"/>

      <div class="subscription">
        <input type="email" placeholder="Enter your mail">
        <button>Subscribe</button>
      </div>

      <nav>
      <RouterLink to="/" class="links" >Home</RouterLink>
      <RouterLink to="/about" class="links">About</RouterLink>
      <RouterLink to="/services" class="links">Services</RouterLink>
      <RouterLink to="/get-in-touch" class="links">Get-in-touch</RouterLink>
      <RouterLink to="/faqs" class="links">FAQs</RouterLink>
      </nav>
    </div>
    
    <hr>

    <div class="lower-footer">
      <div class="languages-div">
        <button
          v-for="language in languages" :key="language"
          :class="{'selected': selectedLanguage === language}"
          @click="selectLanguage(language)"
        >{{ language }}</button>
      </div>

      <div class="social-media">
        <img src="/public/icons/LinkedinLogo.png" alt="linkedinLogo">
        <img src="/public/icons/InstagramLogo.png" alt="InstagramLogo" >
        <img src="/public/icons/FacebookLogo.png" alt="FacebookLogo" >
      </div>

      <h6>
        Non Copyrighted &copy; 2023 Upload by EventHive
      </h6>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #10107B;
  color: white;

  
  .upper-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    .subscription {
      margin: 15px 0 20px 0;

      input {
      font-size: 10px;
      padding: 12px 20px 12px 10px;
      width: 250px;
      border-radius: 4px;
      border: none;
      margin-right: 8px;
      }

      button {
        background-color: #7848F4;
        color: white;
        border: none;
        padding: 9px 25px;
        border-radius: 3px;
      }
    }

    nav {
      display: flex;
      gap: 40px;
      margin: 20px;

      .links {
        color: white;
        text-decoration: none;
        font-size: 12px;
      }
    }
  }

  

  hr {
    margin: 0 50px;
  }

  .lower-footer {
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;

    .social-media {
      display: flex;
      gap: 10px;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .languages-div {
      display: flex;

      button {
        font-size: 9px;
        padding: 7px 14px;
        border-radius: 4px;
        border: none;
        background: none;
        color: white;
        cursor: pointer;
      }

      .selected {
        background-color: #7848F4;
        color: white;
      }
    }
  }
}

</style>