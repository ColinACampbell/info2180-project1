function onFormSubmit() {
    const messageBody = document.getElementsByClassName('message')[0];
    const emailInput = document.getElementById('email');
    const email = emailInput.value

    if (email.length === 0)
        messageBody.innerHTML = `Please enter a valid email address`

    else
        messageBody.innerHTML = `Thank you! Your email address ${email} has been added to our mailing list`
    return false;
}


window.onload = () => {
    const form = document.getElementsByTagName('form')[0]
    form.setAttribute('onsubmit', 'return onFormSubmit()')

}