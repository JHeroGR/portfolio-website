<template>
    <h1>What I Offer</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <ServiceCard :title="'Basic'"
                             :description="'UI/UX Showing of Web Application Project in Figma and Hosting the Website'"
                             :contents="['3 Pages', 'Design Showcase', 'Hosting']" />
            </div>
            <div class="col-md-4">
                <div class="big-border">
                    <ServiceCard :title="'Standard'"
                                 :description="'Same Features As Basic With Maintenance'"
                                 :contents="['Same Features as Basic', 'Email Integration', 'Appllication Maintenance']" />
                </div>
            </div>
            <div class="col-md-4">
                <ServiceCard :title="'Premium'" 
                             :description="'Same Features As Basic With Maintenance, and Monthly Reports'"
                             :contents="['Same Features as Basic', 'Email Integration', 'Appllication Maintenance', 'Monthly Reports']" />
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCardComponent.vue"

export default {
    name: "ServicesView",
    components: {
        ServiceCard
    }
}
</script>

<style>
.big-border {
    border-color: green;
    border-width: 10px;
}
.row {
    padding: 10px !important;
}
</style>
