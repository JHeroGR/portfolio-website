<template>
  <div class="about">
    <div class="container">
          <ButtonComponent href="https://jherogr.github.io/resume/" target="_blank" name="Resume"></ButtonComponent>
          <ButtonComponent href="https://behance.net/jherogr" target="_blank" icon="bi bi-behance" name="Behance"></ButtonComponent>
          <ButtonComponent href="https://github.com/JHeroGR" target="_blank" icon="bi bi-github" name="Github"></ButtonComponent>
          <ButtonComponent href="https://linkedin.com/in/joel-gutierrez-cmpe" target="_blank" icon="bi bi-linkedin" name="LinkedIn"></ButtonComponent>
          
        
			<h5>I'm a developer and designer with a background in computer engineering and UX design. I specialize in building websites, and applications that are both functional and user-friendly.</h5>
			<h5>My passion lies in creating websites that support people and businesses—bringing together clean code, thoughtful design, and real-world purpose. Whether I’m working on a web app, a UI concept, or a client project, I focus on simplicity, creativity, and impact.</h5>
		</div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue"

export default {
  name: 'AboutView',
  components: {
    ButtonComponent
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .col-6 {
    width: auto;
  }
  
}

.about h5 {
  text-align: left;
  margin-top: 20px;
}

.about a {
  margin-bottom: 15px;
  margin-left: 15px;
}
</style>
