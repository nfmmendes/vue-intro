<template>
   <navbar :pages="pages" :active-page="activePage"></navbar>
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
    created(){ 
        this.getPages();

        this.$bus.$on('navbarLinkActivated', (index) => { 
            this.activePage = index;
            console.log(this.activePage);
        });
    },
    data(){ 
        return {
            activePage: 0,
            pages: []
        };
    },
    methods: { 
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();

            this.pages = data;
        },
        pageCreated(newPage){ 
            this.pages.push(newPage);
            console.log(this.pages);
        }
    }
}
</script>