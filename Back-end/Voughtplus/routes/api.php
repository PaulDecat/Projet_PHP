<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HerosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/heros', [HerosController::class, 'index']);
Route::post('/heros', [HerosController::class, 'store']);
Route::get('/heros/{id}', [HerosController::class, 'show']);
Route::put('/heros/{id}', [HerosController::class, 'update']);
Route::delete('/heros/{id}', [HerosController::class, 'destroy']);
