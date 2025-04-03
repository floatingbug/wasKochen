import {reactive} from "vue";


const user = reactive({
	isSignedIn: false,
	token: "",
});


function useUser(){
	return {user};
}


export default useUser;
