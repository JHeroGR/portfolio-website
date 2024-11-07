<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h2>Let's Work Together</h2>
          <a class='btn btn-secondary' href='https://linkedin.com/in/joel-gutierrez-cmpe'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg> LinkedIn</a>
          <p>I am always interested in working on a project.</p>
          <p>Feel free to fill out the contact form with your project proposition and I will get back to you asap.</p>
          <p>Feel free to send me a message on LinkedIn too!</p>
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

@media  only screen and (max-width:600px) {
  .col-6 {
    width: auto;
  }
}
</style>
