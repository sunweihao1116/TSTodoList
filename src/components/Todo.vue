<template>
	<div class="container">
		<input
		type="text"
    class="add-input"
    autofocus="autofocus"
    placeholder="接下来做什么"
    @keyup.enter="addTodo"/>
		<div class="itmes">
			 <Item
				:todo="todo"
				v-for="todo in filteredTodos"
				:key="todo.id"
				@del="deleteTodo"/>
		</div>
    <Tabs
    :filter="filter"
    :todos="todos"
    @clearAll="clearAllComplated"
    @toggle="toggleFilter"/>
	</div>
</template>

<script lang="ts">
import Item from './Item.vue';
import Tabs from './Tabs.vue';
import { Component, Vue } from 'vue-property-decorator';
let id: number = 0;

// interface todos {
// 	id: number,
// 	content: string
// 	completed: boolean,
// }
@Component({
  components: {
    Item,
		Tabs,
  },
})
export default class Todo extends Vue {
	// data
	private todos: object[] = [];
	private filter: string = 'all';
	// computed
	private get filteredTodos(): object[] {
		if (this.filter === 'all') {
			return this.todos;
		}
		const completed = this.filter === 'completed';
		return this.todos.filter( (todo: any) => todo.completed === completed );
	}
	// method
	private addTodo(e: any): void {
		if (e.target.value === '') {
			alert ('您还没有输入内容');
		} else {
			this.todos.unshift({
				id: id++,
				content: e.target.value,
				completed: false,
			});
			e.target.value = '';
		}
	}
	private deleteTodo(itemId: number): void {
		/*findIndex----取第一个符合条件的下标*/
		this.todos.splice( this.todos.findIndex((todo: any) => todo.id === itemId ), 1);
	}
	private clearAllComplated(): void {
		/*留下未完成的*/
		this.todos = this.todos.filter((todo: any) => !todo.completed);
	}
	private toggleFilter(state: any): void {
		this.filter = state;
	}
}
</script>

<style scoped>
	.container{
    min-width: 600px;
		height: 100%;
    margin: 0px  auto;
    box-shadow: 0px 0px 5px #666;
		display: flex;
		flex-direction: column;
	}
	.add-input{
		position: relative;
		margin: 0px;
		width :100%;
		font-size: 24px;
		font-family: inherit ;
		font-weight:inherit;
		line-height: 1.4rem;
		border: 0;
		outline: none ;
		color: inherit;
		padding: 6px;
		border: 1px solid #999;
		box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0);
		box-sizing: border-box;
		padding: 16px 16px 16px 60px;
		border: none;
	}
	.itmes {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>