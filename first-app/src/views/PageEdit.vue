<template>
    Edit page {{ router.params.index }}

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
                <button :disabled="isFormInvalid" class="btn btn-primary">
                    Edit
                </button>
                <button :disabled="isFormInvalid" class="btn btn-primary">
                    Cancel
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useRoute } from 'vue-router';

const router = useRouter(); 
const props = defineProps(['index']);

</script>