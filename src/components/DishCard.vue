<script setup>
import {ref} from "vue";


const props = defineProps({
	dish: Object,
});


const API_URL = ref(import.meta.env.VITE_API_URL);
const IMAGE_NAME_STARTS_WITH = import.meta.env.VITE_IMAGE_NAME_STARTS_WITH;

</script>


<template>    
	<div class="dish-card card-bg-glass">

		<div class="card-top">
			<img
				v-if="dish.dish.dishImageUrl.startsWith(IMAGE_NAME_STARTS_WITH)"
				:src="`${dish.dish.dishImageUrl}`" alt="">
			<img
				v-else
				:src="`${API_URL}${dish.dish.dishImageUrl}`" alt="">
		</div>
		
		<div class="card-bottom">
			<h3>{{dish.dish.recipeName}}</h3>

			<div class="description">
				{{dish.dish.description}}
			</div>

			<slot name="buttons">
			</slot>
			
			<div class="categories-container">
				<Badge
					v-for="(categorie, index) in dish.dish.categories" :key="index"
				>
					{{categorie}}
				</Badge>
			</div>

			<div class="information-container">
				<span v-tooltip="'Portionen'">
					<i class="pi pi-users"></i>
					{{dish.dish.portions}}
				</span>
				
				<span v-tooltip="'Zubereitungszeit'">
					<i class="pi pi-clock">&nbsp</i>
					<span v-if="dish.dish.preparationTime > 1">
						{{dish.dish.preparationTime}}
					</span>
					<span v-else>
						n/A
					</span>
				</span>
				
				<span v-tooltip="'Schwierigkeitsgrad (von 1 bis 10)'">
					<i class="pi pi-chart-line">&nbsp</i>
					<span v-if="dish.dish.difficulty > 1">
						{{dish.dish.difficulty}}
					</span>
					<span v-else>
						n/A
					</span>
				</span>
				
				<span v-tooltip="'Kilokalorien'">
					<i class="pi pi-bolt">&nbsp</i>
					<span v-if="dish.dish.kilocalories > 1">
						{{dish.dish.kilocalories}}
					</span>
					<span v-else>
						n/A
					</span>
				</span>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.dish-card {
	width: 30%;
	min-width: 250px;
	max-width: 500px;
	min-height: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	border-color: var(--border-color);

	h3 {
		text-align: center;
	}
}

h1 {
	text-align: center;
}

.card-top {
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-top img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.description {
	width: 100%;
	text-align: center;
	margin-bottom: 1rem;
	padding: 0 1rem;
}

.card-bottom {
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.card-bottom .categories-container {
	width: 80%;
	height: 30%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	margin: .8rem;
	overflow: hidden;
}

.card-bottom .information-container {
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	border-top: 1px solid var(--border-color);
	margin-top: auto;
	padding: 1rem 0;
}
</style>
