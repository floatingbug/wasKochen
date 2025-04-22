<script setup>
import {ref, onMounted} from "vue";
import {weekPlan, setWeekPlan} from "@/stores/weekPlanStore.js";
import useUser from "@/stores/userStore.js";
import getWeekPlanAPI from "@/api/getWeekPlanAPI.js";
import WeekPlan from "./weekPlan/WeekPlan.vue";


const {user} = useUser();
const isInitialized = ref(false);


onMounted(async () => {
	if(!weekPlan){
		const fetchedMealPlan = await getWeekPlanAPI({token: user.token});
		setWeekPlan(fetchedMealPlan.data.weekPlan);
	}

	isInitialized.value = true;
});

</script>


<template>    
	<div class="layout">
		<h1>Wochenplan</h1>

		<div class="layout-sidebar-left">
		</div>

		<div class="layout-body">
			<WeekPlan v-if="isInitialized"></WeekPlan>
		</div>

		<div class="layout-sidebar-right">
		</div>
	</div>
</template>   


<style scoped>
.layout {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 12rem;
}

.layout-body {	
	width: 90%;
	display: flex;
	align-items: center;
	flex-grow: 0;
}

@media(min-width: 480px) {
	h1 {
		font-size: 3rem;
	}
}

@media(min-width: 1024px) {
	h1 {
		font-size: 4rem;
		margin: 4rem 0;
	}
}
</style>
