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
                title2: '教学准备',
                content: '备课认真，教学准备充分，符合大纲要求',
                code: 5
            },
            {
                title2: '教学组织',
                content: '课堂教学组织科学合理，启发式教学',
                code: 5
            },
            {
                title2: '答疑作业',
                content: '对学生态度好，作业批改认真',
                code: 5
            }
        ]
    },
    {
        title1: '教学内容',
        family: [
            {
                title2: '授课内容',
                content: '教学内容与大纲相符，内容充实',
                code: 5
            },
            {
                title2: '基本概念与理论',
                content: '基本概念、内容讲授正确，无错误',
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
                content: '教学方法运用得当，讲解透彻、逻辑性强',
                code: 5
            },
            {
                title2: '教学手段',
                content: '灵活应用现代化教学手段',
                code: 5
            },
            {
                title2: '教学用语',
                content: '普通话教学，语言清晰流畅、板书工整',
                code: 5
            }
        ]
    },
    {
        title1: '教学效果',
        family: [
            {
                title2: '学生反应',
                content: '学生喜欢听课，课堂气氛活跃，注意沟通，经常听取学生意见',
                code: 5
            },
            {
                title2: '内容掌握',
                content: '通过教学，学生能掌握课程内容',
                code: 5
            },
            {
                title2: '能力培养',
                content: '通过教学，能启迪学生思维，提高学习能力',
                code: 5
            }
        ]
    }
]
</script>

<style lang="scss" scoped></style>
