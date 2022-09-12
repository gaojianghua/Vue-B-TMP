export let profile = {
    title: '前端开发工程师',
    nickname: '高江华',
    vipLevel: 5,
    company: '',
    introduction:
        '天行健  君子以自强不息  地势坤  君子以厚德载物  业不可不勤  人不可不善  勤可以改变命运  善可以改变人生',
    homePage: 'https://gaojianghua.cn/docs',
    avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/wolffy.png',
    permission: {
        menus: ['userManage', 'roleList', 'permissionList', 'articleRanking', 'articleCreate'],
        points: ['distributeRole', 'importUser', 'removeUser', 'distributePermission']
    }
}

export let feature = [
    {
        id: 0,
        title: 'Three.js 企业 3D 可视化实战项目系统体系课',
        percentage: 5,
        content:
            '全网领先的<a target="_blank" href="https://threejs.org/">Three.js </a>的 WEB 3D 可视化课程。课程全面系统的讲解 WEB 3D 可视化技术，涵盖目前企业开发的各种应用技术和项目案例。包含智慧园区、智慧城市、智慧工厂。'
    },
    {
        id: 1,
        title: 'TypeScript 全面进阶指南',
        percentage: 5,
        content:
            '掌握 TypeScript 类型能力的核心三要素：类型工具、类型系统与类型编程; 掌握 TypeScript 在实际工程中的实践经验，全链路的工具链集成以及 TSConfig 的配置解读'
    },
    {
        id: 2,
        title: 'Vue3 + Vite + TS + Pinia 实现后台前端综合解决方案',
        percentage: 100,
        content:
            '课程基于最新的<a target="_blank" href="https://v3.cn.vuejs.org/guide/introduction.html">Vue3</a>全家桶进行开发, 全面使用最新的<a target="_blank" href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md">RFC script setup</a>语法标准, 搭配最新的<a target="_blank" href="https://cn.vitejs.dev/">Vite3</a>构建工具, 打造最佳的企业级前台响应式项目架构'
    },
    {
        id: 3,
        title: 'Vue3 + Vite + TS + Pinia 实现前台前端综合解决方案',
        percentage: 100,
        content:
            '课程基于最新的<a target="_blank" href="https://v3.cn.vuejs.org/guide/introduction.html">Vue3</a>全家桶进行开发, 全面使用最新的<a target="_blank" href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md">RFC script setup</a>语法标准, 搭配最新的<a target="_blank" href="https://cn.vitejs.dev/">Vite3</a>构建工具, 打造最佳的企业级后台管理项目架构'
    }
]

export let chapter = [
    {
        id: 0,
        timestamp: '2022-09-07',
        content: '完成课程: Vue3 + Vite + TS + Pinia 实现后台前端综合解决方案; 并提交至 GitHub 仓库'
    },
    {
        id: 1,
        timestamp: '2022-08-29',
        content: '完成课程: Vue3 + Vite + TS + Pinia 实现前台前端综合解决方案; 并提交至 GitHub 仓库'
    }
]

