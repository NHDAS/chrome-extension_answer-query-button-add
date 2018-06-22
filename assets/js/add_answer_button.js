/*
 * 網路假期 - 答案共享資料庫
 * https://netholiday.reh.tw/
 *
 * Copyright 2018 張文相 Zhang Wenxiang
 * https://www.facebook.com/GoneToneDY
 * https://blog.reh.tw/
 */
function createAddAnswerButton() {
    /* 請求網址 */
    var requestURL = "https://netholiday.reh.tw/add/";

    /* 創建 Div 元素 */
    var element1 = document.getElementsByClassName("assign-row")[1]; //外層元素 ID

    if (element1 != null) {
        var divCreate = document.createElement("div"); //創建 div 元素

        divCreate.id = "addAnswerDiv"; //設定 div ID
        divCreate.style = "position: absolute;right: 81px;bottom: 0px;font-size: 20px;"; //設定 div style

        element1.appendChild(divCreate); //插入 div

        /* 創建按鈕元素 */
        var element2 = document.getElementById("addAnswerDiv"); //外層元素 ID

        var linkList = document.getElementsByClassName("link-list"); //取得連結清單
        var topic = document.getElementById("topic").innerText.replace(/(^\s*)|(\s*$)/g, "");

        //預設
        if (topic == "." || topic == " " || topic == "") {
            var getTitle = document.getElementById("topic").getElementsByTagName("img")[0].src; //取得網路假期數學題目圖片網址
        } else {
            var getTitle = document.getElementById("topic").innerText; //取得網路假期題目
        }

        /* 創建網路假期正確答案陣列 */
        var getAnswerArray = new Array(); //宣告陣列
        for (var i = 0; i < linkList.length; i++) {
            if (linkList[i].getElementsByClassName("ans-check")[0] != null) {
                getAnswerArray[i] = linkList[i].getElementsByClassName("ans-dot")[0]; //取得網路假期正確答案陣列
            } else {
                getAnswerArray[i] = linkList[i].getElementsByTagName("div")[0]; //取得網路假期正確答案陣列
            }
        }

        /* 將 A B C D E 選項轉換為數字 */
        var getNumberArray = new Array(); //宣告陣列
        for (var i = 0; i < getAnswerArray.length; i++) {
            if (getAnswerArray[i].innerText == "A") {
                getNumberArray[i] = 0;
            } else if (getAnswerArray[i].innerText == "B") {
                getNumberArray[i] = 1;
            } else if (getAnswerArray[i].innerText == "C") {
                getNumberArray[i] = 2;
            } else if (getAnswerArray[i].innerText == "D") {
                getNumberArray[i] = 3;
            } else if (getAnswerArray[i].innerText == "E") {
                getNumberArray[i] = 4;
            }
        }

        if (element2 != null && getTitle != null && getNumberArray != null) {
            buttonCreate = document.createElement("BUTTON"); //創建按鈕元素
            buttonSetText = document.createTextNode("新增解答至資料庫"); //設定按鈕文字

            buttonCreate.appendChild(buttonSetText); //套用設定的按鈕文字
            buttonCreate.className = "btn btn-link text-warning"; //設定按鈕 Class
            buttonCreate.id = "addAnswerButton"; //設定按鈕 ID
            buttonCreate.type = "button"; //設定按鈕類型

            //設定按鈕 onclick
            buttonCreate.onclick = function() {
                var numberTitle = document.getElementById("title").innerText.replace(/(^\s*)|(\s*$)/g, ""); //取得目前題目為第幾題文字
                var number = numberTitle.slice(1, numberTitle.length - 1); //過濾後取得目前題目為第幾題

                var topic = document.getElementById("topic").innerText.replace(/(^\s*)|(\s*$)/g, "");
                var getAnswer = document.getElementsByClassName("radio")[getNumberArray[number - 1]].getElementsByTagName("label")[0].getElementsByTagName("div")[0]; //取得網路假期正確答案文字

                if (topic == "." || topic == " " || topic == "") { //判斷是文字還是圖片
                    var getTitle = document.getElementById("topic").getElementsByTagName("img")[0].src; //取得網路假期數學題目圖片網址
                    window.open(requestURL + "?Title=" + encodeURIComponent(getTitle.replace(/(^\s*)|(\s*$)/g, "")) + "&Answer=" + encodeURIComponent(getAnswer.innerText.replace(/(^\s*)|(\s*$)/g, "").slice(2)) + "&Source=Plugin", "_blank");
                } else {
                    var getTitle = document.getElementById("topic").innerText; //取得網路假期題目
                    window.open(requestURL + "?Title=" + encodeURIComponent(getTitle.replace(/(^\s*)|(\s*$)/g, "")) + "&Answer=" + encodeURIComponent(getAnswer.innerText.replace(/(^\s*)|(\s*$)/g, "").slice(2)) + "&Source=Plugin", "_blank");
                }
            };

            element2.appendChild(buttonCreate); //插入按鈕
        }
    }
}
window.onload = function() { //等待網頁載入完成
    setTimeout("createAddAnswerButton()", 500); //延遲 0.5 秒執行
}
