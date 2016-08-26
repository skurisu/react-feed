import Q from 'q';

export default function getFeed() {
  var deferred = Q.defer();

  google.load("feeds", "1");

  function initialize() {
    var feed = new google.feeds.Feed("http://www.frolichawaii.com/feed/");
    feed.load(function(result) {
      deferred.resolve(result.feed.entries);
    });
  }
  google.setOnLoadCallback(initialize);
  return deferred.promise
}

