export let profile = {
    title: '前端开发工程师',
    nickname: '高江华',
    vipLevel: 5,
    company: '',
    introduction: '我自横刀向天笑, 去留肝胆两昆仑',
    homePage: 'https://gaojianghua.cn/doce',
    avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/%E7%81%B0%E5%A4%AA%E7%8B%BC.png',
    permission: {
        menus: ['userManage', 'roleList', 'permissionList', 'articleRanking', 'articleCreate'],
        points: ['distributeRole', 'importUser', 'removeUser', 'distributePermission']
    }
}

export let feature = [
    {
        id: 0,
        title: 'Vue3 + 全家桶',
        percentage: 100,
        content:
            '项目基于最新的<a target="_blank" href="https://v3.cn.vuejs.org/guide/introduction.html">Vue3</a>全家桶进行开发, 全面使用最新的<a target="_blank" href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md">RFC script setup</a>语法标准, 为你带来不一样的 vue3 开发体验'
    },
    {
        id: 1,
        title: 'Vue3 + 全家桶',
        percentage: 100,
        content:
            '项目基于最新的<a target="_blank" href="https://v3.cn.vuejs.org/guide/introduction.html">Vue3</a>全家桶进行开发, 全面使用最新的<a target="_blank" href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md">RFC script setup</a>语法标准, 为你带来不一样的 vue3 开发体验'
    },
    {
        id: 2,
        title: 'Vue3 + 全家桶',
        percentage: 100,
        content:
            '项目基于最新的<a target="_blank" href="https://v3.cn.vuejs.org/guide/introduction.html">Vue3</a>全家桶进行开发, 全面使用最新的<a target="_blank" href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md">RFC script setup</a>语法标准, 为你带来不一样的 vue3 开发体验'
    }
]

export let chapter = [
    {
        id: 0,
        timestamp: '2022-08-28',
        content: '123'
    },
    {
        id: 1,
        timestamp: '2022-08-29',
        content: '145623'
    }
]

export let userDetail = {
    role: [
        {
            id: 0,
            title: '超级管理员'
        }
    ],
    remark: ['超级管理员', 'BOSS'],
    experience: [
        {
            startTime: '1538235689000',
            endTime: '1558235689000',
            title: '拿好货',
            desc: '女装批发商城'
        },
        {
            startTime: '1538235689000',
            endTime: '1558235689000',
            title: '迦迦欢',
            desc: '大型多元化游戏武侠风商城'
        }
    ],
    id: 0,
    openTime: '1533088000000',
    username: '高江华',
    title: '超级管理员',
    mobile: '15257184434',
    avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/gaojianghua.jpg',
    gender: '男',
    nationality: '汉',
    address: '杭州市拱墅区墩祥街长阳路都市水乡水涟苑 8 幢 2 单 501',
    province: '杭州',
    major: '电子商务',
    glory: '初中数学模拟考满分'
}

export let roleList = [
    {
        id: 1,
        title: '超级管理员',
        desc: '唯一账号, 可以操作系统所有功能'
    },
    {
        id: 2,
        title: '管理员',
        desc: '由超管指定, 可以为多个, 协助超管管理系统'
    },
    {
        id: 3,
        title: '人事经理',
        desc: '主管人事相关业务'
    },
    {
        id: 4,
        title: '销售经理',
        desc: '主管销售相关业务'
    },
    {
        id: 5,
        title: '保安队长',
        desc: '主管安保相关业务'
    },
    {
        id: 6,
        title: '员工',
        desc: '普通员工'
    }
]

export let permissionList = [
    {
        id: '1',
        permissionName: '员工管理',
        permissionMark: 'userManage',
        permissionDesc: '员工管理菜单',
        children: [
            {
                id: '1-1',
                permissionName: '分配角色',
                permissionMark: 'distributeRole',
                permissionDesc: '为员工分配角色'
            },
            {
                id: '1-2',
                permissionName: '导入员工',
                permissionMark: 'importUser',
                permissionDesc: '通过 excel 导入员工'
            },
            {
                id: '1-3',
                permissionName: '删除员工',
                permissionMark: 'removeUser',
                permissionDesc: '删除员工'
            }
        ]
    },
    {
        id: '2',
        permissionName: '角色列表',
        permissionMark: 'roleList',
        permissionDesc: '角色列表菜单',
        children: [
            {
                id: '2-1',
                permissionName: '分配权限',
                permissionMark: 'distributePermission',
                permissionDesc: '为角色分配权限'
            }
        ]
    },
    {
        id: '3',
        permissionName: '权限列表',
        permissionMark: 'permissionList',
        permissionDesc: '权限列表菜单',
        children: []
    },
    {
        id: '4',
        permissionName: '文章排名',
        permissionMark: 'articleRanking',
        permissionDesc: '文章排名菜单',
        children: []
    },
    {
        id: '5',
        permissionName: '创建文章',
        permissionMark: 'articleCreate',
        permissionDesc: '创建文章页面',
        children: []
    }
]
