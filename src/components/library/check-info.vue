<template>
    <div class="check-info-box" v-drag>
        <el-dialog v-model="dialogTableVisible" title="基本信息" destroy-on-close>
            <el-descriptions class="descriptions" :column="1" v-if="users">
                <el-descriptions-item width="300px" label="名字">{{ users.username }}</el-descriptions-item>

                <el-descriptions-item width="300px" label="照片"></el-descriptions-item>
                <el-descriptions-item width="300px" label="性别"> {{ users.gender }}</el-descriptions-item>

                <el-descriptions-item width="300px" label="邮箱">{{ users.email }} </el-descriptions-item>
                <el-descriptions-item width="300px" label="联系方式">{{ users.phone }} </el-descriptions-item>
                <el-descriptions-item width="300px" label="家庭地址">{{ users.gender }}</el-descriptions-item>
                <el-descriptions-item width="300px" label="详细信息">{{ users.address }}</el-descriptions-item>
            </el-descriptions>
        </el-dialog>
    </div>
</template>
<script>
// @ts-nocheck

// 解构
import { defineComponent, reactive, ref } from 'vue'
import drag from '@/directive/drag/index'

export default defineComponent({
    name: 'CheckInfo',
    props: {
        // 接收父组件数据
    },
    directives: { drag },
    components: {},
    setup(props, { emit }) {
        // 对话框是否可见
        const dialogTableVisible = ref(false)
        const users = reactive({})
        console.log(users)
        return {
            dialogTableVisible,
            users
        }
    }
})
</script>
<style scoped lang="scss">
.check-info-box {
    .el-button--text {
        margin-right: 15px;
    }

    .dialog-footer button:first-child {
        margin-right: 10px;
    }
    .descriptions {
        display: flex;
        flex-wrap: wrap;
    }

    .is-left {
        width: 500px;
        background-color: brown;
    }
}
</style>
