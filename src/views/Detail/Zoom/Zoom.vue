<template>
    <div class="spec-preview" @mousemove="moveImg">
        <img :src="imgUrl" id="small" />
        <div class="event"></div>
        <div class="big">
            <img :src="bigImgUrl" />
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
export default {
    name: 'Zoom',
    props: {
        imgUrl: String,
        bigImgUrl: String,
    },
    data() {
        return {
            topStyle: {
                transform: '',
            },
        }
    },
    methods: {
        moveImg() {
            const mask = document.querySelector('.mask')
            const big = document.querySelector('.big img')

            let x = event.offsetX
            let y = event.offsetY

            let topX = x - 100 < 0 ? 0 : x - 100
            let topY = y - 100 < 0 ? 0 : y - 100
            if (topX >= 200) {
                topX = 200
            }
            if (topY >= 200) {
                topY = 200
            }
            mask.style.left = topX + 'px'
            mask.style.top = topY + 'px'

            big.style.left = -topX * 2 + 'px'
            big.style.top = -topY * 2 + 'px'
        },
    },
    mounted() {},
}
</script>

<style lang="less">
.spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
        width: 100%;
        height: 100%;
    }

    .event {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
    }

    .mask {
        width: 50%;
        height: 50%;
        background-color: rgba(0, 255, 0, 0.3);
        position: absolute;
        left: 0;
        top: 0;
        display: none;
    }

    .big {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -1px;
        left: 100%;
        border: 1px solid #aaa;
        overflow: hidden;
        z-index: 998;
        display: none;
        background: white;

        img {
            width: 200%;
            max-width: 200%;
            height: 200%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .event:hover ~ .mask,
    .event:hover ~ .big {
        display: block;
    }
}
</style>