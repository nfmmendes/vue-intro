<template>
    Edit page {{ router.params.index }}
</template>

<script setup>
import { useRoute } from 'vue-router';

const router = useRouter(); 
const props = defineProps(['index']);

</script>