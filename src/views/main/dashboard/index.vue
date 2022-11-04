<template>
    <div class="container">
        <!-- 师生人数 -->
        <el-card shadow="always" class="box-card-right echarts-box">
            <template #header>
                <div class="card-header">
                    <span>师生人数</span>
                </div>
            </template>
            <!-- 饼图 -->
            <div id="course" :style="{ width: '424px', height: '250px' }"></div>
            <!-- 地图容器 -->
            <!-- <baidu-map class="map" ak="hbQ9VR8fC3bpClYtQf99pejEqvjaxnhR" :center="{ lng: 106.6025706, lat: 29.4293058 }" :zoom="15" :scroll-wheel-zoom="true">
                <bm-marker :position="{ lng: 106.6025706, lat: 29.4293058 }" :dragging="true" @click="infoWindowOpen">
                    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT" offset="6"></bm-scale>
                    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
                    <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">重庆工程学院</bm-info-window>
                </bm-marker>
            </baidu-map> -->
        </el-card>
        <!-- 课程 -->
        <div>
            <el-card shadow="always" class="box-card-left">
                <template #header>
                    <div class="card-header">
                        <span>课程</span>
                    </div>
                </template>
                <el-scrollbar max-height="220px">
                    <el-descriptions :column="5" :size="size" direction="vertical" :style="blockMargin">
                        <el-descriptions-item label="序号">
                            <div v-for="index in 12" :key="index">1</div>
                        </el-descriptions-item>
                        <el-descriptions-item label="课程/环节">
                            <div v-for="index in 12" :key="index">软件工程</div>
                        </el-descriptions-item>
                        <el-descriptions-item label="学分" :span="2">
                            <div v-for="index in 12" :key="index">2</div>
                        </el-descriptions-item>
                        <el-descriptions-item label="学时" :span="2">
                            <div v-for="index in 12" :key="index">48</div>
                        </el-descriptions-item>
                    </el-descriptions>
                </el-scrollbar>
            </el-card>
            <!-- 统计 -->
            <el-card shadow="always" class="box-card-bottom">
                <!-- 折线图 -->
                <div id="barEcharts"></div>
            </el-card>
        </div>
    </div>
</template>

<script>
// @ts-nocheck

import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { BaiduMap, BmGeolocation, BmMarker, BmLabel, BmInfoWindow, BmScale } from 'vue-baidu-map-3x'
import * as echarts from 'echarts'

// 引入Echarts
// import echarts from '@/utils/echarts.js'
export default defineComponent({
    components: { BaiduMap, BmGeolocation, BmMarker, BmLabel, BmInfoWindow, BmScale },
    setup() {
        // // 地图
        // const show = ref(true)

        // const infoWindowClose = () => {
        //     show.value = false
        // }
        // const infoWindowOpen = () => {
        //     show.value = true
        // }

        // 声明定义一下echart
        let echart = echarts

        onMounted(() => {
            courseChart()
            barChart()
        })
        onUnmounted(() => {
            courseChart.dispose
            barChart.dispose
        })
        // 基础配置一下Echarts
        const courseChart = () => {
            let chart = echart.init(document.getElementById('course'), null, {
                width: 380,
                height: 250
            })
            // 把配置和数据放这里
            chart.setOption({
                legend: {
                    // Try 'horizontal'
                    right: 0,
                    top: 0
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                        name: '人数',
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '学生'
                            },
                            {
                                value: 234,
                                name: '教师'
                            }
                        ]
                    }
                ]
            })
            window.onresize = function () {
                //自适应大小
                chart.resize()
            }
        }

        const barChart = () => {
            let chart = echart.init(document.getElementById('barEcharts'), null, {
                height: 280,
                width: 691
            })
            // 把配置和数据放这里
            chart.setOption({
                legend: {
                    right: 50,
                    top: 0
                },
                title: {
                    text: '调用高亮示例'
                },

                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} '
                },
                xAxis: {
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {},
                series: [
                    {
                        name: 'Sale',
                        type: 'bar',
                        data: [23, 24, 18, 25, 27, 28, 25],
                        barWidth: '20%',
                        right: '10%',
                        bottom: '5%'
                    }
                ]
            })
            window.onresize = function () {
                //自适应大小
                chart.resize()
            }
        }

        return { courseChart, barChart }
    }
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    flex-wrap: wrap;
    .box-card-right {
        border-radius: 27px;

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;
        }
        :deep(.el-card__header) {
            height: 30px;
            border-color: #fff;
        }
        .map {
            margin: 0 auto;
            width: 350px;
            height: 300px;
            border-radius: 50px;
            background-color: #bfa;
        }
    }

    .box-card-left {
        width: 691px;
        height: 320px;
        display: inline-block;
        border-radius: 27px;

        :deep(.el-card__header) {
            height: 30px;
            border-color: #fff;
        }
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .text {
            font-size: 14px;
        }

        .item {
            margin-bottom: 18px;
        }
    }
    .box-card-bottom {
        width: 691px;
        height: 300px;
        margin: 10px 5px 0 5px;
        border-radius: 27px;
    }
}
</style>
