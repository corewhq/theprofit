<template>
    <div class="begin-main">
        <div id="logo">
            <img src="../../assets/one/img/logo.png">
        </div>
        <h1>满意吧餐厅-餐厅满意度</h1>
        <div class="with-line">
            <div class="desc">
                共计32题
            </div>
            <div class="border left"></div>
            <div class="border right"></div>
            <div class="clearfix"></div>
        </div>
        <p class="welcome">
            {{stuffGet.welcome}}
        </p>
        <el-button type="primary" class="btn-begin" @click="beginAnswer">
            开始作答
            <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'stuffGet'
            ])
        },
        methods: {
            beginAnswer(){
                this.$router.push('Answer')
            }
        }
    }
</script>
