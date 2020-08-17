<template>
    <div class="control_wrapper">
        <ejs-treemap 
            class="treemap" 
            height='100%' 
            width='100%'
            :dataSource='dataSource' 
            :weightValuePath='weightValuePath' 
            :leafItemSettings='leafItemSettings'
        />
    </div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);

export default {
    props: [ 'obj' ],
    data: function() {
        return {
        }
    },
    computed:{
        dataSource(){
            return this.obj.data
        },
        weightValuePath(){
            return 'Count'
        },
        leafItemSettings(){
            return {
                labelPath: 'City',
                labelFormat: '${City}<br>${Count} casos',
                gap:5,
                fill: 'green'
            }
        }
    }
}
</script>