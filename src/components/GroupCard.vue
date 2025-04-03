<script setup>
const props = defineProps({
	group: Object,
});

</script>


<template>    
	<div class="content-card card-bg-glass">
		<header>
			<span>Gruppenname: </span>{{group.name}}
		</header>

		<main>
			<div class="info-container">
				<span>Anzahl Gruppenmitglieder: </span>{{group.memberIds.length}}
			</div>

			<div class="info-container">
				<span>Anzahl Gerichte: </span>{{group.dishIds.length}}
			</div>

			<div class="info-container">
				<span>Anzahl Nachrichten: </span>{{group.messages.length}}
			</div>
		</main>

		<footer>
		</footer>
	</div>
</template>   


<style scoped>
.content-card {
	width: 90%;
	min-width: 280px;
	max-width: 320px;
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

header {
	font-size: 1.2rem;
}

header span {
	font-size: 1.4rem
}

main {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
}
</style>
