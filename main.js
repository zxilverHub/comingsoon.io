const nextBtn = document.querySelector('#next'),
      err = document.querySelector('.error'),
      valid = document.getElementById('valid');

nextBtn.addEventListener('click', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('email').value;

    let ok = emailRegex.test(email);

    if(ok) {
        err.setAttribute('style', 'display: none')
        valid.setAttribute('style', 'display: none')
    } else {
        err.setAttribute('style', 'display: block')
    valid.setAttribute('style', 'display: block')
    }
})