/**
 * Created by kemei on 15/5/14.
 */
import noty from 'noty';
require.ensure([], function () {
    require('../bower_components/noty/js/noty/themes/bootstrap');
});
$.noty.defaults = {
    layout: 'topCenter',
    theme: 'bootstrapTheme', // or 'relax'
    type: '',
    text: '', // can be html or string
    dismissQueue: true, // If you want to use queue feature set this true
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
        open: 'animated bounce', // Animate.css class names
        close: 'animated flipOutX', // Animate.css class names
        easing: 'swing', // unavailable - no need
        speed: 500 // opening & closing animation speed
    },
    timeout: 2000, // delay for closing event. Set false for sticky notifications
    force: false, // adds notification to the beginning of queue when set to true
    modal: false,
    maxVisible: 5, // you can set max visible notification for dismissQueue true option,
    killer: false, // for close all notifications before show
    closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
    callback: {
        onShow: function() {},
        afterShow: function() {},
        onClose: function() {},
        afterClose: function() {},
        onCloseClick: function() {},
    },
    buttons: false // an array of buttons
};
export default {
    noty:noty,
    success(msg,layout='topCenter'){
        return noty({
            text        :msg,
            type        : 'success',
            dismissQueue: true,
            layout      : layout,
            theme       : 'bootstrapTheme',
            closeWith   : ['click'],
            maxVisible  : 20,
            modal       : false
        });
    },
    information(msg,animation = {
        open: 'animated swing', // Animate.css class names
        close: 'animated flipOutX', // Animate.css class names
        easing: 'swing', // unavailable - no need
        speed: 500 // opening & closing animation speed
    }){
        return noty({
            text        :msg,
            type        : 'information',
            dismissQueue: true,
            layout      : 'topCenter',
            theme       : 'bootstrapTheme',
            animation   : animation,
            closeWith   : ['click'],
            maxVisible  : 20,
            modal       : false
        });
    },
    box(msg='information',layout='center'){
        return noty({
            text        : msg,
            type        : 'alert',
            dismissQueue: true,
            layout      : layout,
            closeWith   : [], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
            theme       : 'bootstrapTheme'
        });
    },
    error(msg='error',layout='topCenter'){
        return noty({
            text        : msg,
            type        : 'error',
            dismissQueue: true,
            layout      : layout,
            closeWith   : ['click'],
            theme       : 'bootstrapTheme'
        });
    }
}