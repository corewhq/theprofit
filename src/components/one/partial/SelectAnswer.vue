<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                您在消费过程中，是否遇到下面情况？
            </div>
            <div class="body">
                <mt-checklist
                    class="select"
                    v-model="value"
                    :options="question.options">
                </mt-checklist>
                <div class="border"></div>
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
    import $ from "jquery";
    import AnswerHeader from './AnswerHeader';
    export default {
        components: {
            AnswerHeader
        },
        name: 'SelectAnswer',
        data() {
            return {
                value: []
            }
        },
        props: {
            question: {
                type: Object,
                required: true
            }
        },
        watch: {
            value() {
                $('.mint-checklist-label').removeClass('checked');
                $('input.mint-checkbox-input:checked').closest('.mint-checklist-label').addClass('checked')
            }
        },
        methods:{
            nextClick(){
                this.$emit('next-click')
            },
            prevClick(){
                this.$emit('prev-click')
            }
        }
    }
</script>
