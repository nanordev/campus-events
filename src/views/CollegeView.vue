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
  <Header />
    <body>
      <main>
        <section class="hero-section"></section>

        <section class="college-info">
          <h2>IIT Roorke</h2>
          <p>
            DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. 
            
            <br><br>
            
            DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. 
            
            <br><br>
            
            DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. 
            
            <br><br>

            DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
          </p>
        </section>

        <section class="events-section">
          <h2 class="title">College <span>Events</span></h2>

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
    </body>
  <Footer />
</template>

<style scoped>
body {
  background-color: #f8f8fa;

   .hero-section {
      background-image: url(/public/landing_images/CollegeBanner.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      color: white;
      padding: 21%;
      position: relative;
    }
    
    .title,
    span {
      font-weight: 650;
      color: black;
    
      span {
        color: #7848f4;
      }
    }

    .college-info {
      margin: 5% 10% 5% 10%;

      h2 {
        font-weight: bold;
        color: black;
        margin-bottom: 20px;
      }
    }

    .events-section {
    margin: 5% 10% 5% 10%;

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
}
</style>