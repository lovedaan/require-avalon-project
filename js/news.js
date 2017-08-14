/*
 * @Author: Marte
 * @Date:   2017-08-08 11:04:38
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-14 21:34:21
 */
require(['jquery', 'avalon', 'underscore', 'domReady', 'boots', 'jqueryUI'], function($, avalon, _) {

    var vm = avalon.define({
        $id: 'mainController',
        navController: '',
        currentTxt: '新闻',
        footerController: '',
        username: '',
        password: '',
        isRememberPassword: true,
        isMen: true,
        init: function() {

        }
    });

    //加载公用头部组件
    require(['components/nav/nav'], function() {
        console.log('nav组件加载完毕');
    });
    //加载共用尾部组件
    require(['components/footer/footer'], function() {
        console.log('footer组件加载完毕');
    });

    avalon.scan(document.body);
    vm.init();
});