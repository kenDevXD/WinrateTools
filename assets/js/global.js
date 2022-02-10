function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const Kendev = `<a href="https://zaky-pedia.asia/home/" target="_blank">Kendev</a>`;
    const zkyyrxxiIG = `<a href="https://www.instagram.com/zkyyrxxi/" target="_blank">zkyyrxxi</a>`;
    const KendevWA = `<a href="https://api.whatsapp.com" target="_blank">Kendev</a>`;

    const msg1 = `<p class="animation mb-0 text-truncate">Patuhi Protocol Kesehatan ${Kendev} ya</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">IG: ${zkyyrxxiIG} / WA: ${KendevWA}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Copyright ❤️ Kendev</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Tetap jaga kesehatan..`;
    const msg5 = `<p class="animation mb-0 text-truncate">Hehey not bad...</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
