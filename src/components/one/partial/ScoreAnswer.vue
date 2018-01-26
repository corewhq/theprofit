<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-score">
            <div class="title">
                {{question.groupTitle}}-{{question.title}}
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

                <action-buttons></action-buttons>
            </div>
        </div>
    </div>
</template>
<script>
    import AnswerHeader from './AnswerHeader';
    import ActionButtons from './ActionButtons';

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
            nextClick() {
                this.$emit('next-click')
            },
            prevClick() {
                this.$emit('prev-click')
            }
        }
    }
</script>
