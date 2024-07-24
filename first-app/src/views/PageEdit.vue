<template>
    <p> Edit page {{ page.pageTitle }} </p>

    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input v-model="page.pageTitle" type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea v-model="page.content" type="text" class="form-control" rows="5"> 
                    </textarea>
                </div>
            </div>
            <div class="col">
                <div class=mb-3>
                    <label for="" class="form-label">
                        Link text
                    </label>
                    <input type="text" v-model="page.link.text" class="form-control"/> 
                </div>
                <div class="row col-mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="page.published"/>
                        <label class="form-check-label" for="gridCheck1"> 
                            Published
                        </label>  
                    </div>
                </div>
            </div>
        </div>
        <div class=row>
            <div class="col-10 mb-3">
                <button class="btn btn-primary me-2" @click.prevent="submit()">
                    Edit
                </button>
                <button class="btn btn-secondary" @click.prevent="submit()">
                    Cancel
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue'

const router = useRouter(); 
const pages = inject('$pages');
const bus = inject('$bus');

const {index} = defineProps(['index'])

let page = pages.getSinglePage(index);

function submit() {
    pages.editPage(index, page);
    bus.$emit('page-updated',{
        index,
        page
    });

    goToPageList();
}

function goToPageList() { 
    router.push({path:'/pages'})
}
</script>