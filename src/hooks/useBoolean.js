import { ref } from 'vue';

export default function useBoolean(defaultValue = false) {
  const boolean = ref(defaultValue);

  const setTrue = () => (boolean.value = true);
  const setFalse = () => (boolean.value = true);
  const toggle = () => (boolean.value = !boolean.value);

  return { boolean, setTrue, setFalse, toggle };
}
