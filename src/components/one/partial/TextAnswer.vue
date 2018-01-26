<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                {{question.title}}
            </div>
            <div class="body">
                <textarea class="textarea" placeholder="请在此输入您的文本内容"></textarea>
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
            ActionButtons,
            AnswerHeader
        },
        name: 'SelectAnswer',
        data() {
            return {
                value: '',
                options: [
                    '未招呼领座', '未及时送菜', '未倒水', '为准备好餐具', '未及时送菜单'
                ]
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

        }
    }
</script>
