<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import MyGroups from "./myGroups/MyGroups.vue";
import CreateGroup from "./createGroup/CreateGroup.vue";


</script>


<template>    
	<div class="tabs-container">
		<div class="tabs-content">
			<Tabs value="0">
				<TabList>
					<Tab value="0">Meine Gruppen</Tab>
					<Tab value="1">Gruppen Finden</Tab>
					<Tab value="2">Gruppe Erstellen</Tab>
				</TabList>
				<TabPanels>
					<TabPanel value="0">
						<div class="panel-container">
							<MyGroups></MyGroups>
						</div>
					</TabPanel>
					
					<TabPanel value="1">
					</TabPanel>
			
					<TabPanel value="2">
						<div class="panel-container">
							<CreateGroup></CreateGroup>
						</div>
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

.panel-container {
	width: 100%;
	margin-top: 2rem;
}
</style>
