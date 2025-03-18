<script setup>
import dish from "../store/dishStore.js";
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
</style>
