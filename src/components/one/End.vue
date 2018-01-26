<template>
    <div class="begin-main" v-if="mainDataGet">
        <div id="logo">
            <img src="../../assets/one/img/logo.png">
        </div>
        <h1>
            您已完成问卷调查
        </h1>
        <p class="welcome">
            {{mainDataGet.endWelcome}}
        </p>
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
