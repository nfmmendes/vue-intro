<template>
    <div class="container mb-3"> 
        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                <input v-model="pageTitle" type="text" class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>
                <textarea v-model="content" type="text" class="form-control" rows="5"> 
                </textarea>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" @click.prevent="pageCreated({pageTitle, content})">
                    Create Page
                </button>
            </div>
        </form>
    </div>
</template>

<script> 
    export default {
        props:['pageCreated'],

        data() { 
            return {
                pageTitle: '',
                content: ''
            }
        }
    }
</script>