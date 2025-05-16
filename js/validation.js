// ✅ Validation formulaire login
document.getElementById("login-form")?.addEventListener("submit", function(e) {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  if (email === "" || !email.includes("@")) {
    Swal.fire('Erreur', '❌ Email invalide !', 'error');
    e.preventDefault();
    return;
  }

  if (password.length < 6) {
    Swal.fire('Erreur', '❌ Le mot de passe doit contenir au moins 6 caractères.', 'error');
    e.preventDefault();
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Connexion réussie !',
    showConfirmButton: false,
    timer: 2000
  });
});

// ✅ Validation formulaire inscription
document.getElementById("signup-form")?.addEventListener("submit", function(e) {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm-password").value;

  if (email === "" || !email.includes("@")) {
    Swal.fire('Erreur', '❌ Email invalide !', 'error');
    e.preventDefault();
    return;
  }

  if (password.length < 6) {
    Swal.fire('Erreur', '❌ Le mot de passe est trop court.', 'error');
    e.preventDefault();
    return;
  }

  if (password !== confirm) {
    Swal.fire('Erreur', '❌ Les mots de passe ne correspondent pas !', 'error');
    e.preventDefault();
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Inscription réussie !',
    showConfirmButton: false,
    timer: 2000
  });
});

// ✅ Validation formulaire ajout médicament
document.getElementById("form-medicament")?.addEventListener("submit", function(e) {
  let nom = document.getElementById("nom").value.trim();
  let stock = parseInt(document.getElementById("stock").value);
  let date = new Date(document.getElementById("date").value);
  let aujourdHui = new Date();
  aujourdHui.setHours(0, 0, 0, 0);

  if (nom === "") {
    Swal.fire('Erreur', '❌ Le nom du médicament est obligatoire !', 'error');
    e.preventDefault();
    return;
  }

  if (isNaN(stock) || stock <= 0) {
    Swal.fire('Erreur', '❌ Le stock doit être un nombre positif.', 'error');
    e.preventDefault();
    return;
  }

  if (isNaN(date.getTime()) || date <= aujourdHui) {
    Swal.fire('Erreur', '❌ La date de péremption doit être dans le futur.', 'error');
    e.preventDefault();
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Médicament ajouté avec succès !',
    showConfirmButton: false,
    timer: 2000
  });
});

// ✅ Validation formulaire modification médicament
document.getElementById("form-modif")?.addEventListener("submit", function(e) {
  let nom = document.getElementById("nom").value.trim();
  let stock = parseInt(document.getElementById("stock").value);
  let date = new Date(document.getElementById("date").value);
  let aujourdHui = new Date();
  aujourdHui.setHours(0, 0, 0, 0);

  if (nom === "") {
    Swal.fire('Erreur', '❌ Le nom du médicament est obligatoire !', 'error');
    e.preventDefault();
    return;
  }

  if (isNaN(stock) || stock <= 0) {
    Swal.fire('Erreur', '❌ Le stock doit être un nombre supérieur à 0.', 'error');
    e.preventDefault();
    return;
  }

  if (isNaN(date.getTime()) || date <= aujourdHui) {
    Swal.fire('Erreur', '❌ La date de péremption doit être dans le futur.', 'error');
    e.preventDefault();
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Médicament modifié avec succès !',
    showConfirmButton: false,
    timer: 2000
  });
});

