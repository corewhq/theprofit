<template>
    <div class="answer-content answer-select">
        <div class="title">
            您在消费过程中，是否遇到下面情况？
            <div class="sub-title">
                (多选题，最多选择3个)
            </div>
        </div>
        <div class="body">
            <mt-checklist
                class="select"
                v-model="value"
                :options="options">
            </mt-checklist>
            <div class="border"></div>
            <div class="action-btns">
                <mt-button type="default" class="left" @click="$router.go(-1)">
                    <i class="iconfont icon-back"></i>
                    返回
                </mt-button>
                <mt-button type="primary" class="right">
                    下一题
                    <i class="iconfont icon-more"></i>
                </mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    export default {
        name: 'SelectAnswer',
        data() {
            return {
                value: [],
                options: [
                    '未招呼领座', '未及时送菜', '未倒水', '为准备好餐具', '未及时送菜单'
                ]
            }
        },
        watch: {
            value() {
                $('.mint-checklist-label').removeClass('checked');
                $('input.mint-checkbox-input:checked').closest('.mint-checklist-label').addClass('checked')
            }
        }
    }
</script>
