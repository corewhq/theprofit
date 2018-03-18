<template>
    <div class="main">
        <router-view class="router-view"></router-view>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {

            };
        },
        computed:{
            ...mapGetters(['routeTransitionGet'])
        }
    }
</script>
<style lang="less">
    @import "../../assets/one/less/main.less";
</style>
