<script setup>
import {ref, watch, toRaw} from 'vue';
import Slider from 'primevue/slider';
import dish from "@/stores/dishStore.js";


const emit = defineEmits(["difficultyFilter:action"]);


const value = ref(1);


watch(value, () => {
	dish.difficulty = value.value;
	const rawValue = toRaw(value.value);
	emit("difficultyFilter:action", {
		action: "difficultyChanged",
		data: rawValue,
	});
});

</script>


<template>    
	<div class="difficulty-content">
		<h3>Schwirigkeitsgrad höchstens: {{value}} von 10</h3>
		<Slider v-model="value" :min="1" :max="10" />
	</div>
</template>   


<style scoped>

</style>
