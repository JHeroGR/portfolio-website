<template>
  <div class="work">
    <div class="container">
      <button 
        v-for="filter in filters" 
        :key="filter.id" 
        :class="[filter.buttontype, { active: filterWorkType === filter.filterWorkType }]"          
        @click="filterWorktype(filter.filterWorkType)">
        {{ filter.name }}
      </button>

      <div class="grid">
        <transition-group name="list">
          <div v-for="card in card_data" :key="card.id" v-show="filterWorkType === 'all' || card.worktype === filterWorkType">
            <CardComponent 
              :src="card.src"
              :projectname="card.projectname"
              :description="card.description" 
              :worktype="card.worktype"
              :href="card.href"
            />
          </div>
        </transition-group>
      </div>
    </div>
  </div>

</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "WorkView",
  components: {
    CardComponent,
  },
  data() {
    return {
      filterWorkType: 'all',  // Initial filter type
      filters: [
        { id: 1, name: 'Everything', filterWorkType: 'all', buttontype: 'btn btn-outline-secondary' },
        { id: 2, name: 'Code', filterWorkType: 'code', buttontype: 'btn btn-outline-success' },
        { id: 3, name: 'Game', filterWorkType: 'game', buttontype: 'btn btn-outline-danger' },
        { id: 4, name: 'Art', filterWorkType: 'art', buttontype: 'btn btn-outline-primary' },
        { id: 5, name: 'Design', filterWorkType: 'design', buttontype: 'btn btn-outline-info' },
      ],
      card_data: [
        { 
          id: 0,
          filterWorkType: 'game', 
          src: require('@/assets/game/2D Slug Shooter.png'),
          projectname: "2D Slug Shooter Game",
          description: "2D Shooter Game written in C# made in Unity",
          worktype: "game",
          href: "https://github.com/JHeroGR/2D-Slug-Shooter-Game" 
        },
        {
          id: 1,
          filterWorkType: 'code',
          src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/ruby.svg",
          projectname: "Ruby Sinatra Starter Project",
          description: "A starter project written in Ruby On Sinatra for programmers.",
          worktype: "code",
          href: "https://github.com/JHeroGR/ruby-sinatra-starter-app",
        },
        {
          id: 2,
          filterWorkType: 'art',
          src: require("@/assets/art/PillowThinkers Logo SUB ICON.png"),
          projectname: 'Pillow Thinkers Logo',
          description: "Logo Design for Pillow Thinkers Youtube-Twitch Podcast Channel",
          worktype: "art",
          href: "https://www.behance.net/gallery/203207257/Pillow-Thinkers-Designs-(Logo-Background-Banner)"
        },
        {
          id: 3,
          filterWorkType: "game",
          src: require('@/assets/game/Epee Fencing.png'),
          projectname: "Epee Fencing Game",
          description: "2D Sword Fighting Game written in C# made in Unity",
          worktype: "game",
          href: "https://github.com/JHeroGR/Epee-Fencing-Game" 
        },
        {
          id: 4,
          filterWorkType: 'code',
          src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c++.svg",
          projectname: "CS 2 Work",
          description: "Homework Projects from my Computer Science 2 Class.",
          worktype: "code",
          href: "https://github.com/JHeroGR/CS-2-Work"        
        },
        {
          id: 5,
          filterWorkType: 'game',
          src: require('@/assets/game/Go Home.png'),
          projectname: "Go Home Game",
          description: "2D Survivor Game written in C# made in Unity",
          worktype: "game",
          href: "https://github.com/JHeroGR/Go-Home-Game"
        },
        {
          id: 6,
          filterWorkType: 'code',
          src: require('@/assets/code/portfolio-website-image.png'),
          projectname: "Portfolio Website in VueJS",
          description: "My Portfolio written in VueJS",
          worktype: "code",
          href: "https://github.com/JHeroGR/portfolio-website"
        },
        {
          id: 7,
          filterWorkType: 'art',
          src: require('@/assets/art/BEEP.png'),
          projectname: 'BEEP Emoji',
          description: 'Beep Emoji for streamers',
          worktype: 'art',
          href: '#'
        },
        {
          id: 8,
          filterWorkType: 'art',
          src: require('@/assets/art/GGs.png'),
          projectname: 'GGs Emoji',
          description: 'GGs Emoji for streamers',
          worktype: 'art',
          href: '#'
        },
        {
          id: 9,
          filterWorkType: 'art',
          src: require('@/assets/art/GoodLuckHaveFun.png'),
          projectname: 'GoodLuckHaveFun Emoji',
          description: 'GoodLuckHaveFun Emoji for streamers',
          worktype: 'art',
          href: '#'
        },
        {
          id: 10,
          filterWorkType: 'art',
          src: require('@/assets/art/Hype.png'),
          projectname: 'Hype Emoji',
          description: 'Hype Emoji for streamers',
          worktype: 'art',
          href: '#'
        },
        {
          id: 11,
          filterWorkType: 'art',
          src: require('@/assets/art/LetsGO.png'),
          projectname: 'LetsGO Emoji',
          description: 'LetsGO Emoji for streamers',
          worktype: 'art',
          href: '#'
        },
        {
          id: 11,
          filterWorkType: 'art',
          src: require('@/assets/art/NTs.png'),
          projectname: 'NTs Emoji',
          description: 'NTs Emoji for streamers',
          worktype: 'art',
          href: '#'
        },
        {
          id: 12,
          filterWorkType: 'design',
          src: require('@/assets/design/TPC-LAN-SSBU-NOV-2024-Tournament-Flyer.png'),
          projectname: 'Texas Prospect Cup SSBU LAN Tournament',
          description: 'Gaming Tournament Flyer',
          worktype: 'design',
          href: '#'
        },
        {
          id: 13,
          filterWorkType: 'design',
          src: require('@/assets/design/TPC-LAN-Tournament-Playoffs-Graphics.png'),
          projectname: 'Texas Prospect Cup Playoffs Graphics',
          description: 'Gaming Tournament Playoffs Flyer',
          worktype: 'design',
          href: '#'
        }

      ]
    }
  },
  methods: {
    filterWorktype(selectedFilter) {
      this.filterWorkType = selectedFilter; // Set the global filter type
    }
  }
};
</script>

<style>
button {
  margin: 5px;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr) !important; /* 4 equal columns */
}

/* apply transition to moving elements */
.list-move,
.list-enter-active {
  transition: all 0.5s ease-in;
}

.list-move,
.list-leave-active {
  transition: all 0.5s ease-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

@media only screen and (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media only screen and (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
