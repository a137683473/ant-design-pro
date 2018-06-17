import appLocaleData from 'react-intl/locale-data/zh';
import antdZh from 'antd/lib/locale-provider/zh_CN';
// import zhMessages from '../../locales/zh.json';

export default {
  locale: 'zh-CN',
  data: appLocaleData,
  antd: antdZh,
  messages: {
    'menu.home': '首页',
    'menu.dashboard': 'Dashboard',
    'menu.dashboard.analysis': '分析页',
    'menu.dashboard.monitor': '监控页',
    'menu.dashboard.workplace': '工作台',
    'menu.form': '表单页',
    'menu.form.basicform': '基础表单',
    'menu.form.stepform': '分布表单',
    'menu.form.advancedform': '高级表单',
    'menu.list': '列表页',
    'menu.list.searchlist': '搜索列表',
    'menu.list.basiclist': '标准列表',
    'menu.list.cardlist': '卡片列表',
    'menu.list.searchlist.articles': '搜索列表（文章）',
    'menu.list.searchlist.projects': '搜索列表（项目）',
    'menu.list.searchlist.applications': '搜索列表（应用）',
    'menu.profile': '详情页',
    'menu.profile.basic': '详情页',
    'menu.profile.advanced': '详情页',
    'menu.result': '结果页',
    'menu.result.success': '成功页',
    'menu.result.fail': '失败页',
    'menu.exception': '异常页',
    'menu.exception.not-permission': '403',
    'menu.exception.not-find': '404',
    'menu.exception.server-error': '500',
    'menu.exception.trigger': '触发错误',
    'menu.account': '个人页',
    'menu.account.center': '个人中心',
    'menu.account.settings': '个人设置',
    'menu.account.trigger': '触发报错',
    'app.home.introduce': '介绍',
    'app.analysis.test': '工专路 {no} 号店',
    'app.analysis.introduce': '指标说明',
    'app.analysis.total-sales': '总销售额',
    'app.analysis.day-sales': '日销售额',
    'app.analysis.visits': '访问量',
    'app.analysis.visits-trend': '访问量趋势',
    'app.analysis.visits-ranking': '门店访问量排名',
    'app.analysis.day-visits': '日访问量',
    'app.analysis.week': '周同比',
    'app.analysis.day': '日同比',
    'app.analysis.payments': '支付笔数',
    'app.analysis.conversion-rate': '转化率',
    'app.analysis.operational-effect': '运营活动效果',
    'app.analysis.sales-trend': '销售趋势',
    'app.analysis.sales-ranking': '门店销售额排名',
    'app.analysis.all-year': '全年',
    'app.analysis.all-month': '本月',
    'app.analysis.all-week': '本周',
    'app.analysis.all-day': '今日',
    'app.analysis.search-users': '搜索用户数',
    'app.analysis.per-capita-search': '人均搜索次数',
    'app.analysis.online-top-search': '线上热门搜索',
    'app.analysis.the-proportion-of-sales': '销售额类别占比',
    'app.analysis.channel.all': '全部渠道',
    'app.analysis.channel.online': '线上',
    'app.analysis.channel.stores': '门店',
    'app.analysis.sales': '销售额',
    'app.analysis.traffic': '客流量',
    'app.analysis.table.rank': '排名',
    'app.analysis.table.search-keyword': '搜索关键词',
    'app.analysis.table.users': '用户数',
    'app.analysis.table.weekly-range': '周涨幅',
    // ...zhMessages,
  },
};
