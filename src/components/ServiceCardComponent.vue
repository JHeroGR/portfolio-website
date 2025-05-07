<template>
    <div class="card h-100" style="width: auto">
        <h3 class="card-header card-title">{{ title }}</h3>
        <div class="card-body">
            <p class="card-text">{{ description }}</p>
            <ul>
                <li v-for="item in contents" :key="item">{{ item }}</li>
            </ul>
        </div>
        <div class="card-footer">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="handleSelect">Select Package</button>
        </div>
    </div>
    <br />
</template>

<script>
export default {
    name: "ServiceCard",
    props: {
        title: {
            type: String,
            default: "Package Title Here"
        },
        description: {
            type: String,
            default: "Package Description Here"
        },
        contents: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleSelect() {
            this.$emit('select', {
                title: this.title
            });
        }
    }
}
</script>

<style>
h3 {
    text-align: center;
}

li {
    list-style-type: circle;
    text-align: left;
    padding-bottom: 5px;
}

.card-text {
    text-align: left;
}

.card {
    border-color: #006538;
    border-width: 75%;
}
</style>
