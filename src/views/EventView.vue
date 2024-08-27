<script setup>
import Header from '@/components/general/Header.vue';
import InfoBox from '@/components/general/InfoBox.vue';
import Footer from '@/components/general/Footer.vue';

const events = [
  {
    image: '/public/landing_images/Event.png',
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere'
  },
  {
    image: '/public/landing_images/Event2.png',
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere'
  },
  {
    image: '/public/landing_images/Event2.png',
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere'
  },
  {
    image: '/public/landing_images/Event.png',
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere'
  },
  {
    image: '/public/landing_images/Event.png',
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere'
  },
  {
    image: '/public/landing_images/Event2.png',
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere'
  }
]
</script>

<template>
  <body>
    <Header />
    <main>
      <section class="hero-section">
        <div class="overlay"></div>
        <button class="back-btn">&lt; Back</button>
        <div class="hero-layout">
          <div class="left-section">
            <h1 class="hero-title">Dream world wide in Jakarta</h1>
            <h2 class="hero-subtitle">IIIT Sonepat</h2>
            <p class="hero-content">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
            </p>
            <p class="view-map"><img src="/public/icons/MapPin.png" width="15px"> View Map</p>
          </div>
  
          <div class="right-section">
            <h2>Date & Time</h2>
            <p class="date">Saturdat, March 18 2023, 9.30PM</p>
            <p class="add">Add to calendar</p>
            <button class="book-btn">Book now</button>
            <button class="promoter-btn">Program Promoter</button>
            <p class="no-refund">No Refunds</p>
          </div>
        </div>
      </section>

      <section class="event-details">
        <div class="event-description">
          <div>
            <h2>Description</h2>
            <p>
              DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. 

              <br><br>

              DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
            </p>
          </div>

          <div>
            <h2>Hours</h2>
            <p class="smaller-text">Weekdays hour: <span>7PM - 10PM</span></p>
            <p class="smaller-text">Sunday hour: <span>7PM - 10PM</span></p>
          </div>

          <div>
            <h2>Organizer Contact</h2>
            <p class="smaller-text">Please go to <span>www.sneakypeeks.com</span> and refer the FAQ section for more detail</p>
          </div>
        </div>


        <div class="event-map">
          <div>
            <h2>Event location</h2>
            <img src="/public/landing_images/map.png" alt="map" class="e-map">

            <h3 class="dream">Dream world wide in jakarta</h3>

            <p>
              Dummy location generation model by RSU ... Our approach generates more realistic dummy locations
            </p>
          </div>

          <div class="tags">
            <h2>Tag</h2>
            <button class="tags">Indonesia event</button>
            <button class="tags">Jaskaran event</button>
            <button class="tags">UI</button>
            <button class="tags">Jaskaran event</button>
            <button class="tags">Seminar</button>
            <button class="tags">Jaskaran event</button>
          </div>

          <div>
            <h2>Share with friends</h2>
            <img src="/public/icons/Facebook.png" class="handles">
            <img src="/public/icons/WhatsApp.png" class="handles">
            <img src="/public/icons/Linkedin.png" class="handles">
            <img src="/public/icons/Twitter.png" class="handles">
          </div>
        </div>
      </section>
  
      <section class="events-section">
        <h2 class="events-title">Other events you may like</h2>
        <div class="event-grid">
          <InfoBox 
            v-for="(event, index) in events"
            :key="index"
            :image="event.image"
            :title="event.title"
            :date="event.date"
            :location="event.location"
          />
        </div>
      </section>
    </main>
    <Footer />
  </body>
</template>

<style scoped>
body {
  background-color: #f8f8fa;

  .hero-section {
    background-image: url(/public/landing_images/EventBanner.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    position: relative;
    margin: 0 2%;
  
    .overlay {
      position: absolute;
      top: 0.4vw;
      left: 0;
      width: 99.99%;
      height: 97.9%;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5); /* Darken overlay */
      z-index: 1;
    }
  
    .back-btn {
      display: block;
      background-color: #7848F4;
      color: white;
      position: absolute;
      left: 5%;
      top: 5%;
      border-radius: 4px;
      border: none;
      padding: 0.8vw 1.2vw;
      font-size: 1.3vw;
      z-index: 2;
    }
  
    .hero-layout {
      display: flex;
      justify-content: space-between;
      align-items: start;
      width: 100%;
      padding-top: 3%;
      
      .left-section, .right-section {
        width: 50%;
        z-index: 2;
      }
  
      .left-section {
        display: flex;
        flex-direction: column;
        margin: 5%;
  
        .hero-title {
          font-size: 4vw;
          font-weight: bold;
          margin-bottom: 2vw;
          line-height: 5vw;
        }
  
        .hero-subtitle {
          font-size: 3vw;
          font-weight: bold;
          margin-bottom: 1vw;
        }
  
        .hero-content {
          font-size: 1.3vw;
          margin-bottom: 1vw;
        }
  
        .view-map {
          font-size: 1.4vw;
          display: flex;
          align-items: center;
  
          img {
            margin-right: 5px;
          }
        }
      }
  
      .right-section {
        background-color: white;
        color: black;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        width: 30%;
        max-width: 30vw;
        height: 25vw;
        padding: 2%;
        margin: 5%;
        margin-right: 10%;
        
  
        h2 {
          font-size: 1.8vw;
          font-weight: bold;
          margin-bottom: 1vw;
        }
  
        p {
          color: #7E7E7E;
          font-size: 1.1vw;
          font-weight: 500;
          margin-bottom: 1vw;
        }
  
        .add {
          color: #7848F4;
        }
  
        button {
          font-size: 1vw;
          padding: 1vw 0;
          border-radius: 4px;
          border: none;
          margin-bottom: 4%;
          background-color: #C5C5C5;
          color: white;
        }
  
        .book-btn {
          background-color: #7848F4;
        }
        
        .no-refund {
          margin: auto;
          padding-top: 0.8vw;
        }
      }
    }
  }
  
  .events-section {
    margin: 15% 10% 10px 10%;

    .events-title {
      font-weight: bold;
      margin-bottom: 2vw;
      color: black;
    }
  
    .event-grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }

  .event-details {
    margin: 4% 10%;
    display: flex;
    justify-content: space-between;
    align-items: top;
    gap: 8vw;

  

    .event-description, .event-map {
      width: 50%;

      h2 {
        font-weight: bold;
        color: black;
        margin-bottom: 1vw;
      }

      .dream {
          font-size: 20px;
          font-weight: 500;
          color: black;
          margin-bottom: 1vw;
        }

      p {
        font-size: 15px;
        margin-bottom: 2.3vw;
        font-weight: 400;
      }

      .smaller-text {
        font-size: 14px;
      }

      button {
        background-color: #e4e4e9;
        color: black;
        font-weight: 550;
        padding: 5px 8px;
        border: none;
        border-radius: 4px;
        margin: 0 10px 10px 0 ;
      }

      .e-map {
        width: 100%;
        margin-bottom: 2vw;
      }

      .tags {
        margin-bottom: 2vw;
      }

      .handles {
        margin: 20px 15px 0 0;
      }

      span {
        color: #7848F4;
        font-weight: bold;
      }
    }
  }
  
  @media screen and (min-width: 1024px) {
    .event-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  
  @media screen and (max-width: 481px) {
    .event-grid {
      grid-template-columns: 1fr;
    }
    .event-details {
      align-items: center;
      flex-direction: column;
      
      .event-description, .event-map {
        width: 100%;
      }
    }
  }
}
</style>