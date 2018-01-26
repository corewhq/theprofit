<template>
    <div>
        <mt-range
            class="progress"
            v-model="rangeValue"
            :min="0"
            :max="100"
            :bar-height="5">
            <span>
                {{rangeValue}}%
            </span>
        </mt-range>
        <div class="site-title">
            满意吧餐厅-餐后满意度
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        components: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'questionsGet',
                'stepGet'
            ]),
            rangeValue() {
                return Math.round(this.stepGet / this.questionsGet.length * 100);
            }
        },
        methods: {}
    }
</script>
