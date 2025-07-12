/*
 * 網路假期 - 答案共享資料庫
 * https://netholiday.reh.tw/
 *
 * Copyright 2025 張文相 Zhang Wenxiang
 * https://www.facebook.com/GoneToneDY
 * https://blog.reh.tw/
 */

chrome.runtime.onInstalled.addListener(() => {
    // Page actions are disabled by default and enabled on select tabs
    chrome.action.disable();

    // Clear all rules to ensure only our expected rules are set
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        // Declare a rule to enable the action on example.com pages
        let exampleRule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostSuffix: 'netholiday.kh.edu.tw'},
                }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostSuffix: '163.16.5.199'},
                }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostSuffix: 'netholiday.reh.tw'},
                }),
            ],
            actions: [new chrome.declarativeContent.ShowAction()],
        };

        // Finally, apply our new array of rules
        let rules = [exampleRule];
        chrome.declarativeContent.onPageChanged.addRules(rules);
    });
});
