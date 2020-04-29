<template>
  <div id="footer">
    <span>written by {{this.author}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private author = 'swh';
}
</script>

<style scoped>
#footer {
  padding: 20px;
  text-align: center;
  color: #bfbfbf;
  font-size: 20px;
  text-shadow: 0px 1px 0px 1px;
}
</style>