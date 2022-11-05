<template>
    <div class="layout-container-table">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="expand">
                <template #default="props">
                    <el-table :data="props.row.family">
                        <el-table-column prop="title2" align="center" />
                        <el-table-column prop="content" />
                        <el-table-column prop="code" align="center" />
                        <el-table-column />
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column label="指标" prop="title1" align="center" />
            <el-table-column label="评价标准" align="center" />
            <el-table-column label="得分" align="center" />
            <el-table-column label="操作" align="center" />
        </el-table>
    </div>
</template>

<script setup>
// import { defineComponent } from 'vue'
// export default defineComponent({})
const tableData = [
    {
        title1: '教学态度',
        family: [
            {
                title2: '遵守纪律情况',
                content: '教师能按时上下课，不擅自停课、调课',
                code: 5
            },
            {
                title2: '讲课认真态度',
                content: '备课充分，讲课熟练，责任心强，严格要求，课堂纪律好',
                code: 5
            },
            {
                title2: '辅导答疑及作业',
                content: '辅导答疑耐心热情，作业量适中，批改认真',
                code: 5
            }
        ]
    },
    {
        title1: '教学内容',
        family: [
            {
                title2: '授课信息量',
                content: '按教学大纲和日历授课，容量适中',
                code: 5
            },
            {
                title2: '基本概念与理论',
                content: '基本概念、基本理论正确，无错误',
                code: 5
            },
            {
                title2: '讲授技巧',
                content: '重点、难点突出，理论联系实际、针对性强，更新意识强',
                code: 5
            }
        ]
    },
    {
        title1: '教学方法',
        family: [
            {
                title2: '运用教学法',
                content: '教学方法多样，生动有效，积极激发学习兴趣',
                code: 5
            },
            {
                title2: '教书育人',
                content: '因材施教，注重启发，重视学生创新能力的培养',
                code: 5
            },
            {
                title2: '现代教育技术',
                content: '充分利用教具及现代化教学手段，教学效果好',
                code: 5
            }
        ]
    },
    {
        title1: '教学基本功',
        family: [
            {
                title2: '教学环节',
                content: '课堂教学环节灵活自然、效果好',
                code: 5
            },
            {
                title2: '板书及课件',
                content: '板书清晰规范、布置合理，课件美观',
                code: 5
            },
            {
                title2: '普通话',
                content: '说普通话、清楚易懂、生动精练，语速语调适中',
                code: 5
            }
        ]
    }
]
</script>

<style lang="scss" scoped></style>
