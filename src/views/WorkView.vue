<template lang="">
  <div class="work">
    <div class="container">
        <div id='coding_work'>
            <div class="row">
                <div class="col">
                <CardComponent src='https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/ruby.svg' 
                                projectname='Ruby Sinatra Starter Project'
                                description='A starter project for Ruby On Sinatra web app projects to introduce programmers to Ruby programming.'
                                worktype="code"
                                href='https://github.com/JHeroGR/ruby-sinatra-starter-app'/>
                </div>
                <div class="col">
                    <CardComponent src='https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c++.svg' 
                                projectname='CS 2 Work'
                                description='Homework Projects from my Computer Science 2 Class.'
                                worktype="code"
                                href='https://github.com/JHeroGR/CS-2-Work'/>
                </div>
                <div class="col">
                    <CardComponent src='https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/vuejs.svg' 
                                projectname='Portfolio Website in VueJS'
                                description='My Portfolio Version 1 written in VueJS'
                                worktype="design"
                                href='https://github.com/JHeroGR/portfolio-website'/>
                </div>
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

<style>

</style>
