import dialog from './dialog.js';
let registerAuth = $('#registerAuth'),
    loginAuth = $('#loginAuth');
import bootstrap from 'react-bootstrap'
require('../css/base.scss');

// /dialog.success('欢迎到来');

// loginAuth.on('click', (e) => {
//   e.preventDefault();
//   require.ensure([], function() { // this syntax is weird but it works
//       var x = require('./loginComponent');
//       var box = dialog.box();
//       //x(document.getElementById(box.options.id));
//       //dialog.success('登录成功');
//   });
// });

// registerAuth.on('click',(e)=>{
//   e.preventDefault();
//     require.ensure([], function () { // this syntax is weird but it works
//         dialog.information('注册成功');
//     });
// });