<script setup>
import {ref, onMounted} from "vue";
import {weekPlan, setWeekPlan} from "@/stores/weekPlanStore.js";
import useUser from "@/stores/userStore.js";
import getWeekPlanAPI from "@/api/getWeekPlanAPI.js";
import WeekPlan from "./weekPlan/WeekPlan.vue";


const {user} = useUser();
const isInitialized = ref(false);


onMounted(async () => {
	const fetchedMealPlan = await getWeekPlanAPI({token: user.token});

	if(!weekPlan){
		setWeekPlan(fetchedMealPlan.data.weekPlan);
	}

	isInitialized.value = true;
});

</script>


<template>    
	<div class="container">
		<div class="content">
			<WeekPlan v-if="isInitialized"></WeekPlan>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.content {
	width: 90%;
	min-width: 300px;
	max-width: 1500px;
}
</style>
