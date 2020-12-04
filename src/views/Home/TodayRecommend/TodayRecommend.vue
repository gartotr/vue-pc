<template>
    <div class="seckill">
        <div class="seckill_outer">
            <div class="seckill_title">
                <h4>东京秒杀</h4>
                <p class="seckill_down">22点场 倒计时</p>
                <h6 class="seckill_time_outer">
                    <ul class="seckill_time">
                        <li>{{ hour }}</li>
                        :
                        <li>{{ minute }}</li>
                        :
                        <li>{{ second }}</li>
                    </ul>
                </h6>
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
    data() {
        return {
            hour: 1,
            minute: 60,
            second: 60,
        }
    },
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
        setInterval(() => {
            this.second--

            if (this.second === 0) {
                this.minute--
            }
            if (this.minute === 0) {
                this.hour--
                this.minute = 60
            }
            if (this.second === 0) {
                this.second = 60
            }
            if (this.hour === 0) {
                this.hour = 24
            }
        }, 1)
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
            .seckill_down {
                margin-top: 30px;
                text-align: center;
                font-size: 20px;
                color: #fff;
            }
            .seckill_time_outer {
                margin-top: 20px;
                height: 50px;
                width: 200px;
                line-height: 32px;
                font-size: 20px;
                color: #fff;
            }
            .seckill_time {
                width: 160px;
                margin: 0 auto;
                display: flex;
                text-align: center;
                li {
                    width: 30px;
                    height: 30px;
                    background-color: #2f3430;
                    margin: 5px auto;
                }
            }
        }
    }
}
</style>
