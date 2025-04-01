import {ref} from "vue";


const groups = ref([]);


function useGroups(){
	return {groups};
}


export default useGroups;
