<script setup>
import {ref} from "vue";
import Rating from 'primevue/rating';


const props = defineProps({
	isReadOnly: Boolean,
});


const value = ref(null);


</script>


<template>    
	<div class="content">
		<Rating v-model="value" :readonly="isReadOnly"></Rating>
	</div>
</template>   


<style scoped>
</style>
