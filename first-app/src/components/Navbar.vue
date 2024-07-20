<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class = "container-fluid">
            <a class="navbar-brand" href="#"> My Vue </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in publishedPages" class="nav-item" :key="index">
                    <navbar-link :isActive = "activePage == index"
                        :page=page
                        @click.prevent="navLinkClick(publishedIndexes[index])"> 
                    </navbar-link>
                </li>
            </ul> 
            <form class="d-flex"> 
                <button class="btn btn-primary" @click.prevent="changeTheme()"> 
                    Toggle
                </button>
            </form>
        </div>
    </nav>
</template>

<script> 
import NavbarLink from './NavbarLink.vue';
export default { 
    components: {
        NavbarLink
    },
    props: ['pages', 'activePage', 'navLinkClick'],
    created(){
        this.getThemeSettings(); 
    },
    computed:{ 
        publishedPages(){ 
            return this.pages.filter(x=> x.published);
        },
        publishedIndexes() { 
            return this.pages.map((x, i) => { if(x.published) return i} ).filter(i => i!== undefined);
        }
    },
    data() {
        return{ 
            theme: 'light'
        };
    },
    methods: { 
        changeTheme(){ 
            let theme = 'light';

            if(this.theme == 'light'){
                theme = 'dark';
            }
            
            this.theme = theme;
            this.storeThemeSettings();
        },
        storeThemeSettings() {
            localStorage.setItem('theme', this.theme)
        },
        getThemeSettings(){ 
            let theme = localStorage.getItem('theme', this.theme)

            if(theme){
                this.theme = theme;
            }
        }

    }
}
</script>