//test
export const increment = ({commit},index) => {
    commit('INCREMENT',index)
}
export const decrement = ({commit},index) => {
    commit('DECREMENT',index)
}

export const setuserinfo = ({commit},userInfo) => {
    commit('SETUSERINFO',userInfo)
}

export const setloginflag = ({commit},loginFlag) => {
    commit('SETLOGINFLAG',loginFlag)
}

export const setReleaseNum = ({commit},releaseNum) => {
    commit('SETRELEASENUM',releaseNum)
}
export const setTfActiveInfo = ({commit},activeIndex) => {
    commit('SETTFACTIVEINFO',activeIndex)
}

//export const setTfActiveInfo = ({commit},activeIndex) => {
//  commit('SETTFACTIVEINFO',activeIndex)
//}
