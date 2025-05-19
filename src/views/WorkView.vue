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
          <div v-for="project in projects" :key="project.id" v-show="filterWorkType === 'all' || project.worktype === filterWorkType">
            <CardComponent
              :src="project.img_src"
              :projectname="project.title"
              :worktype="project.worktype"
              :description="project.description"
              :href="project.href"
            />
          </div>
        </transition-group>
      </div>
    </div>
  </div>

</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
      projects: []
    }
  },
  mounted() {
    this.fetchProjects()
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(); // Replace with your data fetching method
    next();
  },
  methods: {
    async fetchProjects () {
      const colRef = collection(db, 'projects'); // valid path: 3 segments
      const querySnapshot = await getDocs(colRef);

      this.projects = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },
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

.btn-outline-info:hover, .btn.active, :not(.btn-check)+.btn:active {
  color: white;
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
  transform: translateY(5px);
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
