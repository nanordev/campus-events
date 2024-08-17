<script setup></script>

<template>
  <div class="main-sections">
    <section class="image-section">
      <div class="image-side-content">
        <p class="welcome-message">Welcome back</p>
        <p class="sub-message">To keep connected with us, provide us with your information</p>
        <button class="signin-button">Signin</button>
      </div>
    </section>
    <section class="form-section">
      <div class="form-section-content">
        <p class="heading">Event <span>Hive</span></p>
        <p class="big-heading">Sign Up to Event Hive</p>
        <form>
          <div class="label-input-container">
            <label> YOUR NAME </label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div class="label-input-container">
            <label> PASSWORD </label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div class="label-input-container">
            <label> CONFIRM PASSWORD </label>
            <input type="password" placeholder="Enter your password" />
          </div>
        </form>
        <button class="signin-button">Sign In</button>
        <p class="or">Or</p>
        <button class="signup-with-google">
          <img src="/images/google-logo.png" />
          Sign up with Google
        </button>
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
    padding-top: 50px;
    // padding-bottom: 10px;

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
        margin-bottom: 5px;
        margin-top: 30px;
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
        .label-input-container {
          margin-top: 25px;
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
        margin-top: 30px;
        margin-bottom: 30px;
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
    background-image: url('/images/signup-page-image.png');
    padding: 50px;
    width: 45%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image-side-content {
      color: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 40px;

      .welcome-message {
        font-size: 40px;
        font-weight: 700;
      }
      .sub-message {
        font-size: 16px;
        font-weight: 400;
      }

      .signin-button {
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
