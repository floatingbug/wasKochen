import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from "../modules/home/router/index.js";
import dashboardRoutes from "../modules/dashboard/router/index.js";
import addDishRoutes from "../modules/addDishes/router/index.js";
import findDishesRoutes from "../modules/findDishes/router/index.js";
import dishPageRoutes from "../modules/dishPage/router/index.js";
import manageDishesRoutes from "../modules/manageDishes/router/index.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  ...homeRoutes,
	  ...dashboardRoutes,
	  ...addDishRoutes,
	  ...findDishesRoutes,
	  ...dishPageRoutes,
	  ...manageDishesRoutes,
  ],
})

export default router
