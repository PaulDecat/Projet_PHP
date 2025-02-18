<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\GadgetController;
use App\Http\Controllers\PlanetController;
use App\Http\Controllers\PowerController;
use App\Http\Controllers\TeamController;

Route::middleware('api')->group(function () {
    Route::get('/heroes', [HeroController::class, 'index']);
    Route::get('/heroes/{id}', [HeroController::class, 'show']);
    Route::post('/heroes', [HeroController::class, 'store']);
    Route::put('/heroes/{id}', [HeroController::class, 'update']);
    Route::delete('/heroes/{id}', [HeroController::class, 'destroy']);

    Route::get('/cities', [CityController::class, 'index']);
    Route::get('/cities/{id}', [CityController::class, 'show']);
    Route::post('/cities', [CityController::class, 'store']);

    Route::get('/gadgets', [GadgetController::class, 'index']);
    Route::get('/gadgets/{id}', [GadgetController::class, 'show']);
    Route::post('/gadgets', [GadgetController::class, 'store']);

    Route::get('/planets', [PlanetController::class, 'index']);
    Route::get('/planets/{id}', [PlanetController::class, 'show']);
    Route::post('/planets', [PlanetController::class, 'store']);

    Route::get('/powers', [PowerController::class, 'index']);
    Route::get('/powers/{id}', [PowerController::class, 'show']);
    Route::post('/powers', [PowerController::class, 'store']);

    Route::get('/teams', [TeamController::class, 'index']);
    Route::get('/teams/{id}', [TeamController::class, 'show']);
    Route::post('/teams', [TeamController::class, 'store']);
});