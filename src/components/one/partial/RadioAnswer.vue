<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                您在消费过程中，是否遇到下面情况？
            </div>
            <div class="body">
                <mt-radio
                    class="radio"
                    align="left"
                    v-model="value"
                    :options="question.options">
                </mt-radio>
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
                value: ''
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
                console.log(this.value)
                $('.mint-radiolist-label').removeClass('checked');
                console.log($('input.mint-radio-input:checked').length)
                $('input.mint-radio-input[value="' + this.value + '"]').closest('.mint-radiolist-label').addClass('checked')
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
