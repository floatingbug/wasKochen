<script setup>
import {ref} from "vue";
import Menu from "primevue/menu";


const emit = defineEmits(["dishMenu:action"]);


const menu = ref();
const items = ref([
	{
		label: "Delete Dish",
		icon: "pi pi-trash",
		command: function(){
			emit("dishMenu:action", {
				action: "delete",
			});
		},
	},
]);


function toggle(event){
	menu.value.toggle(event);
}

</script>


<template>    
	<Button 
		@click="toggle" 
		severity="secondary"
	>
		<i class="pi pi-ellipsis-v"></i>
	</Button>
	<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
</template>   


<style scoped>
</style>
