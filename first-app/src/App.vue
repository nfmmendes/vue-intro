<template>
   <navbar></navbar>
   <router-view></router-view>
</template>

<script> 
import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'
import CreatePage from './components/CreatePage'

export default { 
    components: {
        Navbar, 
        PageViewer,
        CreatePage        
    },
    methods: { 
        pageCreated(newPage){ 
            this.pages.push(newPage);
        }
    }
}
</script>