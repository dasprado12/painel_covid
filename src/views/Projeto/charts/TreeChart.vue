<template>
    <div class="control_wrapper">
        <ejs-treemap 
            class="treemap" 
            :height='height' 
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
        height:'350px',
        dataSource: this.obj.data,
        weightValuePath: 'Count',
            leafItemSettings: {
                labelPath: 'City',
                labelFormat: '${City}<br>${Count} casos',
                gap:5,
                fill: this.obj.color
            }
        }
    }
}
</script>