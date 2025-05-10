<template>
    <h1>What I Offer</h1>
    <div class="container">
        <div class="row">
            <div v-for="(serviceCard, index) in serviceCards" :key="index" class="col-md-4 mb-4">
                <ServiceCard :card_header_type="serviceCard.card_header_type" :price="serviceCard.price"
                    :title="serviceCard.title" :description="serviceCard.description" :contents="serviceCard.contents"
                    @select="handleSelect(serviceCard)" />
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">{{ selectedPackage.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6>You want to select this package?</h6>
                        <p>You will be redirected to our checkout page.</p>
                    </div>
                    <div class="modal-footer">
                        <a :href="selectedPackage.payment_link" target="_blank" class="btn btn-success">Yes</a>
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCardComponent.vue"
// import ModalComponent from "@/components/ModalComponent.vue"
import * as bootstrap from 'bootstrap'

export default {
    name: "ServicesView",
    data() {
        return {
            selectedPackage: {},
            serviceCards: [{
                card_header_type: 'basic-card-header',
                price: '$300 / Month',
                title: 'Basic',
                description: 'UI/UX Showing of Web Application Project in Figma and Hosting the Website',
                contents: ['3 Pages', 'Design Showcase', 'Hosting'],
                payment_link: 'https://buy.stripe.com/test_9B67sN5Jo7UFdNJac47ss00'
            }, {
                card_header_type: 'standard-card-header',
                price: '$700 / Month',
                title: 'Standard',
                description: 'Same Features As Basic With Maintenance',
                contents: ['Same Features as Basic', 'Email Integration', 'Appllication Maintenance'],
                payment_link: 'https://buy.stripe.com/test_cNi4gB2xca2N4d91Fy7ss01'
            }, {
                card_header_type: 'premium-card-header',
                price: '$1,500 / Month',
                title: 'Premium',
                description: 'Same Features As Basic With Maintenance, and Monthly Reports',
                contents: ['Same Features as Basic', 'Email Integration', 'Appllication Maintenance', 'Monthly Reports'],
                payment_link: 'https://buy.stripe.com/test_28EeVf5Jo0sd10X83W7ss02'
            }]
        }
    },
    components: {
        ServiceCard,
        // ModalComponent
    },
    methods: {
        handleSelect(serviceCard) {
            console.log('hit')
            this.selectedPackage = serviceCard;
            const modalEl = document.getElementById("serviceModal");
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        }


    }
}
</script>

<style>
.basic-card-header {
    background-color: rgba(46, 204, 113, 0.7) !important;
}

.standard-card-header {
    background-color: rgba(241,196,15, 0.7) !important;
}

.premium-card-header {
    background-color: rgba(0,87,255, 0.7) !important;
}
</style>
