<script setup>
import {ref, watch, toRaw} from 'vue';
import Slider from 'primevue/slider';
import dish from "@/stores/dishStore.js";


const emit = defineEmits(["kilocaloriesFilter:action"]);


const value = ref([50, 2000]);


watch(value, () => {
	dish.kilocalories = value.value;
	const rawValue = toRaw(value.value);
	emit("kilocaloriesFilter:action", {
		action: "kilocaloriesChanged",
		data: rawValue,
	});
});

</script>


<template>    
	<div class="kilocalories-container">
		<h3>Kilokalorien: {{value[0]}} bis {{value[1]}}</h3>
		<Slider v-model="value" range :min="1" :max="2000" />
	</div>
</template>   


<style scoped>

</style>
