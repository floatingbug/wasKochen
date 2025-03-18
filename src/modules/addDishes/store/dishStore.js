import {ref, reactive} from "vue";


const dishImage = ref(null);

const dish = reactive({
	recipeName: "testname",
	ingredients: [
		{
			quantity: 1,
			unit: "kg",
			ingredientName: "suger",
		},
	],
	preparation: "asedf",
	categories: ["schnell"],
	dishImageUrl: "",
});


export {dishImage}
export default dish;
