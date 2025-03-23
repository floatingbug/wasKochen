<script setup>
const emit = defineEmits(["submitOrCancel:action"]);


function submit(){
	emit("submitOrCancel:action", {
		action: "submit",
	});
}

function cancel(){
	emit("submitOrCancel:action", {
		action: "cancel",
	});
}

</script>


<template>    
	<div class="content">
		<Button
			severity="secondary"
			@click="submit"
		>
			Änderung speichern
		</Button>
		
		<Button
			severity="secondary"
			@click="cancel"
		>
			Abbrechen
		</Button>
	</div>
</template>   


<style scoped>
.content {
	width: 100%;
	display: flex;
	gap: 1rem;
	margin-top: 4rem;

	.p-button {
		flex: 1;
	}
}
</style>
