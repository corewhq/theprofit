<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                {{question.title}}
            </div>
            <div class="body">
                <mt-checklist
                    class="select"
                    v-model="value"
                    :options="question.options">
                </mt-checklist>
                <div class="border"></div>
                <action-buttons></action-buttons>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import AnswerHeader from './AnswerHeader';
    import ActionButtons from './ActionButtons';

    export default {
        components: {
            AnswerHeader,
            ActionButtons
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
