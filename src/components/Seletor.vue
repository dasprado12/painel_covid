<template>
    <v-card color="grey lighten-4">
        <v-card-text>
            <v-row v-if="dates != null">
                <v-col class="px-4">
                <v-range-slider
                    v-model="range"
                    :max="max"
                    :min="min"
                    height="0"
                    hide-details
                    class="align-center"
                    :key="numId"
                    v-on:mouseup="sendRange()"
                />
                </v-col>
            </v-row>
            <v-row v-else>
                disabled
            </v-row>
        </v-card-text>
        <v-subheader> <h5>De: {{displayDates(range[0])}}</h5> <v-spacer/> <h5>Até: {{ displayDates(range[1])}}</h5> </v-subheader>
    </v-card>
</template>


<script>
    export default {
        props: [ 'dates' ],
        data () {
            return {
                min: null,
                max: null,
                range: [],
                dateRange: [],
                numId: 0,
            }
        },
        watch: {
            dates(val){
                let min = 0
                let max = val.length -1
                this.range = [min,max]
                this.min = min
                this.max = max
                this.$emit('changeRange', this.range)
            },
        },
        methods: {
            displayDates(item){
                return this.dates[item].split("T")[0]
            },
            sendRange(){
                this.$emit('changeRange', this.range)
            }
        }
    }
</script>

<style scoped>
h2:hover{
    /* transform: scale(1.1) */
}
</style>