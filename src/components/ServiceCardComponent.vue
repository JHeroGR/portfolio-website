<template>
  <div class="card h-100" style="width: auto">
    <h3 :class="['card-header', 'card-title', card_header_type]">{{ title }}</h3>
    <div class="card-body">
      <p class="card-text">{{ description }}</p>
      <ul>
        <li v-for="item in contents" :key="item">{{ item }}</li>
      </ul>
    </div>
    <h2>{{ price }}</h2>
    <button :class="['card-footer', 'btn', card_header_type]" @click="emitSelected">Select Package</button>    
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: ["card_header_type", "price", "title", "description", "contents", "payment_link"],
  methods: {
    emitSelected() {
      this.$emit("select", {
        card_header_type: this.card_header_type,
        price: this.price,
        title: this.title,
        description: this.description,
        contents: this.contents,
        payment_link: this.payment_link
      });
    }
  }
};
</script>

<style>
.card-text {
    font-weight: bolder;
}

li {
    list-style-type: circle;
    text-align: left;
    font-weight: bolder;
}

.card {
    background-color: hsla(0, 0%, 100%, 0) !important;
    color: inherit;
    border-color: inherit;
}

.card-footer {
  font-weight: bolder !important;
}

</style>
