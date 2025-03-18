import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from "../modules/dashboard/router/index.js";
import addDishRoutes from "../modules/addDishes/router/index.js";
import findDishesRoutes from "../modules/findDishes/router/index.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  ...dashboardRoutes,
	  ...addDishRoutes,
	  ...findDishesRoutes,
  ],
})

export default router
