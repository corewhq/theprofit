<template>
    <div>
        <router-view class="router-view"></router-view>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'HelloWorld',
        data() {
            return {}
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
            })
        },
        mounted() {
        },
        computed: {}
    }
</script>
<style scoped>

</style>
