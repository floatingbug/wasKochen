import {ref, reactive} from "vue";


const dishImage = ref(null);

const foundDishes = ref([]);

const dish = reactive({
	recipeName: "",
	descriptions: "",
	portions: 1,
	difficulty: 1,
	preparationTime: 0,
	kilocalories: 1,
	ingredients: [
		{
			quantity: 1,
			unit: "kg",
			ingredientName: "",
		},
	],
	preparation: "",
	categories: [],
	dishImageUrl: "",
});


export {dishImage, foundDishes}
export default dish;
