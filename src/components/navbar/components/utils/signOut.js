import useUser from "@/stores/userStore.js";


const {user} = useUser();


export default function(){
	user.isSignedIn = false;
	user.token = "";
	localStorage.setItem("isSignedIn", false);
	localStorage.setItem("token", "");
}
