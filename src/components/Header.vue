<template>
	<div class="container">
		<h1 @click='onGoBack'>todo</h1>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private onGoBack(): void {
    console.log('sss');
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
h1 {
  font-size: 100px;
  color: rgba(175,47,47,0.4);
  font-weight: 100;
  padding: 20px;
  margin: 20px;
}
</style>