<template>
    <div class="action-btns">
        <mt-button type="default" class="left" @click="prevClick">
            <i class="iconfont icon-back"></i>
            返回
        </mt-button>
        <mt-button type="primary" class="right" @click="nextClick">
            <span v-if="isEnd">提交</span>
            <span v-else>下一题</span>
            <i class="iconfont icon-more"></i>
        </mt-button>
        <div class="clearfix"></div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'stepGet',
                'questionsGet'
            ]),
            isEnd(){
                return this.stepGet === this.questionsGet.length
            }
        },
        methods: {
            ...mapActions([
                'pushStep'
            ]),
            nextClick() {
                if (this.isEnd) {
                    this.$router.push({
                        name: 'ThemeOneEnd'
                    });
                    return false;
                }
                this.pushStep(this.stepGet + 1);
            },
            prevClick() {
                if (this.stepGet === 1) {
                    this.$toast('已到第一页');
                    return false;
                }
                this.pushStep(this.stepGet - 1);
            }
        }
    }
</script>
