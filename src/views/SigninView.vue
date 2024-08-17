<script setup></script>

<template>
  <div class="main-sections">
    <section class="form-section">
      <div class="form-section-content">
        <p class="heading">Event <span>Hive</span></p>
        <p class="big-heading">Sign In to Event Hive</p>
        <form>
          <label> YOUR EMAIL </label> <br />
          <input type="email" placeholder="Enter your mail" />
          <br />
          <div class="password-container">
            <label> PASSWORD </label>
            <a>Forgot your password?</a>
          </div>
          <input type="password" placeholder="Enter your password" />
        </form>
        <button class="signin-button">Sign In</button>
        <p class="or">Or</p>
        <button class="signup-with-google">
          <img src="/images/google-logo.png" />
          Sign up with Google
        </button>
      </div>
    </section>
    <section class="image-section">
      <!-- <img src="/images/signin-page-image.png" height="675px" width="549px" /> -->
      <div class="image-side-content">
        <p class="hello-message">Hello Friend</p>
        <p class="sub-message">To keep connected with us, provide us with your information</p>
        <button class="signup-button">Signup</button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-sections {
  display: flex;
  background-color: rgba(248, 248, 250, 1);

  .form-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    height: 675px;
    max-width: 800px;

    text-align: center;

    .form-section-content {
      width: 100%;
      max-width: 578px;
      max-height: 708px;
      display: flex;
      flex-direction: column;
      // align-items: center;

      .heading,
      .big-heading {
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      .heading {
        font-size: 24px;
      }

      .big-heading {
        font-size: 36px;
        margin-bottom: 40px;
        margin-top: 35px;
      }

      span {
        font-size: 24px;
        font-weight: 700;
        color: rgba(120, 72, 244, 1);
      }

      form {
        text-align: left;

        label {
          font-size: 16px;
          color: rgba(0, 0, 0, 1);
          font-weight: 400;
        }

        a {
          font-size: 16px;
          font-weight: 400;
          color: rgb(126, 126, 126, 1);
        }

        .password-container {
          display: flex;
          width: 100%;
          margin-top: 25px;
          justify-content: space-between;
        }

        input {
          border: none;
          background-color: rgba(255, 255, 255, 1);
          width: 100%;
          height: 46px;
          padding-left: 10px;
          border-radius: 5px;
          margin-top: 10px;

          &::placeholder {
            font-size: 12px;
            color: rgba(104, 124, 148, 1);
            font-weight: 400;
          }
        }
      }
      .signin-button {
        background-color: rgba(120, 72, 244, 1);
        color: rgba(255, 255, 255, 1);
        border: none;
        width: 100%;
        max-width: 275px;
        height: 40px;
        border-radius: 5px;
        font-weight: 400;
        margin: 30px auto 0;
      }

      .or {
        color: rgb(126, 126, 126, 1);
        font-size: 16px;
        font-weight: 400;
        margin-top: 25px;
        margin-bottom: 25px;
      }

      .signup-with-google {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 371px;
        border-radius: 5px;
        border: 1px solid rgba(224, 224, 233, 1);
        background-color: rgba(255, 255, 255, 1);
        height: 46px;
        gap: 10px;
        margin: 0 auto;
      }
    }
  }

  .image-section {
    background-image: url('/images/signin-page-image.png');
    padding: 50px;
    width: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: rgba(0, 0, 0, 0.2);

    .image-side-content {
      color: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 40px;

      .hello-message {
        font-size: 40px;
        font-weight: 700;
      }
      .sub-message {
        font-size: 16px;
        font-weight: 400;
      }

      .signup-button {
        background-color: rgba(255, 255, 255, 0.4);
        border: none;
        border-radius: 5px;
        height: 49px;
        width: 128px;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
</style>
