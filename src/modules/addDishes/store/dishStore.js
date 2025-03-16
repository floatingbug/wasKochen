import {reactive} from "vue";


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
	dishImage: null,
	dishImgUrl: "",
});


export default dish;
