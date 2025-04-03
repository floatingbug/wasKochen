import DishView from "../DishView.vue";
import AddDish from "../addDishes/AddDish.vue";
import FindDishes from "../findDishes/FindDishes.vue";
import ManageDishes from "../manageDishes/ManageDishes.vue";


export default [
	{
		path: "/dish",
		component: DishView,
		children: [
			{
				path: "add-dish",
				component: AddDish,
			},
			{
				path: "find-dishes",
				component: FindDishes,
			},
			{
				path: "manage-dishes",
				component: ManageDishes,
			},
		],
	},
];
