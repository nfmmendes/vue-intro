<template>
    <a class="nav-link" :class="activeClasses" aria-current="page" :title="`This link goes to the ${page.link.text} page`" :href="page.link.url"> {{ page.link.text }}
    </a>
</template>


<script>
    export default {
        props: ['isActive', 'page'],
        computed: {
            activeClasses(){
                return{  
                    active: this.isActive,
                    emphasize: this.isActive
                }
            } 
        }
    }
</script>
<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>