<style scoped>
    .btn-circle {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        text-align: center;
        padding: 0 0;
        line-height: 34px;
        box-sizing: border-box;
    }
    .btn-circle.mint-button.mint-button--default{
        background-color: transparent;
        border-color: #616161;
        box-shadow: none;
    }
    .margin {
        margin: 5px;
    }
</style>
<template>
    <div>
        <answer-header :title="question.groupTitle"></answer-header>
        <div class="answer-content answer-score">
            <div class="title">
                {{question.title}}
            </div>
            <div class="body">
                <div class="score-display">
                    <div class="score">{{score}}</div>
                    <div class="score-display-main">
                        <div class="score-desc">score</div>
                        <div class="border left"></div>
                        <div class="border right"></div>
                    </div>
                    <img v-show="score <=5" src="../../../assets/one/icons/default/1.png" alt="">
                    <img v-show="score > 5 && score <=7" src="../../../assets/one/icons/default/2.png" alt="">
                    <img v-show="score > 7 &&score <= 9" src="../../../assets/one/icons/default/3.png" alt="">
                    <img v-show="score == 10" src="../../../assets/one/icons/default/4.png" alt="">
                    <div class="clearfix"></div>
                </div>
                <div class="score-tooltip">
                    <span v-show="score <=5">
                        不满意
                    </span>
                    <span v-show="score > 5 && score <=7">
                        一般
                    </span>
                    <span v-show="score > 7 &&score <= 9">
                        满意
                    </span>
                    <span v-show="score == 10">
                        非常满意
                    </span>
                </div>

                <div>
                    <mt-button class="btn-circle margin" v-for="i in 5" :key="i" :type="i == score ? 'primary': 'default'"  @click="score = i">{{i}}</mt-button>
                </div>
                <div>
                    <mt-button class="btn-circle margin" v-for="i in 5" :key="i" :type="i + 5 == score ? 'primary': 'default'" @click="score = i + 5">{{i + 5}}</mt-button>
                </div>
                <action-buttons :disabled="!score" :question="question" @nextClick="nextClick"></action-buttons>
            </div>
        </div>
    </div>
</template>
<script>
    import AnswerHeader from './AnswerHeader';
    import ActionButtons from './ActionButtons';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {
            AnswerHeader,
            ActionButtons
        },
        name: 'ScoreAnswer',
        data() {
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
            ...mapActions([
                'commitData'
            ]),
            nextClick() {
                console.log(this.question);
                this.commitData({
                    questionId: this.question.questionId,
                    groupId: this.question.groupId,
                    groupTitle: this.question.groupTitle,
                    title: this.question.title,
                    type: this.question.originalType,
                    value: this.score
                })
            }
        }
    }
</script>
