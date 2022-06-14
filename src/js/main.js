// Custom scripts

let form_input = document.querySelectorAll('.inputfrm');

if (form_input) {
    for (let i = 0; i < form_input.length; i++) {
        form_input[i].addEventListener('click', function () {
            let thisElement = this;

            let savePlaceholder = this.getAttribute('placeholder');

            this.setAttribute('placeholder', ' ');
            document.addEventListener('mouseup', function () {
                thisElement.setAttribute('placeholder', savePlaceholder);
            });
        });
    }
}


// question

const nst = document.querySelector('.navbar-ul-nst')
const question = document.querySelector('.navbar-ul-title')

function hidden () {

    nst.addEventListener('click', () => {
        question.classList.toggle('hidden')
    });

}

hidden ();