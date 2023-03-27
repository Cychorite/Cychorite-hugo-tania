window.onload = function () {
    var article = document.getElementsByClassName('article-post');
    if (article.length === 0) return;
    var a = document.getElementsByClassName('article-post')[0].getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        if (a[i].href.indexOf(location.origin) !== 0) {
            a[i].setAttribute('target', '_blank');
        }
    }
}