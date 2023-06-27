import {Registration} from "./components/registration.js";

export class Router {
    constructor() {
        this.routs = [
            {
                route: '#/',
                title: 'Главная',
                template: 'templates/home.html',
                styles: 'css.home.css',
                load: () => {

                }
            },
            {
                route: '#/registration',
                title: 'Регистрация',
                template: 'templates/registration.html',
                styles: 'css/sign-in.css',
                load: () => {
                    new Registration()
                }
            },
        ]
    }

    async openRoute() {
        const newRoute = this.routs.find(item => {
            return item.route === window.location.hash;
        })

        if (!newRoute) {
            window.location.href = '#/';
            return;
        }

        document.getElementById('content').innerHTML = await fetch(newRoute.template).then(response => response.text());
        document.getElementById('styles').setAttribute('href', newRoute.styles);
        document.getElementById('title').innerText = newRoute.title;
        newRoute.load();
    }
}