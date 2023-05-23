/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToogle = document.getElementById('nav-toogle')
const navClose = document.getElementById('nav-close')
/*====== SHOW MENU =======*/
// Validamos si la constante existe
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*====== SHOW MENU =======*/
// Validamos si la constante existe
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos clic en cualquier enlace del menu se quitara el menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop    = current.offsetTop - 58,
              sectionId     = current.getAttribute('id')
              sectionClass  = document.querySelector('.nav__menu a[href*='+ sectionId + ']')
        
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}           
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-mesagge')
const calculateBmi = (e) => {
    e.preventDefault()
    // checar si los inputs tienen valor
    if (calculateCm.value === '' || calculateKg.value === '') {
        //agregar y remover color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        // valor de mensaje
        calculateMessage.textContent = 'Rellene la altura y el peso 👨‍💻'
        //remover el mensaje despues de un tiempo
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 5000)
    } else {
        //BMI FORMULA
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))
        // Show your health status
        if (bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu BMI es ${bmi} y estas flaco 😞`
        } else if (bmi < 25) {

            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu BMI es ${bmi} y estas saludable 🥳`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} y tienes sobrepeso 🥳`
        }

        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        //remover el mensaje despues de un tiempo
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 7000)
    }
}
calculateForm.addEventListener('submit', calculateBmi)


/*=============== EMAIL JS ===============*/
const contactForm    = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser    = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()
    // checar si el input no esta vacio
    if (contactUser.value === '') {
        // agregar y remover color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        // ver mensaje
        contactMessage.textContent = 'Debes ingresar tu correo electrónico ☝️'
        //remover el mensaje despues de un tiempo
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    } else {
        // serviceID - templateID - #form - publicKey
        const serviceID = 'service_lhx2eec';
        const templateID = 'template_nyr2vse';
        emailjs.sendForm(serviceID, templateID, contactForm)
            .then(() => {
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Te registraste con éxito 💪';
                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
                // Clear input fields
                contactForm.reset()
            }, (err) => {
                alert('¡UPS! ALGO HA FALLADO...', err)

            });
            
    }
}
contactForm.addEventListener('submit', sendEmail)