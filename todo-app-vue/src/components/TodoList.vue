<template>
    <ul>
      <li v-for="(todo, index) in props.todoList">      
        <span class="name">{{ todo.name }}</span>
        <span class="delete" @click="emit('deleteItem', index)">x</span>
      </li>
    </ul>
    <!-- {{ props.todoList }} -->
    <!-- {{ props.todoList }} -->
    <!-- <ul>
      
      <li      
        v-for="(todo, index) in TodoList" :key="index">
        <span class="name">{{todo.name}}</span>
        <span class="delete" @click="Delete(todo.id)">x</span>
      </li>
    </ul> -->
  </template>

<script setup>
  const emit = defineEmits(['deleteItem', 'submit']);
  const props = defineProps(['todoList']);

  console.log(props);
</script>
  
  <!-- <script>
  import { defineEmits, defineProps } from 'vue';
  
  export default {
    setup() {
      const emit = defineEmits(['deleteItem', 'submit']);
      const props = defineProps(['todoList']);      
      console.log(props);
      return {
        emit,
        props,
      };
    },
  };
  </script> -->
  