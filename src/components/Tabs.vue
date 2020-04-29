<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter === state ? 'actived' :'']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear completed</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Tabs extends Vue {
  @Prop(String) private readonly filter!: string;
  @Prop() private readonly todos!: object[];
  // data
  private states: string[] = ['all', 'active', 'completed'];
  // computed
  get unFinishedTodoLength(): number {
    return this.todos.filter((todo: any) => !todo.completed).length;
  }
  // methods
  @Emit('clearAll') private clearAllCompleted() {
    //
  }
  @Emit('toggle')
  private toggleFilter(state: string) {
    return state;
  }
}
</script>

<style scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #ffffff;
  font-size: 14px;
}
.left,
.clear,
.tabs {
  padding: 0px 10px;
  box-sizing: border-box;
}
.left,
.clear {
  width: 150px;
}
.left {
  text-align: left;
}
.clear {
  text-align: right;
  cursor: pointer;
}
.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
.tabs span {
  display: inline-block;
  padding: 0px 10px;
  cursor: pointer;
  border: 1px solid rgba(175, 47, 47, 0);
}
.tabs span.actived {
  border-color: rgba(175, 47, 47, 0.4);
  border-radius: 5px;
}
</style>