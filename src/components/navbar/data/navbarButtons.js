import {ref} from "vue";


export default ref([
	{
		label: "Start",
		url: "/dashboard",
		isActive: false,
	},
	{
		label: "Wochenplaner",
		url: "/meal-plan",
		isActive: false,
	},
	{
		label: "Gerichte Finden",
		url: "/dish/find-dishes",
		isActive: false,
	},
	{
		label: "Gerichte Verwalten",
		url: "/dish/manage-dishes",
		isActive: false,
	},
	{
		label: "Gerichte Hinzufügen",
		url: "/dish/add-dish",
		isActive: false,
	},
]);
