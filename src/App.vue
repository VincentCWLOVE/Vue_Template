<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseModel from './model/BaseModel'
import Tool from  './model/Tool'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
    mounted(){


        let model = new BaseModel({
            name:"vincent",
            age:"28",
            hobby:"love coding",
            phone:"13665639841"
        })
        console.log(model.name)


        // let model1 = new BaseModel([1,2,34,3])
        // console.log(model1)

        console.log(HelloWorld)
        
        console.log(Tool.isJsonObject({}))


    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
