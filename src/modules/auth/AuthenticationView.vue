<script setup>
</script>


<template>    
	<div class="auth-container">
		<router-view />
	</div>
</template>   


<style scoped>
.auth-container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
}

@media(min-width: 768px){
	.auth-container {
		margin-top: 6rem;
	}
}

@media(min-width: 1366px){
	.auth-container {
		margin-top: 12rem;
	}
}
</style>
