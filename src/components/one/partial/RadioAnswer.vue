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
                <action-buttons></action-buttons>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import ActionButtons from './ActionButtons';
    import AnswerHeader from './AnswerHeader';

    export default {
        components: {
            ActionButtons,
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
