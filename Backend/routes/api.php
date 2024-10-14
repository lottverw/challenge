<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProjectController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [UserController::class, 'index']); 
Route::get('/users/{uuid}', [UserController::class, 'show']); 


Route::get('/projects', [ProjectController::class, 'index']); 
Route::post('/projects/assign', [ProjectController::class, 'assignUser']);