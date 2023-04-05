import $ from 'jquery'

$(function() {
    /**
     * odd 奇数
     * even 偶数
     */
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
})
