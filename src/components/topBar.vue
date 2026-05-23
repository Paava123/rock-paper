<template>

<div class="border-3 mt-10 m-auto w-1/2 p-5 px-10 flex rounded-2xl border-gray-500 justify-between font-bold  text-xl ">

    <div class="text-gray-200 text-4xl/8 font-bold flex flex-col justify-center">
        <img src="/logo.svg">
    </div>

    <div class="bg-white rounded-2xl p-8 px-20 flex flex-col items-center">
        <p class="text-blue-800 font-semibold">
            SCORE
        </p>
<p class="text-5xl text-gray-600 mb-1 font-bold ">{{ score }}</p>

    </div>

</div>


</template> 


<script setup>
import {ref} from 'vue';
import { Scoring } from '../composable/watchScore'
let score = Scoring()



</script>