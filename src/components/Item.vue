<template>
	<div :class="['todo-item', todo.completed ? 'completed' : '' ]">
		<input type="checkbox" class="toggle" v-model="todo.completed" />
		<label>{{todo.content}}</label>
		<button class="destroy" @click="deletetodo"></button>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
	@Prop() private readonly todo!: any;
	// methods
	@Emit('del')
	private deletetodo(): void {
		return this.todo.id;
	}
}
</script>

<style scoped lang="less">
	.todo-item {
		position: relative;
		// background: #ffffff;
		font-size: 24px;
		border-bottom: 1px solid rgba(0, 0, 0, .06);
	}
	.todo-item:hover .destroy:after {
		content: 'x';
	}
	label {
		white-space: pre-line;
		word-break: break-all;
		padding: 15px 60px 15px 15px;
		margin-left: 45px;
		display: block;
		transition: color 0.4s;
	}
	.completed label {
		color: #d9d9d9;
		text-decoration: line-through;
	}
	.toggle {
		left: 0;
		text-align: center;
		width: 40px;
		height: 40px;
		position: absolute;
		font-size: 20px;
		top: 0;
		bottom: 0;
		margin: auto 0;
		border: none;
		outline: none;
		appearance: none;
	}
	.toggle:before {
		content:'';
		background: url('../assets/images/round.svg') no-repeat;
		background-size: 40px 40px;
		position: absolute;
		left: 12px;
		cursor: pointer;
		width: 40px;
		height: 40px;
	}
	.toggle:checked:before {
		background: url('../assets/images/done.svg') no-repeat;
		background-size: 40px 40px;
		position: absolute;
		left: 12px;
		cursor: pointer;
	}
	.destroy {
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 40px;
		height: 40px;
		margin: auto;
		font-size: 30px;
		color: #cc9a9a;
		background-color: transparent;
		appearance: none;
		border-width: 0;
		cursor: pointer;
		outline: none;
	}
</style>