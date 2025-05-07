<template>
    <h1>What I Offer</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <ServiceCard :title="'Basic'"
                             :description="'UI/UX Showing of Web Application Project in Figma and Hosting the Website'"
                             :contents="['3 Pages', 'Design Showcase', 'Hosting']"
                             @select="handleSelect" />
            </div>
            <div class="col-md-4">
                <ServiceCard :title="'Standard'"
                             :description="'Same Features As Basic With Maintenance'"
                             :contents="['Same Features as Basic', 'Email Integration', 'Appllication Maintenance']"
                             @select="handleSelect" />
            
            </div>
            <div class="col-md-4">
                <ServiceCard :title="'Premium'" 
                             :description="'Same Features As Basic With Maintenance, and Monthly Reports'"
                             :contents="['Same Features as Basic', 'Email Integration', 'Appllication Maintenance', 'Monthly Reports']"
                             @select="handleSelect" />
            </div>
        </div>
        <ModalComponent :title="selectedPackage.title" />
    </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCardComponent.vue"
import ModalComponent from "@/components/ModalComponent.vue"

export default {
    name: "ServicesView",
    data() {
        return {
            selectedPackage: {
                title: ''
            }
        }
    },
    components: {
        ServiceCard,
        ModalComponent
    },
    methods: {
        handleSelect(data) {
            this.selectedPackage = data
        }
    }
}
</script>

<style>
.col-md-4 {
    margin-bottom: 10%;
}

.row {
    padding: 10px !important;
}
</style>
