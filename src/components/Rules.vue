<template>
<div class="fixed inset-0 bg-black/50 z-8" v-show="showing"></div>
<button class="border-2 border-white rounded-xl text-white p-2 px-10 text-xl tracking-wider fixed bottom-5 right-5" @click="ShowRules"> RULES </button>

<div v-show="showing" class="flex flex-col bg-white rounded-xl w-1/4 m-auto p-10 gap-10 absolute right-1/2 left-1/2  -translate-x-1/2  top-1/5 -translate-y-1/10 z-9" >
    <div class="flex justify-between text-3xl font-bold text-gray-700 ">
        <p>RULES</p>
        <button @click="ShowRules" type="button"> <img src="/icon-close.svg" alt="close"></button>
    </div>
    <img src="/image-rules.svg">
</div>


</template> 
<script setup>
import {ref} from 'vue';
let showing = ref(false)
function ShowRules(){

showing.value = !showing.value

}

</script>