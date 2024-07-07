<template>
    <li>
        <a class="nav-link" 
        :class="activeClasses" 
        :title="`This link goes to the ${page.link.text} page`" 
        :href="page.link.url"
        @click.prevent="$bus.$emit('navbarLinkActivated', index)"
        > {{ page.link.text }} </a>
    </li>
</template>


<script>
    export default {
        props: ['isActive', 'page', 'index'],
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