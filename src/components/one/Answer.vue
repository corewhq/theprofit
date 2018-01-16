<template>
    <div class="answer">
        <!--<score-answer></score-answer>-->
        <div v-for="(q, index) in stuffGet.questions" v-if="index == currentIndex">
            <component v-bind:is="q.type + 'Answer'"
                       :question="q"
                       @next-click="nextClick(q, index)"
                       @prev-click="prevClick(q, index)"></component>
        </div>
    </div>
</template>
<script>
    import {FadeTransition} from 'vue2-transitions'
    import ScoreAnswer from './partial/ScoreAnswer';
    import SelectAnswer from './partial/SelectAnswer';
    import RadioAnswer from './partial/RadioAnswer';
    import TextAnswer from './partial/TextAnswer';
    import {mapGetters, mapActions} from 'vuex';
    import {Toast} from 'mint-ui';

    export default {
        components: {
            ScoreAnswer,
            SelectAnswer,
            RadioAnswer,
            TextAnswer,
            FadeTransition
        },
        data() {
            return {
                currentIndex: 0,
                rangeValue: 50,
                answerView: ''
            }
        },
        computed: {
            ...mapGetters([
                'stuffGet'
            ])
        },
        methods: {
            ...mapActions([
                'pushStep'
            ]),
            nextClick() {
                if (this.currentIndex === this.stuffGet.questions.length - 1) {
                    Toast('已到最后一页');
                    return false;
                }
                this.currentIndex = this.currentIndex + 1;
                this.pushStep(this.currentIndex + 1);
            },
            prevClick() {
                if (this.currentIndex === 0) {
                    Toast('已到第一页');
                    return false;
                }
                this.currentIndex = this.currentIndex - 1;
                this.pushStep(this.currentIndex + 1);
            }
        }
    }
</script>
