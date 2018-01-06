<template>
    <div class="answer">
        <mt-range
            class="progress"
            v-model="rangeValue"
            :min="10"
            :max="90"
            :step="10"
            :bar-height="5">
            <span>
                {{rangeValue}}%
            </span>
        </mt-range>
        <div class="site-title">
            满意吧餐厅-餐后满意度
        </div>
        <score-answer></score-answer>
    </div>
</template>
<script>
    import ScoreAnswer from './partial/ScoreAnswer'
    import {mapGetters} from 'vuex';

    export default {
        components: {
            ScoreAnswer
        },
        data(){
            return {
                rangeValue: 50
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
