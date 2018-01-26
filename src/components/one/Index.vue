<template>
    <div class="main">
        <router-view class="router-view"></router-view>
    </div>
</template>
<script>
    import '../../assets/one/less/main.less';

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
<style>

</style>
