import {reactive} from "vue";


const user = reactive({
	isSignedIn: false,
	token: "",
	groupIds: [],
});


function useUser(){
	return {user};
}


export default useUser;
