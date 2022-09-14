import Sbtn from '../package/c-btn/index.vue'

const coms = [Sbtn] //将来所有的组件都放到这个数组里面

// 批量组件注册
const install = (Vue)=>{
    coms.forEach(com=>{
        Vue.component(com.name,com)
    })
}

export default install // 这个方法以后再使用的时候可以被use调用
