<template>
    <div class="begin-main" v-if="mainDataGet">
        <div id="logo">
            <img src="../../assets/one/img/logo.png">
        </div>
        <h1>{{mainDataGet.name}}</h1>
        <div class="with-line">
            <div class="desc">
                共计{{questionsGet.length}}题
            </div>
            <div class="border left"></div>
            <div class="border right"></div>
            <div class="clearfix"></div>
        </div>
        <p class="welcome">
            {{mainDataGet.welcome}}
        </p>
        <mt-button type="primary" class="btn-begin" @click="beginAnswer">
            开始作答
            <i class="iconfont icon-more"></i>
        </mt-button>
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
        created(){
            console.log('获得问卷id: ', this.$route.params)
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
                    name: 'OneAnswer',
                    query: this.$route.query
                })
            }
        }
    }
</script>
