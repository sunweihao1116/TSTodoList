<template>
	<div id="app">
		<Header/>
		<router-view></router-view>
		<Footer/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
body {
	background: url(./assets/images/banner.jpg) no-repeat;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.4);
}
</style>