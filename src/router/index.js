import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from "../modules/home/router/index.js";
import dashboardRoutes from "../modules/dashboard/router/index.js";
import dishRoutes from "../modules/dish/router/index.js";
import dishPageRoutes from "../modules/dish/dishPage/router/index.js";
import authRoutes from "../modules/auth/router/index.js";
import groupsRoutes from "../modules/groups/router/index.js";
import mealPlanRoutes from "../modules/mealPlan/router/index.js";
import legalInformationRoutes from "../modules/legalinformations/router/index.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		...homeRoutes,
		...authRoutes,
		...dashboardRoutes,
		...dishRoutes,
		...dishPageRoutes,
		...groupsRoutes,
		...mealPlanRoutes,
	  	...legalInformationRoutes,
	],
})

export default router
