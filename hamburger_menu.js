document.getElementById('hamburgerButton').addEventListener('click', function() {
    var menuItems = document.getElementsByClassName('menuStream');
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].style.display === 'none') {
            menuItems[i].style.display = 'block';
        } else {
            menuItems[i].style.display = 'none';
        }
    }
    var menuItems = document.getElementsByClassName('menuStream');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            var consoles = document.querySelectorAll('.console');
            consoles.forEach(function(console) {
                if (console.style.display !== 'none') {
                    console.style.display = 'none';
                }
            });
        });
    }
});