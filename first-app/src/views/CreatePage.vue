<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-6">
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
            </div>
            <div class="col">
                <div class=mb-3>
                    <label for="" class="form-label">
                        Link text
                    </label>
                    <input type="text" v-model="linkText" class="form-control"/> 
                </div>
                <div class=mb-3>
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input type="text" v-model="linkUrl" class="form-control"/> 
                </div>
                <div class="row col-mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="published"/>
                        <label class="form-check-label" for="gridCheck1"> 
                            Published
                        </label>  
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button :disabled="isFormInvalid" class="btn btn-primary" @click.prevent="submitForm()">
                    Create Page
                </button>
            </div>
        </div>
    </form>
</template>

<script> 
    export default {
        emits: {
            pageCreated({pageTitle, content, link}) {
                if(!pageTitle)
                    return false;
                if(!content)
                    return false;
                if(!link || link.text || link.url)
                    return false;
               
                return true;
            }
        },
        computed: {
            isFormInvalid(){ 
                return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
            }
        },
        data() { 
            return {
                pageTitle: '',
                content: '',
                linkText: '',
                linkUrl: '',
                published: true
            }
        },
        methods: {
            submitForm(){ 
                if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                    alert('Please fill the form');
                    return;
                }

                this.$emit('pageCreated', {
                    pageTitle: this.pageTitle,
                    content: this.content,
                    link: { 
                        text: this.linkText,
                        url: this.linkUrl,
                    },
                    published: this.published
                });

                this.clearForm();
            },
            clearForm() {
                this.pageTitle = '';
                this.content = '';
                this.linkText = '';
                this.linkUrl = '';
                this.published = true;
            }
        },
        watch: {
            pageTitle(newTitle, oldTitle) { 
                if(this.linkText === oldTitle){
                    this.linkText = newTitle;
                }
            }
        }
    }
</script>