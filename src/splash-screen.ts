import { ref } from 'vue';

const isShown = ref(false);
const setIsLoading = (value: boolean) => {
  isShown.value = value;
};

export { isShown, setIsLoading };