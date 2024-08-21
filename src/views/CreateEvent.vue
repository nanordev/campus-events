<script setup>
import Header from '@/components/general/Header.vue'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="body">
    <Header />

    <div class="main-sections">
      <div class="section-one">
        <p>Create Event</p>
        <div class="form-one">
          <div class="label-input">
            <label>Event Title</label>
            <input type="text" placeholder="Enter event title" />
          </div>
          <div class="label-input">
            <label>Event Venue</label>
            <input type="text" placeholder="Enter event venue" />
          </div>
          <div class="start-end-time">
            <div class="label-input">
              <label>Start time</label>
              <input type="time" />
            </div>
            <div class="label-input">
              <label>End time</label>
              <input type="time" />
            </div>
          </div>
          <div class="start-end-date">
            <div class="label-input">
              <label>Start date</label>
              <input type="date" />
            </div>
            <div class="label-input">
              <label>End date</label>
              <input type="date" />
            </div>
          </div>
        </div>
      </div>
      <div class="section-two">
        <p>Event Description</p>
        <div class="form-two">
          <div class="label-input">
            <label>Event Image</label>
            <input type="file" placeholder="" class="image-input" />
          </div>

          <div class="label-input">
            <label>Event Description</label>
            <textarea type="text" placeholder="Type here..." />
          </div>
          <button>Create Event</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  background-color: rgba(248, 248, 250, 1);
  min-height: 100vh;
  /* width: 100%; */

  .main-sections {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 816px;
    padding: 30px 16px 40px;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;

    p {
      text-align: center;
      font-size: 36px;
      font-weight: 700;
    }

    .section-one {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      /* height: 50vh; */

      .form-one {
        display: flex;
        flex-direction: column;
        gap: 20px;

        label {
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }

        input {
          height: 46px;
          border: none;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 1);
          padding-left: 10px;
          padding-right: 10px;
          width: 100%;
          /* max-width: 816px; */
        }
        input::placeholder {
          font-size: 12px;
          font-weight: 400;
          color: rgba(104, 124, 148, 1);
        }

        .start-end-time,
        .start-end-date {
          display: flex;
          justify-content: space-between;
          width: 100%;
          gap: 28px;

          .label-input {
            width: 100%;

            input {
              width: 100%;
              background-color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
    .section-two {
      /* height: 50vh; */
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;

      .form-two {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .label-input {
          display: flex;
          flex-direction: column;
          gap: 7px;

          label {
            font-size: 12px;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }

          .image-input {
            height: 254px;
            background-color: rgba(236, 236, 236, 1);
            border: none;
            border-radius: 15px;
            padding: 10px;

            /* input[type='file']::placeholder {
              display: none;
            } */
          }

          textarea {
            height: 173px;
            border: none;
            border-radius: 5px;
            padding: 10px 10px;
            width: 100%;
            align-content: start;
            // vertical-align: top;
          }

          textarea::placeholder {
            font-size: 12px;
            font-weight: 400;
            color: rgba(104, 124, 148, 1);
            // position: absolute;
            // top: 10px;
          }
        }

        button {
          background-color: rgba(120, 72, 244, 1);
          border: none;
          border-radius: 5px;
          height: 49px;
          font-size: 16px;
          width: 100%;
          font-weight: 400;
          text-align: center;
          color: rgba(255, 255, 255, 1);
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
