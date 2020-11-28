<template>
    <!-- 底部 -->
    <footer id="footer">
        <div class="footer_nav">
            <dl>
                <dt>购物指南</dt>
                <dd><a href="javascript:;">购物流程</a></dd>
                <dd><a href="javascript:;">会员介绍</a></dd>
                <dd><a href="javascript:;">生活旅行</a></dd>
                <dd><a href="javascript:;">常见问题</a></dd>
                <dd><a href="javascript:;">联系客服</a></dd>
            </dl>
            <dl>
                <dt>配送方式</dt>
                <dd><a href="javascript:;">211限时送达</a></dd>
                <dd><a href="javascript:;">配送服务查询</a></dd>
                <dd><a href="javascript:;">配送收费标准</a></dd>
                <dd><a href="javascript:;">海外配送</a></dd>
            </dl>
            <dl>
                <dt>支付方式</dt>
                <dd><a href="javascript:;">货到付款</a></dd>
                <dd><a href="javascript:;">在线支付</a></dd>
                <dd><a href="javascript:;">分期付款</a></dd>
                <dd><a href="javascript:;">公司转账</a></dd>
            </dl>
            <dl>
                <dt>售后服务</dt>
                <dd><a href="javascript:;">价格保护</a></dd>
                <dd><a href="javascript:;">退款说明</a></dd>
                <dd><a href="javascript:;">返修/退还</a></dd>
                <dd><a href="javascript:;">取消订单</a></dd>
            </dl>
            <dl>
                <dt>特色服务</dt>
                <dd><a href="javascript:;">夺宝岛</a></dd>
                <dd><a href="javascript:;">DIY装机</a></dd>
                <dd><a href="javascript:;">延保服务</a></dd>
            </dl>
            <dl>
                <dt>覆盖区县</dt>
                <dd>
                    东京已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。
                </dd>
            </dl>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="less">
.footer {
    width: 100%;
}
.footer_nav {
    background-color: #f4f4f4;
    display: flex;
    width: 990px;
    height: 160px;
    margin: 0 auto;
    padding: 20px 0;
    justify-content: space-between;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;

    dl {
        width: 190px;
        a {
            color: #666;
        }
        a:hover {
            color: #f10215;
        }
        dt {
            height: 22px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        dd {
            height: 22px;
        }
    }
}
</style>