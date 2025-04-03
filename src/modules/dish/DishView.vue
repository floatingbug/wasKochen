<script setup>
import FindDishes from "./findDishes/FindDishes.vue";
import AddDish from "./addDishes/AddDish.vue";
import ManageDishes from "./manageDishes/ManageDishes.vue";

</script>


<template>    
	<div class="tabs-container">
		<div class="tabs-content">
			<Router-view></Router-view>
		</div>
	</div>
</template>   


<style scoped>
</style>
