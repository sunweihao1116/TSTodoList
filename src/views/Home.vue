<template>
  <div class="home">
    <Todo></Todo>
  </div>
</template>

<script>
import Todo from '@/components/Todo';

export default {
  name: 'home',
  components: {
    Todo,
  },
};
</script>

<style lang="less" scope>
  .home {
    height: 60vh;
    padding: 0 30px;
  }
</style>
