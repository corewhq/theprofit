<template>
    <div>
        <answer-header></answer-header>
        <div class="answer-content answer-select">
            <div class="title">
                您在消费过程中，是否遇到下面情况？
            </div>
            <div class="body">
                <textarea class="textarea" placeholder="请在此输入您的文本内容"></textarea>
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
            nextClick() {
                this.$emit('next-click')
            },
            prevClick() {
                this.$emit('prev-click')
            }
        }
    }
</script>
