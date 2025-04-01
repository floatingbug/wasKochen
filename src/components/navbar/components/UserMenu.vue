<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import useUser from "@/stores/userStore.js";
import Menu from "primevue/menu";


const router = useRouter();
const {user} = useUser();


const menu = ref();
const items = ref([
	{
		label: "Benutzer Menü",
		items: [
			{
				label: "Ausloggen",
				icon: "pi pi-sign-out",
				command: () => {
					localStorage.setItem("isSignedIn", false);
					localStorage.setItem("token", "");
					user.token = "";
					user.isSignedIn = false;
					router.push("/auth/sign-in");
				},
			},
		],
	},
]);


function toggle(event){
	menu.value.toggle(event);
}

</script>


<template>    
	<Button type="button" icon="pi pi-user" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
	<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
</template>   


<style scoped>
</style>
