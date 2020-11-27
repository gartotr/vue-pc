<template>
    <!-- 底部 -->
    <footer id="footer">
        <div class="footer_nav">
            <dl>
                <dt><a href="javascript:;">购物指南</a></dt>
                <dd><a href="javascript:;">购物流程</a></dd>
                <dd><a href="javascript:;">会员介绍</a></dd>
                <dd><a href="javascript:;">生活旅行</a></dd>
                <dd><a href="javascript:;">常见问题</a></dd>
                <dd><a href="javascript:;">联系客服</a></dd>
            </dl>
            <dl>
                <dt><a href="javascript:;">配送方式</a></dt>
                <dd><a href="javascript:;">211限时送达</a></dd>
                <dd><a href="javascript:;">配送服务查询</a></dd>
                <dd><a href="javascript:;">配送收费标准</a></dd>
                <dd><a href="javascript:;">海外配送</a></dd>
            </dl>
            <dl>
                <dt><a href="javascript:;">支付方式</a></dt>
                <dd><a href="javascript:;">货到付款</a></dd>
                <dd><a href="javascript:;">在线支付</a></dd>
                <dd><a href="javascript:;">分期付款</a></dd>
                <dd><a href="javascript:;">公司转账</a></dd>
            </dl>
            <dl>
                <dt><a href="javascript:;">售后服务</a></dt>
                <dd><a href="javascript:;">价格保护</a></dd>
                <dd><a href="javascript:;">退款说明</a></dd>
                <dd><a href="javascript:;">返修/退还</a></dd>
                <dd><a href="javascript:;">取消订单</a></dd>
            </dl>
            <dl>
                <dt><a href="javascript:;">特色服务</a></dt>
                <dd><a href="javascript:;">夺宝岛</a></dd>
                <dd><a href="javascript:;">DIY装机</a></dd>
                <dd><a href="javascript:;">延保服务</a></dd>
            </dl>
            <dl>
                <dt><a href="javascript:;">覆盖区县</a></dt>
                <dd>
                    <a href="javascript:;">
                        京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。
                    </a>
                </dd>
            </dl>
        </div>
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
                <li><a href="javascript:;">京东工艺</a></li>
            </ul>
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
            &:hover {
                color: #f10215;
            }
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
.footer_links {
    width: 990px;
    height: 160px;
    margin: 0 auto;
    padding: 15px;
    .footer_links_inner {
        width: 860px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
}
</style>