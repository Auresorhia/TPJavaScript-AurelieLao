'use strict'

let erreurNom = document.getElementById('errorName');
console.log(erreurNom);

let erreurPrenom = document.getElementById('errorPrename');
console.log(erreurPrenom);

let erreurEmail = document.getElementById('errorEmail');

let erreurDate = document.getElementById('errorDate');

let erreurAdresse = document.getElementById('errorAdress');

let erreurMdp = document.getElementById('errorMdp');

let erreurMdpConfirm = document.getElementById('errorMdpConfirm')

let lastName = document.getElementById('nom');
console.log(lastName);

let firstName = document.getElementById('prenom');
console.log(firstName);

let eMail = document.getElementById('email');
console.log(eMail);

let dAte = document.getElementById('date');
console.log(dAte);

let aDresse = document.getElementById('adresse');
console.log();

let passWord = document.getElementById('mdp');
console.log(passWord);

let confirmPassword = document.getElementById('confirm-mdp');
console.log(confirmPassword);

let button = document.getElementById('validated');
console.log(button);

let confirmation = document.getElementById('confirmated');

let user = [];
let error = [];


function containsSpecialCharacters(value) {
    const specialCharsRegex = /[^a-zA-Z\séèàêîôùçÉÈÀÊÎÔÙÇ]/;
    return specialCharsRegex.test(value);
}

function emailSpecialCharacters(email) {
    const specialCharsRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com)$/;
    return specialCharsRegex.test(email);
}

button.addEventListener('click',(event) => {
    refresh();
    event.preventDefault();
    validateLastName();
    validateFirstName();
    validateEmail();
    validateDate();
    validateAdress();
    validatePassword();
    validateConfirmedPassword();
    confirmForm();
    console.log(user);
    console.log(error);
    
})

const refresh = () => {
    erreurNom.innerHTML= '';
    erreurPrenom.innerHTML='';
    erreurEmail.innerHTML = '';
    erreurDate.innerHTML = '';
    erreurAdresse.innerHTML='';
    erreurMdpConfirm.innerHTML='';
    erreurMdp.innerHTML ='';
    user = [];
    error = [];
    confirmation.innerHTML = '';
}


const validateLastName = () => {
    const trimLastName = lastName.value.trim();
    if(trimLastName == ''){
        erreurNom.innerHTML += 'Veuillez entrer votre nom <br>';
        error.push({nom: 'erreur'});
    }else if (/[0-9]/.test(trimLastName)){
        erreurNom.innerHTML += 'Veuillez Entrer un nom et non des chiffres<br>';
        error.push({nom: 'erreur'});
    }else if (trimLastName.length < 5){
        erreurNom.innerHTML += 'Votre nom est trop petit <br>';
        error.push({nom: 'erreur'});
    }else if (trimLastName.length > 15){
        erreurNom.innerHTML += 'Votre nom est trop grand <br>';
        error.push({nom: 'erreur'});
    } else if (containsSpecialCharacters(trimLastName)) {
        erreurNom.innerHTML += 'Le prénom contient des caractères spéciaux <br>';
        error.push({nom: 'erreur'});
    }else{
        user.push({nom: trimLastName});
        return;
    }
}

const validateFirstName = () => {
    const trimFirstName = firstName.value.trim();
    if(trimFirstName == '') {
        erreurPrenom.innerHTML += 'Veuillez entrer votre prénom <br>';
        error.push({prenom: 'erreur'});
    } else if (/[0-9]/.test(trimFirstName)) {
        erreurPrenom.innerHTML += 'Veuillez entrer un prénom et non des chiffres<br>';
        error.push({prenom: 'erreur'});
    } else if (containsSpecialCharacters(trimFirstName)) {
        erreurPrenom.innerHTML += 'Le prénom contient des caractères spéciaux <br>';
        error.push({prenom: 'erreur'});
    } else if (trimFirstName.length < 5) {
        erreurPrenom.innerHTML += 'Votre prénom est trop petit <br>';
        error.push({prenom: 'erreur'});
    } else if (trimFirstName.length > 15) {
        erreurPrenom.innerHTML += 'Votre prénom est trop grand <br>';
        error.push({prenom: 'erreur'});
    } else {
        user.push({prenom:trimFirstName});
        return;
    }
}

const validateEmail = () => {
    const trimEmail = eMail.value.trim();
    if(trimEmail == ''){
        erreurEmail.innerHTML += 'Veuillez entrer un email <br>';
        error.push({email: 'erreur'});
    } else if (!trimEmail.includes('@') || (!trimEmail.includes('.fr') && !trimEmail.includes('.com'))){
        erreurEmail.innerHTML += 'Veuillez entrer un bon email <br>';
        error.push({email: 'erreur'});
    } else if (!emailSpecialCharacters(trimEmail)) {
        erreurEmail.innerHTML += 'Le mail contient des caractères spéciaux <br>';
        error.push({email: 'erreur'});
    }else{
        user.push({email: trimEmail});
        return;
    }
}

const validateDate = () => {
    let dateNow = new Date();
    let dateSaisi = dAte.valueAsDate;
    console.log(dateSaisi);
    if(dateSaisi == null){
        erreurDate.innerHTML += 'Veuillez entrer une date de naissance <br>';
        error.push({date: 'erreur'});
    }else if(dateSaisi > dateNow){
        erreurDate.innerHTML += 'Veuillez entrer une date qui ne sois pas ultérieure <br>';
        error.push({date: 'erreur'});
    }else{
        user.push({date:dateSaisi});
        return;
    }
}

const validateAdress = () =>{
    const trimAdresse = aDresse.value.trim();
    const addressRegex = /[0-9]+\s+[a-zA-Z\s]+/;
    if (trimAdresse === '') {
        erreurAdresse.innerHTML += 'Veuillez entrer une adresse postale <br>';
        error.push({adresse: 'erreur'});
    }else if (!addressRegex.test(trimAdresse)) {
        erreurAdresse.innerHTML += 'L\'adresse doit contenir un numéro et une rue <br>';
        error.push({adresse: 'erreur'});
    }else{
        user.push({adresse:trimAdresse});
        return;
    }
}



const validatePassword = () => {
    const trimPassWord = passWord.value.trim();
    if(passWord.value == ''){
        erreurMdp.innerHTML += 'Veuillez entrer un mot de passe <br>';
        error.push({mdp: 'erreur'});
    }else if(trimPassWord.length < 8){
        erreurMdp.innerHTML += 'Veuillez entrer un mot de passe à 8 caractère max <br>'
        error.push({mdp: 'erreur'});
    }else{
        return;
    }
}

const validateConfirmedPassword = () => {
    const MdpSaisi = passWord.value.trim();
    if(confirmPassword.value == '' &&  MdpSaisi == ''){
        erreurMdpConfirm.innerHTML += '';
    }else if (confirmPassword.value != MdpSaisi){
        erreurMdpConfirm.innerHTML += 'Veuillez entrer le même mot de passe<br>';
        error.push({mdpCORFIRMED: 'erreur'});
    }else{
        return;
    }
}

const confirmForm = () => {
    if (error.length === 0 && user.length > 0){
        confirmation.innerHTML += '<h3>Votre formulaire a bien été enregistré !</h3>';
    }else{
        return;
    }
}
