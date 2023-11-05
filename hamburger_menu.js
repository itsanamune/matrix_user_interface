document.getElementById('hamburgerButton').addEventListener('click', function() {
    var menuItems = document.getElementsByClassName('menuStream');
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].style.display === 'none') {
            menuItems[i].style.display = 'block';
        } else {
            menuItems[i].style.display = 'none';
        }
    }

  
});


 