function togglePasswordVisibility(fieldId) {
    var passwordField = document.getElementById(fieldId);
    passwordField.type = (passwordField.type === "password") ? "text" : "password"
}

let password1 = document.getElementById('password1');
let maj = document.getElementById('maj');
let min = document.getElementById('min');
let nbr = document.getElementById('nbr');
let cara = document.getElementById('cara');
let spec = document.getElementById('spec');
let valider = document.getElementById('valider');
let password2 = document.getElementById('password2');
let choix = document.getElementById('choix');

  //confirmation du mot de passe

  password2.oninput = function(){
    let erreur = document.getElementById('erreur');
    if(password1.value && password2.value){
         if(password1.value === password2.value){
   password2.classList.add('equal');
   password2.classList.remove('notequal');
   erreur.textContent = 'les mots de passe sont identiques';
   erreur.style.color='green';
    }
   else {
        password2.classList.remove('equal');
        password2.classList.add('notequal');
        erreur.textContent = 'Les mots de passe ne sont pas identiques';
        erreur.style.color='red';
    }
    }
    else{
        erreur.textContent = '';  
    }
   
  };


//Le message s'affiche juste lorsque l'utilisateur clique sur le champ pour le remplir 
password1.onfocus = function(){
    valider.style.display = 'block';
};

password1.onblur = function() {
    valider.style.display = 'none';
};

// Lorsqu'il tape
password1.onkeyup = function() {
    let password = password1.value;

    // Valider les lettres minuscules
    let minuscules = /[a-z]/;
    if (password.match(minuscules)) {
        min.classList.remove('invalid');
        min.classList.add('valid');
    }
     else {
        min.classList.remove('valid');
        min.classList.add('invalid');
    }

    // Valider les lettres majuscules
    let majuscules = /[A-Z]/;
    if (password.match(majuscules)) {
        maj.classList.remove('invalid');
        maj.classList.add('valid');
    }
     else {
        maj.classList.remove('valid');
        maj.classList.add('invalid');
    }

    // Valider les chiffres
    let chiffres = /[0-9]/;
    if (password.match(chiffres)) {
        nbr.classList.remove('invalid');
        nbr.classList.add('valid');
    }
     else {
        nbr.classList.remove('valid');
        nbr.classList.add('invalid');
    }

    // Valider la longueur (au moins 8 caractères)
    if (password.length >= 8) {
        cara.classList.remove('invalid');
        cara.classList.add('valid');
    }
     else {
        cara.classList.remove('valid');
        cara.classList.add('invalid');
    }

    // Valider au moins un caractère spécial
    let caracteresSpeciaux = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (password.match(caracteresSpeciaux)) {
        spec.classList.remove('invalid');
        spec.classList.add('valid');
    }
     else {
        spec.classList.remove('valid');
        spec.classList.add('invalid');
    }
};

function handleCVUpload() {
    const fileInput = document.getElementById('cv');
    const file = fileInput.files[0];
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const cvContent = event.target.result;
        // Appelez une fonction pour analyser le contenu du CV ici
        extractCVData(cvContent);
    };
    reader.readAsText(file);
}

function extractCVData(cvContent) {
    // Expression régulière pour rechercher le nom
    const nameRegex = /Nom\s*:\s*([^\n\r]+)/i;
    const matchName = cvContent.match(nameRegex);
    const fullName = matchName ? matchName[1].trim() : '';

    // Expression régulière pour rechercher le prénom
    const prenomRegex = /Prenom\s*:\s*([^\n\r]+)/i;
    const matchPrenom = cvContent.match(prenomRegex);
    const fullPrenom = matchPrenom ? matchPrenom[1].trim() : '';

    // Expression régulière pour rechercher l'e-mail
    const emailRegex = /Email\s*:\s*([^\n\r]+)/i;
    const matchEmail = cvContent.match(emailRegex);
    const email = matchEmail ? matchEmail[1].trim() : '';

    // Expression régulière pour rechercher la date de naissance
    const dateRegex = /Date_Naissance\s*:\s*([^\n\r]+)/i;
    const matchDate = cvContent.match(dateRegex);
    const dateNaissance = matchDate ? matchDate[1].trim() : '';

    // Expression régulière pour rechercher le numéro de téléphone
    const telephoneRegex = /Téléphone\s*:\s*([^\n\r]+)/i;
    const matchTelephone = cvContent.match(telephoneRegex);
    const telephone = matchTelephone ? matchTelephone[1].trim() : '';

    // Utilisation des données extraites pour remplir le formulaire d'inscription
    document.getElementById('nom').value = fullName;
    document.getElementById('prenom').value = fullPrenom;
    document.getElementById('email').value = email;
    document.getElementById('date').value = dateNaissance; // Utilisation de l'ID "date" pour le champ date de naissance
    document.getElementById('numero').value = telephone; // Utilisation de l'ID "numero" pour le champ numéro de téléphone
}
