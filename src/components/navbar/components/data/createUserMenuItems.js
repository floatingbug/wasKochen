import {ref} from "vue";
import signOut from "../utils/signOut.js";


const userMenuItems = ref([
]);


function createUserMenuItems(router){
	return ref([
		{
			label: "Benutzer Menü",
			items:[
				{
					label: "Gruppen",
					icon: "pi pi-users",
					command: () => router.push("/groups"),
				},
				{
					label: "Gruppen Suche",
					icon: "pi pi-search",
					command: () => router.push("/search-groups"),
				},
				{
					label: "Ausloggen",
					icon: "pi pi-sign-out",
					command: signOut,
				},
			],
		},
	]);
}


export default createUserMenuItems;
