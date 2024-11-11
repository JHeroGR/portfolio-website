<template lang="">

    <div class="work">
      <div class="container">
        <button class='btn btn-primary' @click="filterWorkType = 'all'">Everything</button>
        <button class='btn btn-success' @click="filterWorkType = 'code'">Code</button>
        <button class="btn btn-danger" @click="filterWorkType = 'game'">Games</button>
        <div class="grid">

              <CardComponent v-if="filterWorkType === 'code' || filterWorkType === 'all'"
                src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/ruby.svg"
                projectname="Ruby Sinatra Starter Project"
                description="A starter project written in Ruby On Sinatra for programmers."
                worktype="code"
                href="https://github.com/JHeroGR/ruby-sinatra-starter-app"
                />

              <CardComponent v-if="filterWorkType === 'game' || filterWorkType === 'all'"
                src="https://cdn.worldvectorlogo.com/logos/unity-69.svg"
                projectname="Epee Fencing Game"
                description="2D Sword Fighting Game written in C# made in Unity"
                worktype="game"
                href="https://github.com/JHeroGR/Epee-Fencing-Game" 
                />

              <CardComponent v-if="filterWorkType === 'all'" />

              <CardComponent v-if="filterWorkType === 'code' || filterWorkType === 'all'"
                src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c++.svg"
                projectname="CS 2 Work"
                description="Homework Projects from my Computer Science 2 Class."
                worktype="code"
                href="https://github.com/JHeroGR/CS-2-Work"
                />

              <CardComponent v-if="filterWorkType === 'game' || filterWorkType === 'all'"
                src="https://cdn.worldvectorlogo.com/logos/unity-69.svg"
                projectname="Go Home Game"
                description="2D Survivor Game written in C# made in Unity"
                worktype="game"
                href="https://github.com/JHeroGR/Go-Home-Game" />

              <CardComponent v-if="filterWorkType === 'all'" />

              <CardComponent v-if="filterWorkType === 'code' || filterWorkType === 'all'"
                src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/vuejs.svg"
                projectname="Portfolio Website in VueJS"
                description="My Portfolio Version 1 written in VueJS"
                worktype="code"
                href="https://github.com/JHeroGR/portfolio-website"
                />

              <CardComponent v-if="filterWorkType === 'game' || filterWorkType === 'all'"
                src="https://cdn.worldvectorlogo.com/logos/unity-69.svg"
                projectname="2D Slug Shooter Game"
                description="2D Shooter Game written in C# made in Unity"
                worktype="game"
                href="https://github.com/JHeroGR/2D-Slug-Shooter-Game"
                />

              <CardComponent v-if="filterWorkType === 'all'" />

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
      filterWorkType: 'all'
    }
  },
};
</script>

<style>
button {
  margin: 10px;
  margin-bottom: 25px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr) !important; /* 4 equal columns */
}

@media only screen and (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr) !important; /* 3 columns on medium screens */
  }
}

@media only screen and (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important; /* 2 columns on smaller screens */
  }
}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr !important; /* 1 column on very small screens (mobile) */
  }
}

</style>
