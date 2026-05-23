import { watch, ref } from "vue";
let score = ref( 0);
export function Scoring(){


if(localStorage.getItem("Score")){
score.value = localStorage.getItem("Score");

}


watch(score, (newScore) => {
  localStorage.setItem("Score",newScore);
})


return score

}