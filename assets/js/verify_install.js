/*
 * 網路假期 - 答案共享資料庫
 * https://netholiday.reh.tw/
 *
 * Copyright 2018 張文相 Zhang Wenxiang
 * https://www.facebook.com/GoneToneDY
 * https://blog.reh.tw/
 */
const chrome_plugin_button = document.getElementById("chrome-install-plugin-button");

if (chrome_plugin_button != null) {
    chrome_plugin_button.disabled = true; //禁用按鈕
    chrome_plugin_button.innerText = "您已經安裝此插件"; //修改按鈕文字
}
