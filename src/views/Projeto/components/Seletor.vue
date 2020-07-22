<template>
    <v-card flat color="grey lighten-4">
        <v-card-text>
            <v-row>
                <v-col class="px-4">
                <v-range-slider
                    v-model="range"
                    :max="max"
                    :min="min"
                    height="0"
                    hide-details
                    class="align-center"
                    :key="numId"
                />
                </v-col>
            </v-row>
        </v-card-text>
        <v-subheader> De: {{displayDates(range[0])}} <v-spacer/> Até: {{ displayDates(range[1]) }} </v-subheader>
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
        created(){
            this.setSlider()
        },
        watch: {
            range(){
                this.$emit('changeRange', this.range)
            },
        },
        methods: {
            setSlider(){
                let min = 0
                let max = this.dates.length -1
                this.range = [min,max]
                this.min = min
                this.max = max
            },
            displayDates(item){
                return this.dates[item].split("T")[0]
            }
        }
    }
</script>