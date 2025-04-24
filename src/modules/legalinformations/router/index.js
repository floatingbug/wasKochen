import PrivacyPolicyView from "../components/PrivacyPolicy.vue";
import LegalNotice from "../components/LegalNotice.vue";


const legalInformationRoutes = [
	{
		path: "/privacy-policy",
		name: "privacyPolicy",
		component: PrivacyPolicyView
	},
	{
		path: "/legal-notice",
		name: "legalNotice",
		component: LegalNotice, 
	}
];


export default legalInformationRoutes;
