<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import FindDishes from "./findDishes/FindDishes.vue";
import AddDish from "./addDishes/AddDish.vue";
import ManageDishes from "./manageDishes/ManageDishes.vue";

</script>


<template>    
	<div class="tabs-container">
		<div class="tabs-content">
			<Tabs value="0">
				<TabList>
					<Tab value="0">Gerichte Finden</Tab>
					<Tab value="1">Gericht Anlegen</Tab>
					<Tab value="2">Gerichte Verwalten</Tab>
				</TabList>
				<TabPanels>
					<TabPanel value="0">
						<FindDishes></FindDishes>
					</TabPanel>
					
					<TabPanel value="1">
						<AddDish></AddDish>
					</TabPanel>
			
					<TabPanel value="2">
						<ManageDishes></ManageDishes>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>
</template>   


<style scoped>
.tabs-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.tabs-content {
	width: 100%;
}

.p-tabpanels {
	background: none;
	padding: 0;
}
</style>
