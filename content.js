show();
function show() {
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    console.log(">>>", new Date());

    var el = document.getElementsByClassName("athing");
    for (var x = 0; x < el.length; x++) {
        var e = el[x].getElementsByClassName('storylink')[0];
        console.log(e.href);
        chrome.history.search({
                'text': e.href // Return every history item....
                //'startTime': oneWeekAgo // that was accessed less than one week ago.
            },
            function (historyItems) {
                // For each history item, get details on all visits.
                for (var i = 0; i < historyItems.length; ++i) {
                    var url = historyItems[i].url;
                    console.log(url);

                }
            });

    };
}