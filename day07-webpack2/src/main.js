// 项目js入口文件
import './css/index.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/scss/font-awesome.scss';

console.log('ok');
$(() => {
  console.log('j on');
});

class Person {
  static info = {
    name: 'xl',
    age: 24,
  };
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log('吃饭中-----');
  }
}

var p1 = new Person('许力');
console.log(p1.name);
p1.eat();
console.log(Person.info);
