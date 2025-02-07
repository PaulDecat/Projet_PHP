<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroesController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/heroes', [HeroesController::class, 'index']);
Route::post('/heroes', [HeroesController::class, 'store']);
Route::get('/heroes/{id}', [HeroesController::class, 'show']);
Route::put('/heroes/{id}', [HeroesController::class, 'update']);
Route::delete('/heroes/{id}', [HeroesController::class, 'destroy']);