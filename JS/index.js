
document.addEventListener("DOMContentLoaded", function () {
    let divBio = document.getElementsByClassName('bio');
    if (divBio.length === 0) {
        console.error("Aucun élément avec la classe 'bio' trouvé.");
        return;
    }

    let circle = document.createElement('div');
    circle.style.width = '500px';
    circle.style.height = '500px';
    circle.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png)';
    circle.style.backgroundSize = 'cover';
    circle.style.backgroundRepeat = 'no-repeat';
    circle.style.backgroundPosition = 'center';
    circle.style.borderRadius = '50%';


    let container = divBio[0];
    container.style.display = 'flex';
    container.style.alignItems = 'center';

    let paragraphContainer = document.createElement('div');
    paragraphContainer.style.display = 'flex';
    paragraphContainer.style.flexDirection = 'column';

    while (container.firstChild) {
        paragraphContainer.appendChild(container.firstChild);
    }

    container.appendChild(paragraphContainer);
    container.appendChild(circle);
});


