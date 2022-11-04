// @ts-nocheck
const users = [
    {
        username: 'system',
        password: '123456',
        token: 'system',
        info: {
            name: '系统管理员'
        }
    },
    {
        name: 'teacher',
        password: '123456',
        token: 'teacher',
        info: {
            name: '教师'
        }
    },
    {
        name: 'student',
        password: '123456',
        token: 'student',
        info: {
            name: '学生'
        }
    }
]
export default [
    {
        url: `/mock/user/login`,
        method: 'post',
        response: ({ body }) => {
            const user = users.find(user => {
                return body.name === user.name && body.password === user.password
            })
            if (user) {
                return {
                    code: 200,
                    data: {
                        token: user.token,
                        userId: '123132',
                        avatar: 'adf',
                        username: '2342',
                        nickname: 'sdfdf',
                        roleName: '管理员'
                    }
                }
            } else {
                return {
                    code: 401,
                    data: {},
                    msg: '用户名或密码错误'
                }
            }
        }
    },
    {
        url: `/mock/user/info`,
        method: 'post',
        response: ({ body }) => {
            const { token } = body
            const info = users.find(user => {
                return user.token === token
            }).info
            if (info) {
                return {
                    code: 200,
                    data: {
                        info: info
                    }
                }
            } else {
                return {
                    code: 403,
                    data: {},
                    msg: '无访问权限'
                }
            }
        }
    },
    {
        url: `/mock/user/out`,
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {},
                msg: 'success'
            }
        }
    },
    {
        url: `/mock/user/passwordChange`,
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {},
                msg: 'success'
            }
        }
    }
]
