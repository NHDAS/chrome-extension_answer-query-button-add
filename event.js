//指定比對的 url，不允許片段表達式
//例如 *://*.google.com.tw/* ，作為查詢字串不被接受因為 host 是一個片段表達式
var urlPattern = [
    "*://netholiday.kh.edu.tw/*",
    "*://163.16.5.199/*"
];

//利用 tabs.query api 查找畫面上的所有 tab
function queryTabsAndShowPageActions(queryObject) {
    chrome.tabs.query(queryObject,
        function(tabs) {
            if (tabs && tabs.length > 0) {
                for (var i = 0; i < tabs.length; i++) {
                    //在加載完畢的 tab 上，使用 chrome.pageAction.show 啟用按鈕
                    if (tabs[i].status === "complete") chrome.pageAction.show(tabs[i].id);
                }
            }
        }
    );
}

//第一次的初始化
chrome.runtime.onInstalled.addListener(function() {
    queryTabsAndShowPageActions({
        "active": false,
        "currentWindow": true,
        "url": urlPattern
    });
});

//每次 tab 有變動，檢查現在這個 current tab 是否在指定的 url pattern 底下
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    queryTabsAndShowPageActions({
        "active": true,
        "currentWindow": true,
        "url": urlPattern
    });
});
