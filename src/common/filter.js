const filters = {
    replaceNull: t => {
        if (!t) {
            return "暂无"
        } else {
            return t
        }
    },

    statusName: t => {
        switch (t) {
            case 1:
                return '已审核';
            case 2:
                return '未审核';
            case 3:
                return '审核中';
            default:
                return t;
        }
    },


};


const install = function(Vue, opts = {}) {
    Object.keys(filters).forEach((key) => {
        Vue.filter(key, filters[key])
    })
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    ...filters,
    install
}