<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroController;

Route::middleware('api')->group(function () {
    Route::get('/heroes', [HeroController::class, 'index']);
    Route::get('/heroes/{id}', [HeroController::class, 'show']);
    Route::post('/heroes', [HeroController::class, 'store']);
    Route::put('/heroes/{id}', [HeroController::class, 'update']);
    Route::delete('/heroes/{id}', [HeroController::class, 'destroy']);
});