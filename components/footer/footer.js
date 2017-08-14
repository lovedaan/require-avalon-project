/*
 * @Author: Marte
 * @Date:   2017-08-08 11:29:22
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-14 21:24:42
 */
define(['text!./footer.html'], function(footer) {

    avalon.templateCache.footer = footer; // 绑定templateCache
    var vm = avalon.define({
        $id: 'footerController',
        currentTxt: '主页',
        init: function() {
            console.log('footer.js init');

        }, // End init
        toggleTab: function(str) {
            vm.currentTxt = str;
        }
    }); // End avalon.define

    avalon.vmodels.mainController.footerController = 'footer'; // 绑定父类
    vm.init();
});