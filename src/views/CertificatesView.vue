<template>
    <div class="certificates">
        <div class="container text-left">
            <div v-for="certificate in certificates" :key="certificate.id">
                <div class="row">
                    <div class="col-md-8">
                        <img :src="certificate.url" :alt="certificate.title" class="image" />
                    </div>
                    <div class="col-md-4">
                        <ul>
                            <li>{{ certificate.title }}</li>
                            <li>{{ certificate.school }}</li>
                            <li>{{ certificate.year }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: "CertificatesView",
  data() {
    return {
        certificates: []
    }
  },
  mounted() {
    this.fetchCertificates()
  },
  methods: {
    async fetchCertificates() {
        try {
            const querySnapshot = await getDocs(collection(db, 'certificates'))

            this.certificates = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log('certificates:', this.certificates)
        } catch (error) {
            console.error('Failed to read certificates:', error)
        }
    }
  }
}
</script>

<style>
.certificates .container img {
    width: auto;
    height: 300px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgb(95, 184, 86);
    margin-bottom: 25px;
}

ul li {
    list-style-type: circle;
    text-align: left;
}

.col-md-4 {
    margin-top: 25px;
}
</style>
