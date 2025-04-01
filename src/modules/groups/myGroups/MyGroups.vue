<script setup>
import useGroups from "@/stores/groupsStore.js";


const {groups} = useGroups();

</script>


<template>    
	<header>
		<h1>Meine Gruppen</h1>
	</header>

	<div class="groups-container">
		<div class="table-wrapper">
			<table>
				<caption>
					Gruppen in denen ich Mitglied bin
				</caption>
			
				<tr>
					<th>Gruppen Name</th>
					<th>Mitgliederzahl</th>
					<th>Vorhandene Gerichte</th>
					<th>Nachrichten</th>
				</tr>
				
				<tr class="group"
					v-for="(group, index) in groups" :key="index"
				>
					<td>
						{{group.name}}
					</td>
					<td>
						{{group.memberIds.length}}
					</td>
					<td>
						{{group.dishIds.length}}
					</td>
					<td>
						{{group.messages.length}}
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>   


<style scoped>
header {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.groups-container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.table-wrapper {
	width: 90%;
	overflow-x: auto;
}

table {
	width: 100%;
	border-collapse: collapse;
	background-color: var(--background-surface);
}

th, td, caption {
	padding: 1rem;
}

caption, th {
	text-align: left;
}

caption {
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--p-primary-color);
	background-color: var(--caption-bg);
}

th {
	background-color: var(--th-bg);
}

tr:nth-of-type(2n) {
	background-color: var(--tr-bg);
}
</style>
