(function (){
    const Signin = {
        fields: [
            {
                name: 'email',
                id: 'floatingInput email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            },
            {
                name: 'password',
                id: 'floatingPassword password',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            }
        ],
        init() {
            let that = this;
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                console.log(item.element);
                item.element.onchange = function () {
                    that.validateField.call(that, item, this);
                }
            });
        },
        validateField(field, element) {
            if (!element.value || !element.value.match(field.regex)) {
                element.style.borderColor = 'red';
            } else {
                element.removeAttribute('style');
            }
        }
    };

    Signin.init();
})();