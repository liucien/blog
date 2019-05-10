<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

</style>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{

            }
        },
        mounted(){
            // fetch('https://api.github.com/repos/liucien/my-blog/issues').then(res => {
            //     console.log('fetch',res)
            // });
            axios.get('https://api.github.com/repos/liucien/my-blog/issues').then(res => {
                console.log('axios',res)
            })
        }
    }
</script>
