<template>
    <div>
        <div class="footer_links">
            <ul class="footer_links_inner">
                <li><a href="javascript:;">关于我们</a></li>
                <span>|</span>
                <li><a href="javascript:;">联系我们</a></li>
                <span>|</span>
                <li><a href="javascript:;">联系客服</a></li>
                <span>|</span>
                <li><a href="javascript:;">合作商家</a></li>
                <span>|</span>
                <li><a href="javascript:;">营销中心</a></li>
                <span>|</span>
                <li><a href="javascript:;">手机App</a></li>
                <span>|</span>
                <li><a href="javascript:;">友情链接</a></li>
                <span>|</span>
                <li><a href="javascript:;">销售联盟</a></li>
                <span>|</span>
                <li><a href="javascript:;">风险监测</a></li>
                <span>|</span>
                <li><a href="javascript:;">隐私政策</a></li>
                <span>|</span>
                <li><a href="javascript:;">东京工艺</a></li>
            </ul>
        </div>
        <div class="footer_copy">
            <p>Copyright © 2004-2020 东京JD.com 版权所有</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Links',
}
</script>

<style lang="less" scoped>
.footer_links {
    width: 1190px;
    height: 20px;
    margin: 0 auto;
    padding: 15px;
    .footer_links_inner {
        width: 860px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
}
.footer_copy {
    width: 1190px;
    margin: 0 auto;
    p {
        display: flex;
        justify-content: center;
        color: #666;
    }
}
</style>
