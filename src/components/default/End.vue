<template>
    <div class="begin-main" v-if="mainDataGet">
        <div id="logo">
            <img :src="'/page/mb/'+ $route.params.id +'/answer/logo'">
        </div>
        <h1>
            您已完成问卷调查
        </h1>
        <p class="welcome">
            {{mainDataGet.endWelcome}}
        </p>
        <div class="footer">
            技术支持@满意吧
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import $ from 'jquery';


    export default {
        components: {
        },
        beforeRouteEnter(to, from, next){
            if(to.query.zoom) {
                $('body').css('zoom', '60%');
            }
            next(vm => {
            });
        },
        mounted(){
            // 提交结果
            this.$toast('结果已提交，感谢参与！')
        },
        computed: {
            ...mapGetters([
                'mainDataGet',
                'questionsGet'
            ])
        },
        methods: {
            beginAnswer() {
                this.$router.push({
                    name: 'OneAnswer'
                })
            }
        }
    }
</script>
