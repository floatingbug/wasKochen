<script setup>
import useGroups from "@/stores/groupsStore.js";
import GroupCard from "@/components/GroupCard.vue";


const {groups} = useGroups();

</script>


<template>    
	<div class="container">
		<div class="content">
			<header>
				<h1>Meine Gruppen</h1>
			</header>
			
			<main>
				<GroupCard 
					:group="group"
					v-for="(group, index) in groups" :key="index"
				>
				</GroupCard>
			</main>
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
	max-width: 1024px;
	display: flex;
	flex-direction: column;

}

main {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
}
</style>
