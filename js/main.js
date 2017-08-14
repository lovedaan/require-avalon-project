/*
 * @Author: Marte
 * @Date:   2017-08-08 11:04:38
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-14 21:34:26
 */
require(['jquery', 'avalon', 'underscore', 'domReady', 'boots', 'jqueryUI'], function($, avalon, _) {

    var vm = avalon.define({
        $id: 'mainController',
        navController: '',
        currentTxt: '主页',
        footerController: '',
        username: '',
        password: '',
        isRememberPassword: true,
        isMen: true,
        init: function() {
            //引用jquery-ui的拖拽方法
            $('#div1').draggable();
            //console.log(_);
            //underscore提供的方法找最小值
            var arr = [3, 5, 10, 55, 2, 1];
            var min = _.min(arr);
            console.log(arr.toString() + '中最小的数字是：' + min);
        },
        submittForm: function() {
            console.log('提交表单');
            console.log('用户名是：' + vm.username);
            console.log('密码是：' + vm.password);
            var str = vm.isRememberPassword ? '是的' : '不要';
            console.log('是否记住密码：' + str);

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