<template>
    <div class="text-info">
        <strong>
            URL地址格式：
        </strong>
        <code>
            http://localhost:4000/#/{{questionId}}/{{theme}}
        </code>
        <div class="mar-top">
            <b>
                输入questionId：
            </b>
            <input type="text" v-model="questionId">
        </div>
        <div class="mar-top">
            <b>
                选择主题类型：
            </b>
            <select v-model="theme">
                <option value="default">default</option>
            </select>
        </div>
        <div class="mar-top">
            <button @click="navUrl">点击跳转</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                theme: 'default',
                questionId: 'questionId'
            }
        },
        methods: {
            navUrl(){
                this.$router.push('/' + this.questionId + '/' + this.theme)
            }
        }
    }
</script>

<style scoped lang="less">
    .text-info {
        width: 600px;
        margin: 60px auto 0;
        font-size: 14px;
        input {
            width: 200px;
        }
    }
    .mar-top {
        margin-top: 10px;
    }
</style>
