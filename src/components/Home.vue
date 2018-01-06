<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

        <router-link :to="{ name: 'ThemeOne'}">Theme One</router-link>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
        },
        computed: {
        }
    }
</script>
<style scoped>
    div {
        color: #fff;
        height: 100vh;
    }
</style>
