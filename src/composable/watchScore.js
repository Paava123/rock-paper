import { watch, ref } from "vue";
const score = ref( localStorage.getItem("Score") ?? 0);
export function Scoring(){



watch(score, (newScore) => {
  localStorage.setItem("Score",newScore);
})


return score

}