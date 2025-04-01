<script setup>
import {ref, watch, toRaw} from 'vue';
import Slider from 'primevue/slider';
import dish from "@/stores/dishStore.js";


const emit = defineEmits(["preparationTimeFilter:action"]);


const value = ref(200);


watch(value, () => {
	dish.preparationTime = value.value;
	const rawValue = toRaw(value.value);
	emit("preparationTimeFilter:action", {
		action: "preparationTimeChanged",
		data: rawValue,
	});
});

</script>


<template>    
	<div class="preparation-time-content">
		<h3>Zubereitungszeit höchstens: {{value}} Minuten</h3>
		<Slider v-model="value" :min="1" :max="200" />
	</div>
</template>   


<style scoped>

</style>
