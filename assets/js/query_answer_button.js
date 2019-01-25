/*
 * 網路假期 - 答案共享資料庫
 * https://netholiday.reh.tw/
 *
 * Copyright 2018 張文相 Zhang Wenxiang
 * https://www.facebook.com/GoneToneDY
 * https://blog.reh.tw/
 */
function createQueryAnswerButton() {
    /* 請求網址 */
    var requestURL = "https://netholiday.reh.tw/query.php";

    /* 創建 Div 元素 */
    var element1 = document.getElementById("under"); //外層元素 ID

    if (element1 != null) {
        var divCreate = document.createElement("div"); //創建 div 元素

        divCreate.id = "queryAnswerDiv"; //設定 div ID
        divCreate.style = "float: right;"; //設定 div style

        element1.appendChild(divCreate); //插入 div

        /* 創建按鈕元素 */
        var element2 = document.getElementById("queryAnswerDiv"); //外層元素 ID

        var linkList = document.getElementsByClassName("link-list"); //取得連結清單
        var pagePrev = document.getElementsByClassName("prev")[0].getElementsByTagName("button")[0]; //取得上一題按鈕
        var pageNext = document.getElementsByClassName("next")[0].getElementsByTagName("button")[0]; //取得下一題按鈕
        var topic = document.getElementById("topic").innerText.replace(/(^\s*)|(\s*$)/g, "");

        //預設
        var getTitle;
        if (topic === "." || topic === "") {
            getTitle = document.getElementById("topic").getElementsByTagName("img")[0].src; //取得網路假期數學題目圖片網址
        } else {
            getTitle = document.getElementById("topic").innerText; //取得網路假期題目
        }

        if (element2 != null && getTitle != null) {
            var buttonCreate = document.createElement("BUTTON"); //創建按鈕元素
            var buttonSetText = document.createTextNode("解答查詢"); //設定按鈕文字

            buttonCreate.appendChild(buttonSetText); //套用設定的按鈕文字
            buttonCreate.className = "btn btn-link text-warning"; //設定按鈕 Class
            buttonCreate.id = "queryAnswerButton"; //設定按鈕 ID
            buttonCreate.type = "button"; //設定按鈕類型
            buttonCreate.style = "font-size: 20px; padding: 6px 15px;"; //設定按鈕 style

            buttonCreate.onclick = function() {
                var topic = document.getElementById("topic").innerText.replace(/(^\s*)|(\s*$)/g, "");

                var getTitle;
                if (topic === "." || topic === " " || topic === "") { //判斷是文字還是圖片
                    getTitle = document.getElementById("topic").getElementsByTagName("img")[0].src; //取得網路假期數學題目圖片網址
                    window.open(requestURL + "?Title=" + encodeURIComponent(getTitle.replace(/(^\s*)|(\s*$)/g, "")) + "&Source=Plugin", "queryAnswer", config = "height=650, width=500, toolbar=no, location=no, menubar=no, status=no, left=50, top=50");
                } else {
                    getTitle = document.getElementById("topic").innerText; //取得網路假期題目
                    window.open(requestURL + "?Title=" + encodeURIComponent(getTitle.replace(/(^\s*)|(\s*$)/g, "")) + "&Source=Plugin", "queryAnswer", config = "height=650, width=500, toolbar=no, location=no, menubar=no, status=no, left=50, top=50");
                }
            };  //設定按鈕 onclick

            element2.appendChild(buttonCreate); //插入按鈕
        }
    }
}

window.onload = function() { //等待網頁載入完成
    setTimeout("createQueryAnswerButton()", 500); //延遲 0.5 秒執行
}
