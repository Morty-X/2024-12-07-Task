/**
 * 题目：给定一个字符串，将它转换为对象的格式
 * 例如：
 */
/* let str =
  ' <img class="foo bar" id="baz" src="abc.png" style="background-color: red;" alt="一张美丽的图片">';
//=> 转换为以下形式
let obj = {
  tagName: "img",
  attrs: {
    className: "foo bar",
    id: "baz",
    src: "abc.png",
    style: "background-color: red;",
    alt: "一张美丽的图片",
  },
}; */

/**
 *
 * @param {需要格式化的字符串} str
 * tip: 正则表达式  反向引用
 */
function formatStr(str) {}

let str =
  "<img class='foo bar' id='baz' src='abc.png' style='background-color: red;' ></img>";
// 1.获得 tagName的值 即 img
let reg1 = /\b[\w]+\b/;
// 2.获得属性名的正则表达式
let reg2 = /\b[a-z]+(?=\=)/g;
// 3.获得属性值的正则表达式
// 匹配是 ' 后面的位置
let reg3 = /(?!')[^=]*(?=')/g;

console.log(str.match(reg1));
console.log(str.match(reg2));
console.log(str.match(reg3));
