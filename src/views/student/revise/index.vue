<template>
    <div class="box">我是首页</div>
    <Table>
        <el-table-column prop="name" label="名称" align="center" />
        <el-table-column prop="number" label="数字" align="center" />
        <el-table-column prop="chooseName" label="选择器" align="center" />
        <el-table-column prop="radioName" label="单选框" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="200">
            <template #default="scope">
                <el-button>编辑</el-button>
                <el-popconfirm title="删除">
                    <template #reference>
                        <el-button type="danger">删除</el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </Table>
</template>

<script></script>

<style lang="scss" scoped>
.box {
    padding: 15px;
}
</style>
