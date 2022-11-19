<template>
  <div class="v__input__spinner">
    <button
      @click="decreaseNumber"
      style="width: 30%; height: 2.5rem"
      :class="buttonClass"
      :disabled="disabled"
    >
      -
    </button>
    <input
      type="number"
      :value="modelValue"
      @input="onInput"
      :class="inputClass"
      :min="min"
      :max="max"
      debounce="500"
      :disabled="disabled"
      style="height: 2.5rem; width: 40%"
    />
    <button
      @click="increaseNumber"
      style="width: 30%; height: 2.5rem"
      :class="buttonClass"
      :disabled="disabled"
    >
      +
    </button>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

interface Props {
  modelValue?: number | string;
  min?: number;
  max?: number;
  step?: number;
  inputClass?: string;
  mouseDownSpeed?: number;
  buttonClass?: string;
  integerOnly?: boolean;
  disabled?: boolean;
}
const $emit = defineEmits<{
  (e: 'update:model-value', p: unknown): void;
}>();
const $props = withDefaults(defineProps<Props>(), {
  buttonClass: 'v-isn__button',
  disabled: false,
  inputClass: 'vnis__input',
  integerOnly: true,
  max: 100,
  min: 1,
  mouseDownSpeed: 100,
  step: 1,
  modelValue: 0,
});
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const { buttonClass, disabled, inputClass, max, min, modelValue, step } =
  toRefs($props);

/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * decreaseNumber
 */
function decreaseNumber() {
  if (isNaN(min.value) || Number(modelValue.value) - step.value > min.value)
    $emit('update:model-value', Number(modelValue.value) - step.value);
}
/**
 * increaseNumber
 */
function increaseNumber() {
  if (isNaN(max.value) || Number(modelValue.value) + step.value < max.value)
    $emit('update:model-value', Number(modelValue.value) + step.value);
}
/**
 * onInput
 * @param evt
 */
function onInput(evt: Event) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const input = evt.target.value;
  if (!isNaN(input)) $emit('update:model-value', input);
}
</script>

<style lang="scss">
.v__input__spinner {
  input {
    -webkit-appearance: none;
    border: 1px solid #ebebeb;
    font-size: 16px;
    height: 2rem;
    margin: 0;
    outline: none;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  button {
    -webkit-appearance: none;
    transition: background 0.5s ease;
    background: #387e90;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    margin: 0;
    height: 2rem;
    width: 2rem;
  }
}
</style>
