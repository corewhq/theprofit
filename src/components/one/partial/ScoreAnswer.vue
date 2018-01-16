<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-score">
            <div class="title">
                您对本次消费的满意程度如何？
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
                    <mt-button type="default" class="left" @click="prevClick">
                        <i class="iconfont icon-back"></i>
                        返回
                    </mt-button>
                    <mt-button type="primary" class="right" @click="nextClick">
                        下一题
                        <i class="iconfont icon-more"></i>
                    </mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import AnswerHeader from './AnswerHeader';
    export default {
        components: {
            AnswerHeader
        },
        name: 'ScoreAnswer',
        data(){
            return {
                score: null
            }
        },
        props: {
            question: {
                type: Object,
                required: true
            }
        },
        methods: {
            nextClick(){
                this.$emit('next-click')
            },
            prevClick(){
                this.$emit('prev-click')
            }
        }
    }
</script>
