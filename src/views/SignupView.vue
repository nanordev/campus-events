<script setup></script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />
  </head>
  <div class="body">
    <p class="heading-1">Event <span>Hive</span></p>
    <div class="main-sections">
      <section class="image-section">
        <!-- <img src="/images/signin-page-image.png" height="675px" width="549px" /> -->
        <div class="image-side-content">
          <p class="hello-message">Welcome back</p>
          <p class="sub-message">To keep connected with us, provide us with your information</p>
          <button class="signin-button">Signin</button>
        </div>
      </section>
      <section class="form-section">
        <div class="form-section-content">
          <p class="heading">Event <span>Hive</span></p>
          <p class="big-heading">Sign Up to Event Hive</p>
          <form>
            <label> YOUR NAME </label>
            <input type="text" placeholder="Enter your name" />
            <label> PASSWORD </label>
            <input type="password" placeholder="Enter your password" />
            <label> CONFIRM PASSWORD </label>
            <input type="password" placeholder="Enter your password" />
          </form>
          <button class="signup-button">Sign Up</button>
          <p class="or">Or</p>
          <button class="signup-with-google">
            <img src="/images/google-logo.png" />
            Sign up with Google
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  background-color: rgba(248, 248, 250, 1);

  .heading-1 {
    font-size: 24px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    display: none;

    span {
      font-size: 24px;
      font-weight: 700;
      color: rgba(120, 72, 244, 1);
      display: none;
    }
  }

  .main-sections {
    font-family: 'Open Sans';
    display: flex;
    height: 100vh;

    .form-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 60%;
      height: 100vh;
      background-color: rgba(248, 248, 250, 1);
      // padding-top: 65px;
      // padding-bottom: 100px;
      // height: 675px;
      // max-width: 800px;

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
          // margin-top: 30px;
        }

        .big-heading {
          font-size: 36px;
          margin-bottom: 20px;
          margin-top: 20px;
        }

        span {
          font-size: 24px;
          font-weight: 700;
          color: rgba(120, 72, 244, 1);
        }

        form {
          text-align: left;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 5px;

          label {
            font-size: 16px;
            color: rgba(0, 0, 0, 1);
            font-weight: 400;
            margin-top: 10px;
          }

          input {
            border: none;
            background-color: rgba(255, 255, 255, 1);
            width: 100%;
            height: 46px;
            padding-left: 10px;
            border-radius: 5px;
            // margin-top: 10px;

            &::placeholder {
              font-size: 12px;
              color: rgba(104, 124, 148, 1);
              font-weight: 400;
            }
          }
        }
        .signup-button {
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
          margin-top: 20px;
          margin-bottom: 20px;
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
      background-size: cover;
      background-repeat: no-repeat;
      padding: 50px;
      width: 40%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
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
}

@media only screen and (max-width: 480px) {
  .body {
    padding-top: 20px;
    padding-bottom: 30px;

    .heading-1 {
      font-size: 24px;
      font-weight: 700;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      display: block;
      margin-bottom: 10px;

      span {
        font-size: 24px;
        font-weight: 700;
        color: rgba(120, 72, 244, 1);
        display: contents;
      }
    }

    .main-sections {
      font-family: 'Open Sans';
      display: flex;
      flex-direction: column;
      height: 100vh;
      // margin-top: 10px;
      // padding-bottom: 10px;

      .image-section {
        background-image: url('/images/signup-page-image.png');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 50px;
        width: 100%;
        background-position: center;
        height: 35vh;
        margin: 0;
      }

      .form-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 65vh;
        padding-top: 0;
        padding-bottom: 20px;

        .form-section-content {
          width: 100%;
          height: 100%;
          max-width: 320px;
          max-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .heading {
            display: none;
          }

          .big-heading {
            font-size: 30px;
            margin-bottom: 10px;
          }

          form {
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 10px;

            label {
              font-size: 16px;
              color: rgba(0, 0, 0, 1);
              font-weight: 400;
            }
          }

          .or {
            color: rgb(126, 126, 126, 1);
            font-size: 16px;
            font-weight: 400;
            margin-top: 15px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
