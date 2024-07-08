const bcrypt = require('bcrypt');

// Le mot de passe en clair que vous souhaitez vérifier
const plainPassword = 'password123';

// Le mot de passe haché stocké dans la base de données
const storedHashedPassword = '$2b$10$mQuMJAuxEORxNPcUcQWbR.nRSvBIsPqryxhLBd7uPkybMcCDp4UF6'; // Remplacez par le hachage stocké dans votre base de données

// Affiche le hachage stocké dans la base de données
console.log('Stored hashed password:', storedHashedPassword);

// Hash le mot de passe en clair pour affichage
bcrypt.hash(plainPassword, 10, (err, generatedHash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Generated hash for plain password:', generatedHash);
    
    // Compare le mot de passe en clair avec le hachage stocké
    bcrypt.compare(plainPassword, storedHashedPassword, (compareErr, result) => {
      if (compareErr) {
        console.error('Error during comparison:', compareErr);
      } else if (result) {
        console.log('Password matches');
      } else {
        console.log('Password does not match');
      }
    });
  }
});
