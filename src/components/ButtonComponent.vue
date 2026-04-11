<template>
    <a class="btn btn-secondary" :href="href" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" :class="icon" viewBox="0 0 16 16">
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
				icon: {
						type: String,
						default: 'bi bi-file-earmark-person-fill'
				}
    }
}
</script>

