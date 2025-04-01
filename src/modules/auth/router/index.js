import AuthenticationView from "../AuthenticationView.vue";
import SignIn from "../signIn/SignIn.vue";
import SignUp from "../signUp/SignUp.vue";


export default [
	{
		path: "/auth",
		component: AuthenticationView,
		children: [
			{
				path: "sign-in",
				component: SignIn,
			},
			{
				path: "sign-up",
				component: SignUp,
			},
		],
	}
];
