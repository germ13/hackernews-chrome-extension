// var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
// var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
// var numRequestsOutstanding = 0;

// var historySearch = chrome.history.search({
//     'text': 'google',              // Return every history item....
//     'startTime': oneWeekAgo  // that was accessed less than one week ago.
//   },
//   function(historyItems) {
//     // For each history item, get details on all visits.
//     for (var i = 0; i < historyItems.length; ++i) {
//       var url = historyItems[i].url;
//       var processVisitsWithUrl = function(url) {
//         // We need the url of the visited item to process the visit.
//         // Use a closure to bind the  url into the callback's args.
//         return function(visitItems) {
//           //processVisits(url, visitItems);
//           console.log(visitItems);
//           alert(visitItems);
//         };
//       };
//       chrome.history.getVisits({url: url}, processVisitsWithUrl(url));
//       numRequestsOutstanding++;
//     }
//     if (!numRequestsOutstanding) {
//       onAllVisitsProcessed();
//     }
//   });


function historySearch() {
    alert(new Date());
}

chrome.runtime.onInstalled.addListener(function () {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([{
            // That fires when a page's URL contains a 'g' ...
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'news.ycombinator.com'
                    }
                }), new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'hackerne.ws'
                    }
                })
            ],
            // And shows the extension's page action.
            actions: [
                new chrome.declarativeContent.ShowPageAction()
            ]
        }]);
    });
});