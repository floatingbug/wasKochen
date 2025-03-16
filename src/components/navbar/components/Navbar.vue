<script setup>
</script>


<template>    
	<nav>
		<ul class="menu-container card-bg-glass">
			<div class="container-left">
				<span>kochWas</span>
			</div>

			<div class="container-right">
				<li>
					<Button as="router-link" to="/">Home</Button>
				</li>

				<li>
					<Button as="router-link" to="/add-dish">Gericht anlegen</Button>
				</li>
				
				<li>
					<Button>Gerichte finden</Button>
				</li>
				
				<li>
					<Button>Gerichte verwalten</Button>
				</li>
			</div>
		</ul>
	</nav>
</template>   


<style scoped>
nav {
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.menu-container {
	width: 90%;
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	padding: 1rem;
	list-style: none;
	margin: 0;
}

.container-right {
	display: flex;
	gap: 1rem;

	li {
		min-width: 150px;

		.p-button {
			width: 100%;
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
