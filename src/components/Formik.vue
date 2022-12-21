<script setup>
import { reactive, provide } from 'vue'

const props = defineProps({
  initialValues: {
    type: Object,
  },
  validate: {
    type: Function,
  },
  onSubmit: {
    type: Function,
  }
})

// values, errors, handleSubmit, isSubmitting
const values = reactive({})
const errors = reactive([])

function isInitialValid(){
  if (!props.initialValues) {
    errors.value.push(" Initial values couldn't be null.")
  }else{
    for((key,value) in props.initialValues){
      if(typeof(value) != "string"){
        errors.value.push(`The type of ${key} should be string.`)
      }
    }
  }
  if (errors.values == []){
    values = props.initialValues
  }
  return true
}

function handleSubmit(){
  isInitialValid()
  props.validate()
}

function isSubmitting(){
  return handleSubmit ? true :false
}

provide("values",values)
provide("errors",errors)
provide("handleSubmit",handleSubmit)
provide("isSubmitting",isSubmitting)
</script>

<template>
    <div>
      <slot :onSubmit="handleSubmit"/>
    </div>
</template>

<style scoped>

</style>
