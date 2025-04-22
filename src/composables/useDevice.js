import {ref} from "vue";


const device = ref("");
const displaySize = ref(0);


window.addEventListener("resize", () => {
	displaySize.value = window.innerWidth;
})


export default function(){
	return {displaySize, device}
}
