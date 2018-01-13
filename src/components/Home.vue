<template>
    <div>
        <h3>Theme list</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'ThemeOne'}">Theme One</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'HelloWorld',
        data() {
            return {
            }
        },
        mounted() {
        },
        computed: {
        }
    }
</script>
<style scoped>

</style>
