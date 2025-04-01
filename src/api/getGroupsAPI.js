import useUser from "@/stores/userStore.js";


const {user} = useUser();


export default async function(){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/group/get-groups`, {
			method: "GET",
			headers: {
				authorization: user.token,
			},
		});

		const result = await response.json();
		
		return result;
	}
	catch(error){
		console.log(error);
	}
}
