<template>
    <el-form :inline="true" :model="form" label-width="100px" class="form">
        <el-form-item :label="form.id === 0 ? '教师名称' : '学生名称'">
            <el-input v-model="form.name" :placeholder="form.id === 0 ? '请输入教师名称' : '请输入学生名称'" class="inputWidth" />
        </el-form-item>
        <el-form-item :label="form.id === 0 ? '教师性别' : '学生名称'">
            <el-radio-group v-model="form.sex" class="ml-4">
                <el-radio label="1" size="large">男</el-radio>
                <el-radio label="2" size="large">女</el-radio>
            </el-radio-group>
        </el-form-item>
        <!-- 上传头像 -->
        <el-form-item :label="form.id === 0 ? '教师头像' : '学生头像'" class="avatar">
            <!-- <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload> -->
        </el-form-item>
        <el-form-item :label="form.id === 0 ? '教师院系' : '学生院系'">
            <el-cascader v-model="value" :options="options" @change="handleChange" />
        </el-form-item>
        <el-form-item :label="form.id === 0 ? '教师专业' : '学生专业'">
            <el-cascader v-model="value" :options="options" @change="handleChange" />
        </el-form-item>

        <el-form-item :label="form.id === 0 ? '教师联系方式' : '学生联系方式'">
            <el-input v-model="form.phone" :placeholder="form.id === 0 ? '请输入教师联系方式' : '请输入学生联系方式'" />
        </el-form-item>
        <el-form-item :label="form.id === 0 ? '教师地址' : '学生地址'">
            <el-input v-model="form.address" :placeholder="form.id === 0 ? '请输入教师地址' : '请输入学生地址'" />
        </el-form-item>

        <el-form-item label="详细介绍">
            <el-input v-model="form.information" :autosize="{ minRows: 10, maxRows: 15 }" class="text-area" type="textarea" />
        </el-form-item>
    </el-form>
</template>
<script>
// @ts-nocheck

// 解构
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'AddInfo',
    props: {
        info: {
            type: Object,
            default: {
                id: 0,
                name: '',
                sex: '',
                avatar: null,
                college: '',
                speciality: '',
                phone: '',
                address: '',
                information: null
            }
        }
    },
    components: {},
    setup(props, ctx) {
        const form = props.info
        const options = [
            {
                value: 'guide',
                label: 'Guide',
                children: [
                    {
                        value: 'disciplines',
                        label: 'Disciplines',
                        children: [
                            {
                                value: 'consistency',
                                label: 'Consistency'
                            },
                            {
                                value: 'feedback',
                                label: 'Feedback'
                            },
                            {
                                value: 'efficiency',
                                label: 'Efficiency'
                            },
                            {
                                value: 'controllability',
                                label: 'Controllability'
                            }
                        ]
                    },
                    {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [
                            {
                                value: 'side nav',
                                label: 'Side Navigation'
                            },
                            {
                                value: 'top nav',
                                label: 'Top Navigation'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'component',
                label: 'Component',
                children: [
                    {
                        value: 'basic',
                        label: 'Basic',
                        children: [
                            {
                                value: 'layout',
                                label: 'Layout'
                            },
                            {
                                value: 'color',
                                label: 'Color'
                            },
                            {
                                value: 'typography',
                                label: 'Typography'
                            },
                            {
                                value: 'icon',
                                label: 'Icon'
                            },
                            {
                                value: 'button',
                                label: 'Button'
                            }
                        ]
                    },
                    {
                        value: 'form',
                        label: 'Form',
                        children: [
                            {
                                value: 'radio',
                                label: 'Radio'
                            },
                            {
                                value: 'checkbox',
                                label: 'Checkbox'
                            },
                            {
                                value: 'input',
                                label: 'Input'
                            },
                            {
                                value: 'input-number',
                                label: 'InputNumber'
                            },
                            {
                                value: 'select',
                                label: 'Select'
                            },
                            {
                                value: 'cascader',
                                label: 'Cascader'
                            },
                            {
                                value: 'switch',
                                label: 'Switch'
                            },
                            {
                                value: 'slider',
                                label: 'Slider'
                            },
                            {
                                value: 'time-picker',
                                label: 'TimePicker'
                            },
                            {
                                value: 'date-picker',
                                label: 'DatePicker'
                            },
                            {
                                value: 'datetime-picker',
                                label: 'DateTimePicker'
                            },
                            {
                                value: 'upload',
                                label: 'Upload'
                            },
                            {
                                value: 'rate',
                                label: 'Rate'
                            },
                            {
                                value: 'form',
                                label: 'Form'
                            }
                        ]
                    },
                    {
                        value: 'data',
                        label: 'Data',
                        children: [
                            {
                                value: 'table',
                                label: 'Table'
                            },
                            {
                                value: 'tag',
                                label: 'Tag'
                            },
                            {
                                value: 'progress',
                                label: 'Progress'
                            },
                            {
                                value: 'tree',
                                label: 'Tree'
                            },
                            {
                                value: 'pagination',
                                label: 'Pagination'
                            },
                            {
                                value: 'badge',
                                label: 'Badge'
                            }
                        ]
                    },
                    {
                        value: 'notice',
                        label: 'Notice',
                        children: [
                            {
                                value: 'alert',
                                label: 'Alert'
                            },
                            {
                                value: 'loading',
                                label: 'Loading'
                            },
                            {
                                value: 'message',
                                label: 'Message'
                            },
                            {
                                value: 'message-box',
                                label: 'MessageBox'
                            },
                            {
                                value: 'notification',
                                label: 'Notification'
                            }
                        ]
                    },
                    {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [
                            {
                                value: 'menu',
                                label: 'Menu'
                            },
                            {
                                value: 'tabs',
                                label: 'Tabs'
                            },
                            {
                                value: 'breadcrumb',
                                label: 'Breadcrumb'
                            },
                            {
                                value: 'dropdown',
                                label: 'Dropdown'
                            },
                            {
                                value: 'steps',
                                label: 'Steps'
                            }
                        ]
                    },
                    {
                        value: 'others',
                        label: 'Others',
                        children: [
                            {
                                value: 'dialog',
                                label: 'Dialog'
                            },
                            {
                                value: 'tooltip',
                                label: 'Tooltip'
                            },
                            {
                                value: 'popover',
                                label: 'Popover'
                            },
                            {
                                value: 'card',
                                label: 'Card'
                            },
                            {
                                value: 'carousel',
                                label: 'Carousel'
                            },
                            {
                                value: 'collapse',
                                label: 'Collapse'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'resource',
                label: 'Resource',
                children: [
                    {
                        value: 'axure',
                        label: 'Axure Components'
                    },
                    {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    },
                    {
                        value: 'docs',
                        label: 'Design Documentation'
                    }
                ]
            }
        ]
        // 上传头像

        return { form, options }
    }
})
</script>
<style lang="scss" scoped>
.form {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .avatar {
        width: 100%;
        margin-left: 30px;
        :deep(.el-form-item__content) {
            span {
                float: left;
            }
        }
    }
}
:deep(.el-form-item) {
    .el-input {
        width: 300px;
    }
    padding-left: 30px;
    padding-bottom: 20px;
}
.text-area {
    :deep(.el-textarea__inner) {
        width: 800px;
        height: 3 00px;
    }
}
</style>
