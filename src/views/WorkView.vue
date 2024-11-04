<template lang="">
  <div class="work">
    <div class="container">
      <div class="row">
        <div class="col">
          <CardComponent />
        </div>
        <div class="col">
          <CardComponent />
        </div>
        <div class="col">
          <CardComponent />
        </div>
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
};
</script>

<style></style>
