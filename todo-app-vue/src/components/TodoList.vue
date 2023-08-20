<template>
    <ul>
      <li v-for="(todo, index) in props.todoList">      
        <span class="name">{{ todo.name }}</span>
        <span class="delete" @click="emit('deleteItem', index)">x</span>
      </li>
    </ul>
  </template>

<script setup>
  const emit = defineEmits(['deleteItem', 'submit']);
  const props = defineProps(['todoList']);
</script>