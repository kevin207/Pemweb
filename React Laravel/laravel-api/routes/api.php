<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;

Route::get('students', [StudentController::class, 'fetch']);
Route::post('/add-student', [StudentController::class, 'store']);
Route::get('edit-student/{id}', [StudentController::class, 'edit']);
Route::post('update-student/{id}', [StudentController::class, 'update']);
Route::delete('delete-student/{id}', [StudentController::class, 'remove']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
