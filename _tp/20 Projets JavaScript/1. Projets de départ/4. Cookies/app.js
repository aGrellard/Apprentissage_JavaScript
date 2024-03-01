

function showCookies(){
    const cookies = document.cookie.split(';');
    console.log(cookies)

    document.querySelector('.container-cookies').innerHTML = ""

    cookies.forEach(item => {
        let split = item.split("=");
        if (split.length > 1) {

            let container = document.createElement('div');
            container.classList.add('d-column-center')
            container.classList.add('gap-1')
            container.classList.add('container-cookie')

            let span = document.createElement('span');
            span.classList.add('material-symbols-outlined')
            span.textContent = "close"

            let dl_1 = document.createElement('dl')
            let dt = document.createElement('dt');
            dt.innerText = "Nom"
            let dd = document.createElement('dd');
            dd.innerText = split[0]
            dl_1.appendChild(dt)
            dl_1.appendChild(dd)

            let dl_2 = document.createElement('dl')
            dt = document.createElement('dt');
            dt.innerText = "Valeur"
            dd = document.createElement('dd');
            dd.innerText = split[1]
            dl_2.appendChild(dt)
            dl_2.appendChild(dd)

            container.appendChild(span)
            container.appendChild(dl_1)
            container.appendChild(dl_2)

            document.querySelector('.container-cookies').appendChild(container)
        }
    })    
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form button[type="button"]').addEventListener('click', function (e) {
        e.preventDefault();
        showCookies()
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains('material-symbols-outlined')) {

            let target = e.target;
            let name = "";
            let value = "";

            let currentElement = target;
            while (currentElement) {
                if (currentElement.nodeName == "DL") {
                    if (currentElement.querySelector('dt').textContent == "Nom") {
                        name = currentElement.querySelector('dd').textContent
                    }
                    if (currentElement.querySelector('dt').textContent == "Valeur") {
                        value = currentElement.querySelector('dd').textContent
                        break;
                    }
                }
                currentElement = currentElement.nextElementSibling;
            }

            document.cookie = name + "=" + value + "; samesite=Lax; path=/; Expires=Thu, Jan 1970 00:00:00 UTC; max-age=" + 0;

            showCookies()
        }
    })

    document.querySelector('form button[type="submit"]').addEventListener('click', function (e) {
        e.preventDefault();
        var name = document.querySelector('form input[name="cookieName"]').value;
        var value = document.querySelector('form input[name="cookieValue"]').value;
        document.cookie = name + "=" + value + "; samesite=Lax; path=/; max-age=" + 86400;
        showCookies()
        // document.cookie = "user=" + name +"; expires=Thu, Jan 1970 00:00:00 UTC; samesite=Lax; path=/; max-age=0";
    });

    showCookies();
});