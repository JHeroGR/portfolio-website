<template>

  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h2>Let's Work Together</h2>
          
          <p>I am always interested in working on a project.</p>
          <p>Feel free to fill out the contact form with your project proposition or job offer and I will get back to you asap.</p>
          <p>Feel free to send me a message on LinkedIn too! </p>
        </div>
        <div class="col-6">
          <FormComponent />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
  name: 'ContactView',
  components: {
    FormComponent
  }
};
</script>

<style>
.col-6 p {
  text-align: left;
  padding-top: 1rem;
}

@media only screen and (max-width:600px) {
  .col-6 {
    width: auto;
  }

  .col-6 p {
    text-align: center;
  }
}

</style>