export let userDetail = {
    role: [
        {
            id: 0,
            title: '超级管理员'
        }
    ],
    remark: ['Vue3', 'TypeScript', 'Vite', 'ES6', '小程序', 'UniApp', 'React'],
    experience: [
        {
            startTime: '1617346794000',
            endTime: '1659423594000',
            position: '前端开发工程师',
            title: '杭州连线客信息技术有限公司',
            desc: '主要负责公司前端的开发工作，独立负责多项目开发，带领新的前端同事熟悉业务，增强技术能力。解决前端出现的疑难问题。分享自己的开发经验，日常的周报日报以及代码回顾。'
        },
        {
            startTime: '1569999594000',
            endTime: '1614668394000',
            position: '前端开发工程师',
            title: '杭州钛云科技有限公司',
            desc: '独立负责前端项目的开发，配合后台人员实现产品前端界面效果与功能。写过小程序，后台管理，PC端。项目上线后的文档编写，维护公司现有项目。日常的周报日报以及代码回顾。'
        },
        {
            startTime: '1535871594000',
            endTime: '1567407594000',
            position: '业务运维工程师',
            title: '杭州亿阳信息技术有限公司',
            desc: '负责敏捷后台管理系统平台接收各地级市反馈上来的业务问题并分析处理，面向移动用户的业务数据进行维护，在产品订购(退订,变更)过程中出现的各种数据问题，通过华为云系统平台操作移动客户管理系统，利用 PL/SQL  分析判断问题根源进行数据的增删改查并重启当前流程节点，保证程序正常执行完成'
        }
    ],
    educationBack: [
        {
            startTime: '1409641194000',
            endTime: '1498978794000',
            title: '荆州职业技术学院',
            desc: '电子商务专业'
        }
    ],
    project: [
        {
            startTime: '1643785194000',
            endTime: '1651474794000',
            name: '艺桥相亲',
            type: 'APP',
            desc: '相亲交友类APP应用，包含首页用户浏览, 对接即时通讯的聊天交流, 相亲线上线下活动, 个人中心, 相亲地点打卡, 高德地图定位, 会员支付等多项功能模块',
            technologysStack: ['UniApp', 'Uview-UI', 'Vue2', 'Vuex', 'trtc', '高德定位'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复和页面后期优化工作'
        },
        {
            startTime: '1635836394000',
            endTime: '1641106794000',
            name: '六路教育',
            type: 'APP',
            desc: '儿童教育类APP应用，包含通过定位获取附近教育机构浏览, 教育机构的分类浏览以及筛选功能, 音频故事, 视频课程, 书城, 订单, 退款, 积分, 积分商城等多项功能模块',
            technologysStack: ['UniApp', 'Uview-UI', 'Vue2', 'Vuex', '高德定位'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复和页面后期优化工作'
        },
        {
            startTime: '1659423594000',
            endTime: '1667372394000',
            name: '迦迦欢玩购 ( 读农 )',
            type: '微信小程序',
            desc: '游戏武侠风的大型商城，内容元素繁多，八种板块，六种玩购专区，七种货币(可组合交易)，八种集市专区(每种集市对应一种交易模式)。包含一人一码分享分销, 支付宝微信支付, 购物车, 订单, 退款, 会员, 帮派等等功能模块',
            technologysStack: ['UniApp', 'Uview-UI', 'Vue2', 'Vuex', 'UCharts'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复以及页面后期优化工作'
        },
        {
            startTime: '1656745194000',
            endTime: '1659423594000',
            name: '拿好货女装批发商城',
            type: '微信小程序',
            desc: '商城类型小程序，包含首页商品浏览, 服装分类, 购物车, 个人中心, 订单, 退款, 支付等多项功能模块',
            technologysStack: ['UniApp', 'Uview-UI', 'Vue2', 'Vuex'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复和页面后期优化工作'
        },
        {
            startTime: '1651474794000',
            endTime: '1656745194000',
            name: '米管家粮店',
            type: '微信小程序',
            desc: '销售米面粮油等的商城小程序，包含商品浏览, 商品分类, 购物车, 订单, 退款, 店铺切换, 等多项功能模块',
            technologysStack: ['微信小程序原生开发', 'Vant-UI'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复以及页面后期优化工作'
        },
        {
            startTime: '1596351594000',
            endTime: '1601621994000',
            name: '中签资讯',
            type: '微信小程序',
            desc: '资讯浏览类小程序应用，包含首页公告资讯浏览, 新股申购, 新股趋势 个人中心, 提现等多项功能模块',
            technologysStack: ['UniApp', 'Uview-UI', 'Vue2', 'Vuex', 'UCharts'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复以及页面后期优化工作'
        },
        {
            startTime: '1596351594000',
            endTime: '1601621994000',
            name: '中签资讯后台管理',
            type: 'PC端',
            desc: '后台管理系统, 包含用户, 角色, 权限, 用户信息的导入导出, 账户, 中签, 打新等多项功能模块',
            technologysStack: ['Element-UI', 'Vue2', 'Vuex', 'ECharts'],
            responsibilities:
                '独立负责该项目的前端开发工作, 配合后端完成接口对接工作, 负责项目测试以及BUG修复以及页面后期优化工作'
        }
    ],
    selfAssessment: [
        '1. 热爱前端技术，爱好做实实在在的东西',
        '2. 对新技术有很高的热情，自学能力较强',
        '3. 能够尽快熟悉业务，快速融入团队',
        '4. 做事勤勉，服从领导命令',
        '5. 对工作尽职尽责，乐于从事有挑战性的工作',
        '6. 有较强的分析问题解决问题能力',
        '7. 有良好的职业道德和素养，能承受较强的工作压力'
    ],
    professionalSkills: [
        '1. 熟练运用 DIV Flex 快速构建页面',
        '2. 熟练运用 ES6+ TypeScript 语法',
        '3. 熟练运用 UniApp Uview-UI 快速开发移动端应用',
        '4. 熟练运用 Vue全家桶以及 Vue3 Pinia 和 Nuxt',
        '5. 熟练运用 Cookie LocalStorage SessionStorage 浏览器缓存技术',
        '6. 熟练运用 React Mobx Next',
        '7. 熟练运用 Webpack Vite 构建工具',
        '8. 熟悉 Node 服务端开发以及 Nest 框架',
        '9. 熟悉 前端性能优化 SEO优化',
        '10. 熟悉 Linux 命令以及 Docker Nginx Mysql Redis的使用'
    ],
    id: 0,
    openTime: '随时到岗',
    username: '高江华',
    title: '超级管理员',
    mobile: '15257184434',
    avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/gaojianghua.jpg',
    gender: '男',
    age: '27岁',
    nativePlace: '湖北天门',
    salary: '面议',
    nationality: '汉',
    jobStauts: '离职',
    jobs: '前端开发工程师',
    address: '杭州市拱墅区墩祥街长阳路都市水乡水涟苑 8 幢 2 单 501',
    province: '杭州',
    education: '大专',
    email: 'g598670138@163.com',
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
