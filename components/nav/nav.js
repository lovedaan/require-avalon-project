/*
 * @Author: Marte
 * @Date:   2017-08-08 11:29:22
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-14 21:35:07
 */
define(['text!./nav.html'], function(nav) {

    avalon.templateCache.nav = nav; // 绑定templateCache
    var vm = avalon.define({
        $id: 'navController',
        currentTxt: '',
        init: function() {
            console.log('nav.js init');
            vm.currentTxt = avalon.vmodels.mainController.currentTxt;
        }, // End init
        toggleTab: function(str) {
            vm.currentTxt = str;
        }
    }); // End avalon.define

    avalon.vmodels.mainController.navController = 'nav'; // 绑定父类
    vm.init();
});