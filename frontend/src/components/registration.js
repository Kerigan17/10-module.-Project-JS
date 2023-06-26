export class Registration {

    constructor() {
        this.agreeElement = null;
        this.processElement = null;
        this.passwordOne = null;
        this.passwordTwo = null;
        this.fields = [
            {
                name: 'fio',
                id: 'floatingName',
                element: null,
                regex: /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/,
                valid: false
            },
            {
                name: 'email',
                id: 'floatingInput',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false
            },
            {
                name: 'password',
                id: 'floatingPassword',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false
            },
            {
                name: 'passwordTwo',
                id: 'floatingPasswordTwo',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false
            }
        ]

        let that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this);
            }
        });

        this.passwordOne = document.getElementById('floatingPassword');
        this.passwordTwo = document.getElementById('floatingPasswordTwo');

        this.processElement = document.getElementById('process');
        this.processElement.onclick = function () {
            if (that.passwordOne.value !== that.passwordTwo.value) {
                alert('Пароли не совпадают')
            } else {
                that.processForm();
            }
        }
    }

    validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
            element.style.borderColor = 'red';
            field.valid = false;
        } else {
            element.removeAttribute('style');
            field.valid = true;
        }
        this.validateForm();
    }

    validateForm() {
        const validForm = this.fields.every(item => item.valid);
        if (validForm) {
            this.processElement.removeAttribute('disabled')
        } else {
            this.processElement.setAttribute('disabled', 'disabled')
        }

        return validForm;
    }

    processForm() {
        if (this.validateForm()) {
            location.href = 'home.html'
        }
    }
}