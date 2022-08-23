import useUserStore from './user'
import useCommonStore from './common'

// 统一导出 useStore 方法
export default function useStore() {
    return {
        user: useUserStore(),
        common: useCommonStore()
    }
}
