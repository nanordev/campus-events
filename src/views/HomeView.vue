<script setup>
import Header from '@/components/general/Header.vue'
import Footer from '@/components/general/Footer.vue'
import InfoBox from '@/components/general/InfoBox.vue'
import TrendingCollege from '@/components/landing_page/TrendingCollege.vue'
import LoadMore from '@/components/landing_page/LoadMore.vue'

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

const trendz = [
  {
    image: '/public/landing_images/harvard.png',
    college: 'Harvard University',
    location: 'Cambridge, Massachusetts, UK'
  },
  {
    image: '/public/landing_images/stanford.png',
    college: 'Stanford University',
    location: 'Stanford, California'
  },
  {
    image: '/public/landing_images/nanyang.png',
    college: 'Nanyang University',
    location: 'Nanyang Ave, Singapura'
  }
]

const blogs = [
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
  }
]
</script>

<template>
  <body>
    <Header />
    <main>
      <section class="hero-section">
        <div class="hero-title">MADE FOR THOSE WHO DO</div>

        <div class="search-event">
          <div>
            <p>Looking for</p>
            <select name="event">
              <option value="A">Choose event type</option>
            </select>
          </div>
          <div>
            <p>Location</p>
            <select name="location">
              <option value="A">Choose location</option>
            </select>
          </div>
          <div>
            <p>When</p>
            <select name="date">
              <option value="A">Choose date and time</option>
            </select>
          </div>
          <button><img src="/public/icons/search.png" width="60%" /></button>
        </div>
      </section>

      <section class="events-section">
        <div class="event-title">
          <h2 class="title">Upcoming <span>Events</span></h2>
          <div class="event-details">
            <select name="event-time" class="event-combo">
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Holidays">Holidays</option>
            </select>
            <select name="event-type" class="event-combo">
              <option value="A">Event type</option>
              <option value="B">B</option>
            </select>
            <select name="event-category" class="event-combo">
              <option value="C">Any category</option>
              <option value="D">D</option>
            </select>
          </div>
        </div>

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

        <LoadMore />
      </section>

      <section class="create-section">
        <div class="image-wrapper">
          <img src="/public/landing_images/CreateEvent.png" alt="Create Event Image" />
        </div>
        <div class="create-content">
          <h2>Make your own Event</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Create Events</button>
        </div>
      </section>

      <section class="brands-section">
        <div class="brands">
          <h2 class="title">Join these <span>brands</span></h2>
          <p>
            We've had the pleasure of working with industry-defining brands. These are just some of
            them.
          </p>
        </div>
        <div class="brands-logo">
          <img src="/public/icons/spotify.png" alt="spotify logo" />
          <img src="/public/icons/google.png" alt="google logo" />
          <img src="/public/icons/stripe.png" alt="stripe logo" />
          <img src="/public/icons/youtube.png" alt="youtube logo" />
          <img src="/public/icons/microsoft.png" alt="microsoft logo" />
          <img src="/public/icons/medium.png" alt="medium logo" />
          <img src="/public/icons/zoom.png" alt="zoom logo" />
          <img src="/public/icons/uber.png" alt="uber logo" />
          <img src="/public/icons/grab.png" alt="grab logo" />
        </div>
      </section>

      <section class="trendz-section">
        <h2 class="title">Trending <span>Colleges</span></h2>

        <div class="trendz-grid">
          <TrendingCollege
            v-for="(trend, index) in trendz"
            :key="index"
            :image="trend.image"
            :college="trend.college"
            :location="trend.location"
          />
        </div>

        <LoadMore />
      </section>

      <section class="blog-section">
        <h2 class="title">Our <span>Blogs</span></h2>

        <div class="event-grid">
          <InfoBox
            v-for="(blog, index) in blogs"
            :key="index"
            :image="blog.image"
            :title="blog.title"
            :date="blog.date"
            :location="blog.location"
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

  main {
    margin: 0;

    .hero-section {
      background-image: url(/public/landing_images/HeroBanner.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      color: white;
      padding: 21%;
      position: relative;

      .search-event {
        background-color: #10107b;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: end;
        position: absolute;
        left: 10%;
        right: 10%;
        bottom: -10%;
        padding: 3vw 4vw;
        border-radius: 8px;

        div {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-right: 10px;
        }

        select {
          font-size: 1vw;
          padding: 0.7vw;
          border-radius: 4px;
          max-width: 300px;
          width: 90%;
          flex-wrap: wrap;
        }

        p {
          font-size: 1.2vw;
        }

        button {
          background-color: #7848f4;
          color: white;
          border: none;
          padding: 0.8vw 0.8vw;
          border-radius: 4px;
          cursor: pointer;
        }
      }

      .hero-title {
        font-size: 4vw;
        font-weight: 650;
        text-align: center;
        margin-top: -12vw;
      }
    }

    .title,
    span {
      font-weight: 650;
      color: black;

      span {
        color: #7848f4;
      }
    }

    .events-section {
      margin: 15% 10% 10px 10%;

      .event-title {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .event-details {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          .event-combo {
            background-color: #687c941c;
            font-size: 10px;
            padding: 6px 12px;
            border-radius: 4px;
            border: none;
          }
        }
      }
    }

    .event-grid,
    .blog-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .create-section {
      background-color: #10107b;
      color: white;
      display: flex;
      align-items: center;
      position: relative;
      overflow: visible;
      margin-bottom: 50px;
      padding-bottom: 0;

      .image-wrapper {
        position: relative;
        margin: 0 20px 0 5%;
        z-index: 1;

        img {
          width: 100%;
          height: auto;
          position: relative;
          top: -40px;
        }
      }

      .create-content {
        display: flex;
        flex-direction: column;
        max-width: 50%;
        z-index: 2;
        margin-right: 4%;

        h2 {
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 20px;
        }

        button {
          background-color: #7848f4;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #6039c2;
        }
      }
    }

    .brands-section {
      margin: 0 5% 50px 5%;

      .brands {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 6%;

        h2 {
          margin-bottom: 20px;
        }
        p {
          color: black;
          font-weight: bold;
          max-width: 550px;
          text-align: center;
        }
      }

      .brands-logo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;

        img {
          max-width: 120px;
          max-height: 60px;
          object-fit: contain;
        }
      }
    }

    .trendz-section {
      .trendz-grid {
        display: grid;
        grid-template-columns: repeat(auto fill, minmax(300px, 1fr));
        gap: 10px;
      }
    }

    .trendz-section,
    .blog-section {
      margin: 0 10% 0 10%;
    }

    .blog-section {
      margin-bottom: 10%;
    }

    @media screen and (min-width: 1024px) {
      .event-grid,
      .blog-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 482px) {
      .trendz-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* @media screen and (max-width: 280px) {
      .search-event {
        padding: 10px 15px;
        align-items: stretch;
        flex-direction: column;
        position: static;
        z-index: -1;
      }
    } */

    @media screen and (max-width: 481px) {
      .event-grid,
      .blog-grid,
      .trendz-grid {
        grid-template-columns: 1fr;
      }
      .search-event {
        padding: 10px 15px;
        align-items: stretch;

        div {
          select {
            font-size: 10px;
            padding: 4px;
          }

          p {
            font-size: 5px;
          }

          button {
            padding: 10px 15px;
          }
        }
      }

      .create-section {
        flex-direction: column;
        margin-top: 20%;
      }
    }
  }
}
</style>
