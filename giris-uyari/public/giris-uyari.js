function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Lütfen email ve şifre alanlarını doldurun.');
        return false; 
    }

    
    return true;
}
