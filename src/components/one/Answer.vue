<template>
    <div class="answer">
        <!--<score-answer></score-answer>-->
        <div v-for="(q, index) in questionsGet" v-if="index == stepGet - 1" :key="index">
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
                rangeValue: 50,
                answerView: ''
            }
        },
        computed: {
            ...mapGetters([
                'questionsGet',
                'stepGet'
            ])
        },
        methods: {
            ...mapActions([
                'pushStep'
            ])
        }
    }
</script>
