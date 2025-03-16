import {ref} from "vue";


const categorieTags = ref([
	{
		label: "Lieblingsessen",
		id: "favoriteFood",
		isSelected: false,
	},
	{
		label: "gesung",
		id: "healthy",
		isSelected: false,
	},
	{
		label: "ungesund",
		id: "unhealthy",
		isSelected: false,
	},
]);


export default categorieTags;
