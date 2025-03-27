<script setup>
</script>


<template>    
	<nav>
		<ul class="menu-container card-bg-glass">
			<div class="container-left">
				<span>wasKochen</span>
			</div>

			<div class="container-right">
				<li>
					<Button as="router-link" to="/" severity="secondary">Home</Button>
				</li>

				<li>
					<Button as="router-link" to="/add-dish" severity="secondary">Gericht anlegen</Button>
				</li>
				
				<li>
					<Button as="router-link" to="/find-dishes" severity="secondary">Gerichte finden</Button>
				</li>
				
				<li>
					<Button as="router-link" to="/manage-dishes" severity="secondary">Gerichte verwalten</Button>
				</li>
			</div>
		</ul>
	</nav>
</template>   


<style scoped>
nav {
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.menu-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	list-style: none;
	border-radius: 0;
	margin: 0;
}

.container-right {
	display: flex;
	gap: 1rem;

	li {
		min-width: 150px;

		.p-button {
			width: 100%;
			text-decoration: none;
		}
	}
}

.container-left {
	display: flex;
	align-items: center;
	
	span {
		font-size: 1.4rem;
	}
}
</style>
