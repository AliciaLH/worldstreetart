const form = document.querySelector('.contactform');

function subscribeValidator(){
    let subscribe = document.querySelector('#subscribe').value;

    if (subscribe == ''){
        alert("Enter a Valid Email Address!");
        document.querySelector('#subscribe').style.borderColor = "red";
        return false;
    }
}; 
form.addEventListener('submit', e => {
    e.preventDefault(); 

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    if(name == '') {
        alert("Enter a Valid Name!");
        form.name.style.borderColor = "red";
        return false;
    }
    if (phone == '') {
        alert("Enter a Valid Phone Address!");
        form.phone.style.borderColor = "red";
        return false;
    }

    if (email == '') {
        alert("Enter a Valid Email Address!");
        form.email.style.borderColor = "red";
        return false;
    }

    form.submit();

});