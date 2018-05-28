/*
 * 網路假期 - 答案共享資料庫
 * https://netholiday.reh.tw/
 *
 * Copyright 2018 張文相 Zhang Wenxiang
 * https://www.facebook.com/GoneToneDY
 * https://blog.reh.tw/
 */
/* 創建 Div 元素 */
var element1 = document.getElementById("under"); //外層元素 ID

if (element1 != null) {
    var divCreate = document.createElement("div"); //創建 div 元素

    divCreate.id = "answerDiv"; //設定 div ID
    divCreate.style = "float: right;"; //設定 div style

    element1.appendChild(divCreate); //插入 div

    /* 創建按鈕元素 */
    var element2 = document.getElementById("answerDiv"); //外層元素 ID
    var getTitle = document.getElementById("topic"); //取得網路假期題目

    if (element2 != null && getTitle != null) {
        var buttonCreate = document.createElement("BUTTON"); //創建按鈕元素
        var buttonSetText = document.createTextNode("解答查詢"); //設定按鈕文字

        buttonCreate.appendChild(buttonSetText); //套用設定的按鈕文字
        buttonCreate.className = "btn btn-link text-warning"; //設定按鈕 Class
        buttonCreate.id = "answerButton"; //設定按鈕 ID
        buttonCreate.type = "button"; //設定按鈕類型
        buttonCreate.style = "font-size: 20px; padding: 6px 15px;"; //設定按鈕 style
        buttonCreate.onclick = function() {window.open("https://netholiday.reh.tw/query.php?Title=" + encodeURI(getTitle.innerText), "_blank");};  //設定按鈕 onclick

        element2.appendChild(buttonCreate); //插入按鈕
    }
}
