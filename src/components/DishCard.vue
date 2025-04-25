<script setup>
import {ref} from "vue";
import Rating from "./Rating.vue";


const props = defineProps({
	dish: Object,
	isRatingReadOnly: Boolean,
	isAddMealButtonActive: Boolean,
	isCardHover: { 
		type: Boolean,
		default: true,
	},
});




const API_URL = ref(import.meta.env.VITE_API_URL);
const IMAGE_NAME_STARTS_WITH = import.meta.env.VITE_IMAGE_NAME_STARTS_WITH;

</script>

<template>                                                                            
	<div 
		class="dish-card card-bg-glass"
		:class="isCardHover ? 'dish-card-hover' : ''"
	>                                             
        <div class="dish-card-header">                                                                      
            <img                                                                      
                v-if="dish.dish.dishImageUrl.startsWith(IMAGE_NAME_STARTS_WITH)"      
				:src="`${dish.dish.dishImageUrl}`" alt=""
			>                            
            <img                                                                      
                v-else                                                                
				:src="`${API_URL}${dish.dish.dishImageUrl}`" alt=""
			>                  

			<div 
				v-if="isAddMealButtonActive"
				class="add-dish-button-container card-bg-glass"
			>
            	<slot name="addMealButton">                                                     
            	</slot>                                                                   
            </div>
        </div>                                                                     
                                                                                      
        <div class="dish-card-body">                                                                        
			<div class="dish-rating">                                                   
				<Rating :isReadOnly="isRatingReadOnly"></Rating>
				<span>&nbsp keine Bewertung.</span>
			</div>                                                                

            <div class="dish-content">                                                         
                <div class="dish-info">                                                    
                    <span class="dish-title">{{dish.dish.recipeName}}</span>  
                                                                                      
                    <div class="dish-description">                                         
                        {{dish.dish.description}}                                     
                    </div>                                                            
                </div>                                                                 
            </div>                                                                    
                                                                                      
            <div class="dish-tags">                                                      
                <Badge                                                                
                    v-for="(categorie, index) in dish.dish.categories" :key="index"   
                >                                                                     
                    {{categorie}}                                                     
                </Badge>                                                              
            </div>                                                                    
        </div>                                                                       
                                                                                      
        <div class="dish-card-footer">                                                                      
            <span v-tooltip="'Portionen'">                                            
                <i class="pi pi-users"></i>                                           
                {{dish.dish.portions}}                                                
            </span>                                                                  
                                                                                      
            <span v-tooltip="'Zubereitungszeit'">                                     
                <i class="pi pi-clock">&nbsp</i>                                      
                <span v-if="dish.dish.preparationTime > 1">                           
                    {{dish.dish.preparationTime}}                                     
                </span>                                                               
                <span v-else>                                                         
                    n/A                                                               
                </span>                                                               
            </span>                                                                  
                                                                                      
            <span v-tooltip="'Schwierigkeitsgrad (von 1 bis 10)'">                    
                <i class="pi pi-chart-line">&nbsp</i>                                 
                <span v-if="dish.dish.difficulty > 1">                                
                    {{dish.dish.difficulty}}                                          
                </span>                                                               
                <span v-else>                                                         
                    n/A                                                               
                </span>                                                               
            </span>                                                                  
                                                                                      
            <span v-tooltip="'Kilokalorien'">                                         
                <i class="pi pi-bolt">&nbsp</i>                                       
                <span v-if="dish.dish.kilocalories > 1">                              
                    {{dish.dish.kilocalories}}                                        
                </span>                                                               
                <span v-else>                                                         
                    n/A                                                               
                </span>                                                               
            </span>                                                                  
        </div>                                                                     
    </div>                                                                            
</template>                                                                           
                                                                                      
<style scoped>                                                                        
.dish-card {                                                                          
    width: 30%;                                                                       
    min-width: 280px;                                                                 
    max-width: 500px;                                                                 
    height: 450px;                                                                    
    display: flex;                                                                    
    flex-direction: column;                                                           
    align-items: center;                                                              
    overflow: hidden;                                                                 
    border-color: var(--border-color);                                                
	cursor: pointer;
	transition: 250ms;
                                                                                      
    h3 {                                                                              
        text-align: center;                                                           
    }                                                                                 
}                                                                                     
                                                                                      
h1 {                                                                                  
    text-align: center;                                                               
}                                                                                     
                                                                                      
.dish-card-header {                                                                              
    width: 100%;                                                                      
    height: 40%;                                                                      
	position: relative;
    display: flex;                                                                    
    justify-content: center;                                                          
    align-items: center;                                                              
}                                                                                     

.dish-title {
	font-size: 1.2rem;
	color: var(--text-contrast);
}
                                                                                      
.dish-card-header img {                                                                          
    width: 100%;                                                                      
    height: 100%;                                                                     
    object-fit: cover;                                                                
}                                                                                     
                                                                                      
.dish-card-body {                                                                                
    width: 100%;                                                                      
    height: 50%;                                                                      
    display: flex;                                                                    
    flex-direction: column;                                                           
                                                                                      
}                                                                                     

.dish-content, .dish-tags {                                                                   
	height: 50%;                                                                  
	display: flex;                                                                
																				  
}                                                                                 

.dish-info, .dish-rating {                                                               
	width: 100%;
	padding: 1rem;                                                            
	overflow: hidden;
}                                                                             
																				  
.dish-content .dish-info {                                                                      
	display: flex;                                                                
	flex-direction: column;                                                       
	gap: 1rem;                                                                    
}                                                                                 

.dish-rating {
	display: flex;
}
																				  
.dish-tags {                                                                         
	display: flex;                                                                
	align-items: center;                                                          
	flex-wrap: wrap;                                                              
	gap: 1rem;                                                                    
	padding: 1rem;                                                                
	overflow: hidden;                                                               
}                                                                                 

.dish-tags .p-badge {
	background-color: var(--dish-tag-color);
}

.add-dish-button-container {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}
                                                                                      
.dish-card-footer {                                                                              
    width: 100%;                                                                      
    height: 10%;                                                                      
    display: flex;                                                                    
    justify-content: space-around;                                                    
    gap: 1rem;                                                                        
    border-top: 1px solid var(--border-color);                                        
    margin-top: auto;                                                                 
    padding: 1rem;                                                                    
}                                                                                     

.dish-card.dish-card-hover:hover {
	transform: scale(1.01);
	box-shadow: 0 4px 20px var(--p-primary-color);
}
</style>
