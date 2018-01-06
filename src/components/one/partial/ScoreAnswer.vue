<template>
    <div class="answer-content answer-score">
        <div class="title">
            您对本次消费的满意程度如何？
            <div class="sub-title">
                (根据你的喜欢程度进行打分)
            </div>
        </div>
        <div class="body">
            <div class="score-display">
                <div class="score">{{score}}</div>
                <div class="score-display-main">
                    <div class="score-desc">score</div>
                    <div class="border left"></div>
                    <div class="border right"></div>
                </div>
                <img src="../../../assets/one/img/biaoqing.png" alt="">
                <div class="clearfix"></div>
            </div>
            <div class="score-tooltip">
                非常喜欢
            </div>

            <mt-range
                class="score"
                v-model="score"
                :min="1"
                :max="10"
                :step="1"
                :bar-height="8">
            <span>
                {{score}}
            </span>
            </mt-range>

            <div class="action-btns">
                <mt-button type="default" class="left" @click="$router.go(-1)">
                    <i class="iconfont icon-back"></i>
                    返回
                </mt-button>
                <mt-button type="primary" class="right">
                    下一题
                    <i class="iconfont icon-more"></i>
                </mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
        },
        name: 'ScoreAnswer',
        data(){
            return {
                score: null
            }
        }
    }
</script>
