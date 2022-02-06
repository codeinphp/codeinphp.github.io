document.addEventListener("DOMContentLoaded", function(event) {
    if (window.location.href.indexOf("post/") > -1) {
	    window.location.href = 'https://codenphp.blogspot.com/search?q=' + encodeURIComponent(window.location.href.split('post/')[1].replace(/[\W_]+/g," "));
    }
    else {
        window.location.href = 'https://codenphp.blogspot.com';
    }
});
