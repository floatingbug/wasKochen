<script setup>
import {ref} from "vue";
import Ingredients from "./Ingredients.vue";
import dish from "@/stores/dishStore.js";

</script>


<template>    
	<div class="container">
		<div class="content">
			<!-- Input for recipe-name -->
			<InputGroup class="recept-name">
				<InputGroupAddon>
					<i class="pi pi-tag"></i>
				</InputGroupAddon>

				<FloatLabel variant="on">
					<InputText v-model="dish.recipeName" ></InputText>
					<label for="name">Rezeptname</label>
				</FloatLabel>
			</InputGroup>

			<Divider></Divider>

			<!-- Additional Inputs -->
			<div class="additional-inputs">
				<div class="non-required-inputs-container">
					<!-- Input for portions -->
					<div class="non-required-input">
						<span>Portionen</span>
				
						<InputNumber v-model="dish.portions" showButtons buttonLayout="horizontal" :min="1" :max="99">
							<template #incrementbuttonicon>
								<span class="pi pi-plus" />
							</template>
							<template #decrementbuttonicon>
								<span class="pi pi-minus" />
							</template>
						</InputNumber>	
					</div>
				
					<!-- Input for difficulty -->
					<div class="non-required-input">
						<span>Schwierigkeitsgrad</span>
				
						<InputNumber v-model="dish.difficulty" showButtons buttonLayout="horizontal" :min="1" :max="10">
							<template #incrementbuttonicon>
								<span class="pi pi-plus" />
							</template>
							<template #decrementbuttonicon>
								<span class="pi pi-minus" />
							</template>
						</InputNumber>	
					</div>
				</div>
				
				<div class="non-required-inputs-container">
					<!-- Input for preparation time -->
					<div class="non-required-input">
						<span>Zubereitungszeit</span>
				
						<InputNumber v-model="dish.preparationTime" showButtons buttonLayout="horizontal" :min="1" :max="1000">
							<template #incrementbuttonicon>
								<span class="pi pi-plus" />
							</template>
							<template #decrementbuttonicon>
								<span class="pi pi-minus" />
							</template>
						</InputNumber>	
					</div>
				
					<!-- Input for kilocalories-->
					<div class="non-required-input">
						<span>Kilokalorien</span>
				
						<InputNumber v-model="dish.kilocalories" showButtons buttonLayout="horizontal" :min="1" :max="100000">
							<template #incrementbuttonicon>
								<span class="pi pi-plus" />
							</template>
							<template #decrementbuttonicon>
								<span class="pi pi-minus" />
							</template>
						</InputNumber>	
					</div>
				</div>
			</div>

			<Divider></Divider>

			<!-- Ingredient inputs -->
			<Ingredients></Ingredients>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

.recept-name {
	padding: 2rem 0;
}

h3 {
	margin-top: 2rem;
}

.ingredients-container {
	padding: 1rem 0;
}

.ingredients-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.additional-inputs {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 1rem;
}

.non-required-inputs-container {
	width: 40%;
	min-width: 180px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 0;

	.non-required-input {
		display: flex;
		flex-direction: column;

	}
	
	:deep(.p-inputnumber-input) {
		width: 80px;
	}
}

.add-ingredients-button-container {
	margin-top: 2rem;
}
</style>
