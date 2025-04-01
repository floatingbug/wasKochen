<script setup>
import dish from "@/stores/dishStore.js";
</script>


<template>    
	<div class="preparation-container">
		<h3>Zubereitung beschreiben</h3>

		<Textarea v-model="dish.preparation"></Textarea>
	</div>
</template>   


<style scoped>
.preparation-container {
	width: 100%;
}

.p-textarea {
	width: 95%;
	min-height: 200px;
}
</style>
