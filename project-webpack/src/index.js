import $ from 'jquery'

import './css/index.css'
import './css/index.less'

import pic from './img/pic.png'
$('.box').attr('src', pic)

$(function() {
    /**
     * odd 奇数
     * even 偶数
     */
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
})

function info(target) {
    target.info = 'This is Info.'
}

@info
class Person {

}

console.log(Person.info);








