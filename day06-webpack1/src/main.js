// 项目js入口文件
import $ from 'jquery';
import './css/index.css';
import './css/index.less';
import './css/index.scss';

$(() => {
  $('li:even').css('backgroundColor', () => 'yellow');
  $('li:odd').css('backgroundColor', 'lightblue');
});

console.log('hello webpack');
