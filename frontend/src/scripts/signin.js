(function () {
    const Signin = {
        agreeElement: null,
        processElement: null,
        fields: [
            {
                name: 'email',
                id: 'floatingInput email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false
            },
            {
                name: 'password',
                id: 'floatingPassword password',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false
            }
        ],
        init() {
            let that = this;
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                item.element.onchange = function () {
                    that.validateField.call(that, item, this);
                }
            });

            this.processElement = document.getElementById('process');
            this.processElement.onclick = function () {
                that.processForm();
            }

            this.agreeElement = document.getElementById('agree');
            this.agreeElement.onchange = function () {
                that.validateForm();
            }
        },
        validateField(field, element) {
            if (!element.value || !element.value.match(field.regex)) {
                element.style.borderColor = 'red';
                field.valid = false;
            } else {
                element.removeAttribute('style');
                field.valid = true;
            }
            this.validateForm();
        },
        validateForm() {
            const validForm = this.fields.every(item => item.valid);
            if (validForm) {
                this.processElement.removeAttribute('disabled')
            } else {
                this.processElement.setAttribute('disabled', 'disabled')
            }

            return validForm;
        },
        processForm() {
            if (this.validateForm()) {
                location.href = 'home.html'
            }
        }
    };

    Signin.init();
})();