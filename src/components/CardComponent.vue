<template lang="">
  <div class="d-inline-block">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src=src alt="Avatar" style="width: 300px; height: 300px"/>
        </div>
        <div class="flip-card-back">
          <h1>{{ projectname }}</h1>
          <p>{{ description }}</p>
          <a :href=href class='btn btn-light' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg> Go to Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    src: String,
    projectname: String,
    description: String,
    href: String
  }
};
</script>

<style>
.container {
    display: block;
}

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
