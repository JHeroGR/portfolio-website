<template>
    <a class="btn btn-secondary" :href="href">
        <i :class="icon"></i>
            {{ name }}
    </a>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        href: {
            type: String,
            default: '/home'
        },
        name: {
            type: String,
            default: 'In Dev'
        },
        icon: {
            type: String,
            default: 'bi bi-file-earmark'
        }
    }
}
</script>

