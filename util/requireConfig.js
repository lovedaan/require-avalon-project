/*
 * @Author: Marte
 * @Date:   2017-08-08 11:20:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-14 20:53:36
 */

require.config({
    /*baseUrl: '../',*/
    paths: {
        'avalon': 'lib/avalon/avalon.shim',
        'text': 'lib/require/text',
        'css': 'lib/require/css',
        'domReady': 'lib/require/domReady',
        'jquery': 'lib/jquery/jquery.min',
        'boots': 'lib/bootstrap/js/bootstrap.min',
        'jqueryUI': 'lib/jquery-ui/jquery-ui.min',
        'underscore': 'lib/underscore/underscore-min'
    },
    shim: {
        'boots': ['jquery'], //在这里写依赖什么插件
        'jqueryUI': ['jquery'],
        'underscore': { //用于引用不支持模块化的插件
            exports: '_' //导出这个标识，作为其他模块的引用
        }
    }
});