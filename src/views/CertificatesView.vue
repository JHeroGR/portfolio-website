<template>
    <div class="certificates">
        <div class="container text-left">
            <div v-for="certificate in certificates" :key="certificate.id">
                <div class="row">
                    <div class="col-md-8">
                        <img :src=certificate.url class="image" />
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
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next()
  },
  methods: {
    async fetchCertificates () {
        const colRef = collection(db, 'certificates')
        const querySnapshot = await getDocs(colRef)

        this.certificates = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
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
