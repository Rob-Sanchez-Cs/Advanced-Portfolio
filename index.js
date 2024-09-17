function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    loading.classList += " modal__overlay--visible";

    emailjs.sendForm(
        'service_zfwmst9',
        'template_689nsdg',
        event.target,
        'Br7m5ykSaaBPbLEgZ'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on rob.sanchez.j@gmail.com"
        );
    })

    
    loading.classList += " modal__overlay--visible"


}

let isModalOpen = false;
function toggleModal() {
    
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }

    isModalOpen = true;
    document.body.classList += ' modal--open';

    
}