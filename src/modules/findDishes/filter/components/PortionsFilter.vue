<script setup>
import {ref, watch, toRaw} from 'vue';
import Slider from 'primevue/slider';
import dish from "@/stores/dishStore.js";


const emit = defineEmits(["portionsFilter:action"]);


const value = ref(1);


watch(value, () => {
	dish.difficulty = value.value;
	const rawValue = toRaw(value.value);
	emit("portionsFilter:action", {
		action: "portionsChanged",
		data: rawValue,
	});
});

</script>


<template>    
	<div class="portions-content">
		<h3>Für mindestens: {{value}} Personen</h3>
		<Slider v-model="value" :min="1" :max="10" />
	</div>
</template>   


<style scoped>

</style>
