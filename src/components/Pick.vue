<template>
<main class="grid grid-cols-2 mt-10 place-self-center gap-20 gap-y-0 bg-[url(/bg-triangle.svg)] bg-center bg-no-repeat" v-show="picking">
<div @click="PlayAGame(0)"><Blue ></Blue></div>
<div @click="PlayAGame(1)"><Orange ></Orange></div>
<div @click="PlayAGame(2)" class="align-items justify-center col-span-2"><Red ></Red></div>

</main>
<div class="grid grid-cols-3 mt-10 place-self-center gap-20 gap-y-0 " v-show="!picking">




        <div class="flex flex-col text-4xl text-white align-items justify-center gap-5">
            <div class="flex align-items justify-center">You picked:</div>
           
            <Blue v-if="num==0"></Blue>
            <Orange v-else-if="num==1"></Orange>
            <Red v-else></Red>
            
        </div>
        <div class="flex flex-col text-xl text-white align-items justify-center gap-5">
            <p class="flex align-items justify-center text-7xl"> {{ result }}</p>
        <button type="button" @click="Again" class="bg-white p-2 text-black rounded-xl"> Play again</button>
    </div>
        <div class="flex flex-col text-xl text-white align-items justify-center gap-5">
               <div class="flex align-items justify-center">House picked:</div>
               <div >
            <Blue v-if="rand==0"></Blue>
            <Orange v-else-if="rand==1"></Orange>
            <Red v-else></Red>
            </div>
            
        </div>
   


</div>
</template>

<script setup>
import { Scoring } from '../composable/watchScore';
import {ref} from 'vue';
import Blue from './blue.vue';
import Orange from './orange.vue';
import Red from './red.vue';
let score = Scoring()
let picking = ref(true)
let rand = ref(0)
let num = ref(0)
let result = ref("")

function PlayAGame(number){
    num.value = number;
    picking.value = !picking.value
rand.value = Math.floor(Math.random()*3)

if(rand.value === number){
result.value = "Draw"
}else

if(rand.value === 0 && number === 1 || rand.value === 1 && number === 2 || rand.value === 2 && number === 0){
result.value = "Win"
score.value++;
}else{
   result.value = "Lose"
}

}


function Again(){
        picking.value = !picking.value
}


</script>