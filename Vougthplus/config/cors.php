<?php

return [
    'paths' => ['api/*', 'register'],  // Les routes que tu veux autoriser
    'allowed_methods' => ['*'],  // Tous les verbes HTTP
    'allowed_origins' => ['http://localhost:3000'],  // Origine autorisée (ton frontend)
    'allowed_headers' => ['*'],  // Tous les headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];