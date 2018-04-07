<template>
    <div>
        <answer-header :title="question.groupTitle"></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                {{question.title}}
            </div>
            <div class="body">
                <textarea class="textarea" v-model="value" placeholder="请在此输入您的文本内容"></textarea>
                <div class="border"></div>
                <action-buttons :disabled="!value" :question="question" @nextClick="nextClick"></action-buttons>
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
