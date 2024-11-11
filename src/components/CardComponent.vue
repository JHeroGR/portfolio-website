<template lang="">
  <div class="d-inline-block mx-3">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="src" alt="Avatar" style="width: 300px; height: 300px"/>
        </div>
        <div class="flip-card-back">
          <h1>{{ projectname }}</h1>
          <p>{{ description }}</p>
          <a :href=href class='btn btn-light' target='_blank'>Go to Project</a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    src: {
      type: String,
      default: 'https://dummyimage.com/300x300/000/fff'
    },
    projectname: { 
      type: String,
      default: 'Project Name'
    },
    description: {
      type: String,
      default: 'Project Description goes here'
    },
    href: {
      type: String,
      default: 'https://dummyimage.com/300x300/000/fff'
    },
    worktype: {
      type: String,
      default: 'none'
    }
  },
};
</script>

<style>

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  display: flex;
  text-align: center;
  margin-bottom: 2rem;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background: #bbb;
  color: black;
  box-shadow: black;
}

.flip-card-back {
  background-color: #42b983;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back h1,
.flip-card-back p {
  margin-left: 15px;
  margin-right: 15px;
}

.flip-card-back h1 {
    font-size: x-large;
    font-weight: bold;
    margin-top: 5vh;
}

.flip-card-back a {
    margin: 20px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

@media only screen and (max-width:600px) {
    .flip-card-back p {
        display: none;
    }

    .flip-card-back h1, .flip-card-back a {
        margin-top: 5vh;
    }
}
</style>
