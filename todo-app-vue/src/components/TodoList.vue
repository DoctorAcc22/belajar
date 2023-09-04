<template>
  <ul>
    <li v-for="(todo, index) in props.todoList">      
      <span name="name">{{ todo.name }}</span>
      <!-- <span type="button" name="delete" @click="emit('deleteItem', index)">x</span> -->
      <button @click="emit('deleteItem', index)">X</button>
    </li>
  </ul>
</template>

<script setup>
  const emit = defineEmits(['deleteItem', 'submit']);
  const props = defineProps(['todoList']);
</script>