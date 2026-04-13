<template>
    <a class="btn btn-secondary" :href="href" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" :class="class" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3> 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755"/>
            </svg> 
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
        class: {
            type: String,
            default: 'bi bi-file-earmark-person-fill'
        }
    }
}
</script>

