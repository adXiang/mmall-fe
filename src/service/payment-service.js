/*
* @Author: MaWenXiang
* @Date:   2017-06-10 20:28:03
* @Last Modified by:   MaWenXiang
* @Last Modified time: 2018-03-14 00:19:21
*/

'use strict';
var _mm = require('util/mm.js');
var _payment = {  
    //获取支付信息  
    getPaymentInfo : function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/pay.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },  
    //订单状态监听
    getPaymentStatus: function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },  
}
module.exports = _payment; 