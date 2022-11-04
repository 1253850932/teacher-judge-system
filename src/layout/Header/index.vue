<template>
    <header>
        <div class="left-box">
            <!-- 收缩按钮 -->
            <div class="menu-icon" @click="opendStateChange">
                <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
            </div>
            <!-- 面包屑 -->
            <Breadcrumb />
        </div>
        <div class="right-box">
            <!-- 快捷功能按钮 -->
            <div class="function-list">
                <div class="function-list-item hidden-sm-and-down"><Full-screen /></div>
                <div class="function-list-item"><SizeChange /></div>
                <div class="function-list-item hidden-sm-and-down"><Theme /></div>
            </div>
            <!-- 用户信息 -->
            <div class="user-info">
                <el-avatar :src="userAvatar" />
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{ userInfo }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="showPasswordLayer">修改密码</el-dropdown-item>
                            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <password-layer :layer="layer" v-if="layer.show" />
        </div>
    </header>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import FullScreen from './functionList/fullscreen.vue'
import SizeChange from './functionList/sizeChange.vue'
import Theme from './functionList/theme.vue'
import Breadcrumb from './Breadcrumb.vue'
import PasswordLayer from './passwordLayer.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    components: {
        FullScreen,
        Breadcrumb,
        SizeChange,
        Theme,
        PasswordLayer
    },
    setup() {
        const store = useStore()

        const layer = reactive({
            show: false,
            showButton: true
        })
        // 登录人员信息
        const userInfo = computed(() => store.state.user.info.nickname)
        const userAvatar = computed(() => store.state.user.info.avatar)

        // 侧边栏显示\隐藏
        const isCollapse = computed(() => store.state.app.isCollapse)
        const opendStateChange = () => {
            store.commit('app/isCollapseChange', !isCollapse.value)
        }
        const router = useRouter()
        // 退出登录
        const loginOut = () => {
            localStorage.clear()
            router.push('/login')
        }
        // 显示改变密码层
        const showPasswordLayer = () => {
            layer.show = true
        }
        return {
            isCollapse,
            layer,
            opendStateChange,
            loginOut,
            showPasswordLayer,
            userInfo,
            userAvatar
        }
    }
})
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: var(--system-header-background);
    padding-right: 22px;
}
.left-box {
    height: 100%;
    display: flex;
    align-items: center;
    .menu-icon {
        width: 60px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 100;
        cursor: pointer;
        margin-right: 10px;
        &:hover {
            background-color: var(--system-header-item-hover-color);
        }
        i {
            color: var(--system-header-text-color);
        }
    }
}
.right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .function-list {
        display: flex;
        .function-list-item {
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            :deep(i) {
                color: var(--system-header-text-color);
            }
        }
    }
    .user-info {
        display: flex;
        align-items: center;
        margin-left: 20px;
        .el-avatar {
            height: 37px;
            width: 37px;
        }
        .el-dropdown-link {
            font-size: 15px;
            height: 100%;
            color: var(--system-header-breadcrumb-text-color);
        }
    }
}
</style>
