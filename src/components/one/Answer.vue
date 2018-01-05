<template>
    <div>
        <h1>答题</h1>
        <div class="with-line">
            <div class="desc">
                共计32题
            </div>
            <div class="border left"></div>
            <div class="border right"></div>
            <div class="clearfix"></div>
            <el-button @click="$router.go(-1)">返回</el-button>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        data(){
            return {
                vuegConfig:{
                    disable: false
                }
            }
        },
        computed: {
            ...mapGetters([
                'stuffGet'
            ])
        },
        methods: {
            beginAnswer() {
                this.$router.push('Answer')
            }
        }
    }
</script>
