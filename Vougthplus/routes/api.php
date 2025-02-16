<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroController;

Route::get('/heroes', [HeroController::class, 'index']);
Route::post('/heroes', [HeroController::class, 'store']);
Route::get('/heroes/{id}', [HeroController::class, 'show']);
Route::put('/heroes/{id}', [HeroController::class, 'update']);
Route::delete('/heroes/{id}', [HeroController::class, 'destroy']);