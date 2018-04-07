<template>
    <div>
        <answer-header :title="question.groupTitle"></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                {{question.title}}
            </div>
            <div class="body">
                <mt-radio
                    class="radio"
                    align="left"
                    v-model="value"
                    :options="question.options">
                </mt-radio>
                <div class="border"></div>
                <action-buttons :disabled="!value" :question="question" @nextClick="nextClick"></action-buttons>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import ActionButtons from './ActionButtons';
    import AnswerHeader from './AnswerHeader';
    import {mapGetters, mapActions} from 'vuex';

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
                $('.mint-radiolist-label').removeClass('checked');
                $('input.mint-radio-input[value="' + this.value + '"]').closest('.mint-radiolist-label').addClass('checked')
            }
        },
        methods: {
            ...mapActions([
                'commitData'
            ]),
            nextClick(){
                console.log(this.question);
                this.commitData({
                    questionId: this.question.questionId,
                    groupId: this.question.groupId,
                    groupTitle: this.question.groupTitle,
                    title: this.question.title,
                    type: this.question.originalType,
                    value: this.value
                });
            }
        }
    }
</script>
