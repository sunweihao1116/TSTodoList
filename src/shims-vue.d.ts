// 声明所有以 .vue 结尾的文件，默认导入 vue ，默认导出 Vue，用以在项目中ts文件识别 .vue 结尾文件。
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
