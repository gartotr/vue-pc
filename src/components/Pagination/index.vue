<template>
    <div class="pagination">
        <button :disabled="myCurrentPage <= 1" @click="setCurrentPage(myCurrentPage - 1)">
            上一页
        </button>
        <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">1</button>
        <button v-show="startEnd.start > 2">...</button>
        <button
            v-for="item in mapBtnCount"
            :key="item"
            @click="setCurrentPage(startEnd.start + item - 1)"
            :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
        >
            {{ startEnd.start + item - 1 }}
        </button>
        <button v-show="startEnd.end < totalPages - 1">...</button>
        <button
            :class="{ active: myCurrentPage === totalPages }"
            v-show="totalPages > 1"
            @click="setCurrentPage(totalPages)"
        >
            {{ totalPages }}
        </button>
        <button :disabled="myCurrentPage >= totalPages" @click="setCurrentPage(myCurrentPage + 1)">
            下一页
        </button>
        <button>总数：{{ total }}</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        //页面显示的个数7条
        pagerCount: {
            type: Number,
            vaildator(val) {
                return val >= 5 && val <= 21 && val % 2 === 1
            },
            default: 7,
        },
        pageSize: {
            type: Number,
            default: 5,
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            //当前的页码
            myCurrentPage: this.currentPage,
        }
    },
    computed: {
        //总页数
        totalPages() {
            //读取的商品总数 / 每页展示的个数 = 总的页数
            return Math.ceil(this.total / this.pageSize)
        },
        startEnd() {
            const { myCurrentPage, pagerCount, totalPages } = this
            //start - end 总计的按钮数量(中间显示的数量)
            //1  [2 3 4 5 6] 7  减去头尾1 7
            const count = pagerCount - 2 // 5
            //中间的数值 //1  [2 3 [4] 5 6] 7
            //向下取整 5/2 = 2.5 = 2
            const halfCount = Math.floor(count / 2) //2

            let start, end

            // 1   2 3 4 5 6   7  7 >= 7-2
            //如果当前的页数 大于等于总的页数 - 一半的页数

            /*  start
                问题1: 1 [2] 3 4 5 ... 10 start = 1
                当前页数2 - 一般的页数 5/2 = 2 
                start = 0  所以start不能等于1

                问题2: 1 ... 5 6 7 8 [9] 10
                start = 9 - 2 = 7  实际是5 
            */
            /* 
                end         3 + 5 = 8 -1 = 7
                结尾的数 = start + count - 1 
                
           */
            // totalPages - halfCount 临界值 超出后start 计算的结果会出问题
            if (myCurrentPage >= totalPages - halfCount) {
                // 1 ... 3(开始start) 4 [5] 6 7(结束end) ... 10
                // 开始的值 = 总页数9 -  现在点击的页数5 = 4
                start = totalPages - count
            } else {
                //开始的数量3 =  5-2
                start = myCurrentPage - halfCount
            }
            if (start <= 1) {
                start = 2
            }
            end = start + count - 1
            if (end >= totalPages) {
                end = totalPages - 1
            }
            return {
                start,
                end,
            }
        },

        mapBtnCount() {
            const { start, end } = this.startEnd
            const count = end - start + 1
            return count >= 1 ? count : 0
        },
    },
    methods: {
        setCurrentPage(currentPage) {
            this.myCurrentPage = currentPage
        },
    },
}
</script>

<style lang="less" scoped>
.pagination {
    display: flex;
    white-space: nowrap;
    font-weight: 700;
    button {
        margin: 0 5px;
        padding: 0 4px;
        font-size: 13px;
        min-width: 30px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: none;
        outline: none;
        display: block;
        background-color: #f4f4f5;
        color: #606266;
        border-radius: 2px;
    }
}

button.active {
    background-color: #e1251b;
    color: #fff;
}
</style>
