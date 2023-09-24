<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
	"prefix" => "projects"
], function () {
    Route::post("/fetchSingle", [ProjectController::class, "fetchSingle"]);
    Route::post("/fetch", [ProjectController::class, "fetch"]);
	Route::post("/create", [ProjectController::class, "create"]);
});