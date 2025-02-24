# Projet PHP - VougthPlus 🚀

Bienvenue dans le projet VougthPlus ! Ce projet est une application web permettant de gérer des héros, leurs pouvoirs, gadgets, équipes, etc.

## Prérequis 🛠️

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (version 6 ou supérieure)
- [PHP](https://www.php.net/) (version 7.4 ou supérieure)
- [Composer](https://getcomposer.org/)

## Installation 🔧

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/PaulDecat/Projet_PHP.git
    ```

2. Installez les dépendances PHP avec Composer :

    ```bash
    composer install
    ```

3. Configurez votre base de données en modifiant le fichier `.env` :

    ```env
    DB_DATABASE=C:\chemin\vers\votre\database.sqlite
    ```


4. Installez les dépendances JavaScript avec npm :

    ```bash
    cd Front-end/vougthplus
    npm install
    ```

## Lancer le projet 🚀

1. Démarrez le serveur PHP :

    ```bash
    php artisan serve
    ```

2. Démarrez le serveur de développement React :

    ```bash
    cd Front-end/vougthplus
    npm start
    ```

3. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir l'application en action.

## Fonctionnalités ✨

- Ajouter, modifier et supprimer des héros
- Gérer les pouvoirs, gadgets, équipes et autres attributs des héros
- Interface utilisateur moderne et réactive


Merci d'utiliser VougthPlus ! Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir une issue ou à nous contacter. 😊