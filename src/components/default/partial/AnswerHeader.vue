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
            {{title}}
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
        props: {
            title: {
                type: String
            }
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
