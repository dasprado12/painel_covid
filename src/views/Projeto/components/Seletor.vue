<template>
<v-row>{{teste}}
    <v-col class="pa-12">
    <v-range-slider
        :tick-labels="months"
        :value="teste"
        min="0"
        max="4"
        ticks="always"
        tick-size="4"
    >
        <template v-slot:thumb-label="props">
        <v-icon dark>
            {{props.value}}
        </v-icon>
        </template>
    </v-range-slider>
    </v-col>
</v-row>
</template>


<script>
export default {
props: [ 'dates' ],
    data: () => ({
        teste: [ 0,4 ], 
        min: 0,
    }),
    computed: {
        months() {
            let dates = this.dates
            let arr_ret = []
            for(let i = 0; i < dates.length; i++){
                if(new Date(dates[i]).getMonth() != new Date(dates[i-1]).getMonth() ){
                    arr_ret.push(dates[i])
                }
            }
            return arr_ret.map(function(item){ return item.substr(0,7) })
        }
    }
}
</script>