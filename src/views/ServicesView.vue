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
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h4 class="modal-title" id="modalLabel"><span :class=selectedPackage.card_header_text>{{ selectedPackage.title }} Package</span></h4>
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
import * as bootstrap from 'bootstrap'

export default {
    name: "ServicesView",
    data() {
        return {
            selectedPackage: {},
            serviceCards: [{
                card_header_text: 'basic-card-text',
                card_header_type: 'basic-card-header',
                price: '$30 / Month',
                title: 'Basic',
                description: 'UI/UX Showing of Web Application Project in Figma and Hosting the Website',
                contents: ['3 Pages', 'Design Showcase', 'Hosting', '1 Revision'],
                payment_link: 'https://buy.stripe.com/test_dRmdRb8VA4It8tp2JC7ss03'
            }, {
                card_header_text: 'standard-card-text',
                card_header_type: 'standard-card-header',
                price: '$50 / Month',
                title: 'Standard',
                description: 'Same Features As Basic With Maintenance',
                contents: ['Same Features as Basic', 'Email Integration', 'Appllication Maintenance', '3 Revisions'],
                payment_link: 'https://buy.stripe.com/test_dRm3cxdbQ8YJbFB4RK7ss04'
            }, {
                card_header_text: 'premium-card-text',
                card_header_type: 'premium-card-header',
                price: '$100 / Month',
                title: 'Premium',
                description: 'Same Features As Basic With Maintenance, and Monthly Reports',
                contents: ['Same Features as Basic', 'Email Integration', 'Appllication Maintenance', 'Monthly Reports', '5 Revisions'],
                payment_link: 'https://buy.stripe.com/test_8x2cN74Fkb6RcJFgAs7ss05'
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

.basic-card-text {
    color: rgba(46, 204, 113, 0.7) !important;
}

.standard-card-text {
    color: rgba(241,196,15, 0.7) !important;
}

.premium-card-text {
    color: rgba(0,87,255, 0.7) !important;
}
</style>
