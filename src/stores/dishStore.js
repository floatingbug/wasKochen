import {ref, reactive} from "vue";


const dishImage = ref(null);

const foundDishes = ref([]);

const dish = reactive({
	recipeName: "",
	description: "",
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


function resetDish() {
    dish.recipeName = "";
    dish.description = "";
    dish.portions = 1;
    dish.difficulty = 1;
    dish.preparationTime = 0;
    dish.kilocalories = 1;
    dish.ingredients = [
        {
            quantity: 1,
            unit: "kg",
            ingredientName: "",
        },
    ];
    dish.preparation = "";
    dish.categories = [];
    dish.dishImageUrl = "";
}


export {dishImage, foundDishes, resetDish}
export default dish;
