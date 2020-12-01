<template>
    <div class="seckill">
        <div class="seckill_outer">
            <div class="seckill_title">
                <h4>东京秒杀</h4>
            </div>
            <div class="seckill_goods" v-for="imgs in seckillImg" :key="imgs.id">
                <img :src="imgs.seckillimg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'TodayRecommend',
    computed: {
        ...mapState({
            seckillImg: (state) => state.home.seckillImg,
        }),
    },
    methods: {
        ...mapActions(['getSeckillImg']),
    },
    mounted() {
        this.getSeckillImg()
    },
}
</script>

<style  lang="less" scoped>
.seckill {
    height: 260px;
    width: 1190px;
    background-color: cyan;
    margin: 10px auto;
    .seckill_outer {
        display: flex;
        div {
            height: 260px;
            flex: 1;
            background-color: #ccc;
        }
        .seckill_title {
            background: url('./images/cf9de587-8457-4661-9c4c-7e3f52ef510c.png');
            h4 {
                font-size: 30px;
                color: #fff;
                text-align: center;
                padding: 40px 0;
            }
        }
    }
}
</style>
