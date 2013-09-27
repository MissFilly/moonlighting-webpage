//  The function to change the class
var changeClass = function (r, className1, className2) {
    var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
    if (regex.test(r.className)) {
        r.className = r.className.replace(regex, ' ' + className2 + ' ');
    }
    else {
        r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"), ' ' + className1 + ' ');
    }
    return r.className;
};

//  Creating our button for smaller screens
var menuElements = document.getElementById('menu');
menuElements.insertAdjacentHTML('beforeBegin', '<div id="menu-btn-wrapper"><button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><img src="/static/img/menuicon.png" alt="Menu" /></button></div>');

//  Toggle the class on click to show / hide the menu
document.getElementById('menutoggle').onclick = function () {
    changeClass(document.getElementById('menu-btn-wrapper'), 'active', '');
}

// document click to hide the menu
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
document.onclick = function (e) {
    var mobileButton = document.getElementById('menu-btn-wrapper'),
        buttonStyle = mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

    if (buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
        changeClass(mobileButton, 'active', '');
    }
}
