<template>
  <div class="container">
    <input type="text" v-model="msg">
    <button @click="create">Create</button>

    <TodoList :todoList="todoList" :deleteItem="deleteItem" />
  </div>
</template>
  
<script>
import TodoList from './TodoList.vue';
import { ref } from 'vue';
export default {
  components: {TodoList},

  setup() {
    let exampleData = [
      { id: 1, name: 'cooking' },
      { id: 2, name: 'eating' },
      { id: 3, name: 'dancing' },
    ];

    const todoList = ref(exampleData);
    const msg = ref('');
    
    const create = () => {
      const id = todoList.value.length + 1;
      const newItem = { id, name: msg.value };
      todoList.value.push(newItem);
      msg.value = '';
    }
    
    const deleteItem = (idx) => {
      todoList.value = todoList.value.filter((item) => item.id !== idx);
    }    

    return {
      todoList: todoList,
      create: create,
      delete: deleteItem,
      msg
    };
  }
}
</script>