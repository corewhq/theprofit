<template>
    <div>
        <answer-header :title="question.groupTitle"></answer-header>
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
                <action-buttons :disabled="value.length == 0" :question="question" @nextClick="nextClick"></action-buttons>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import AnswerHeader from './AnswerHeader';
    import ActionButtons from './ActionButtons';
    import {mapGetters, mapActions} from 'vuex';
    import _indexOf from 'lodash/indexOf';

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
        methods: {
            ...mapActions([
                'commitData'
            ]),
            nextClick() {
                console.log(this.question);
                for (let obj of this.question.options) {
                    this.commitData({
                        questionId: obj.optionId,
                        groupId: this.question.groupId,
                        groupTitle: this.question.title,
                        title: obj.label,
                        type: this.question.originalType,
                        value: _indexOf(this.value, obj.optionId) > -1
                    });
                }
            }
        }
    }
</script>
