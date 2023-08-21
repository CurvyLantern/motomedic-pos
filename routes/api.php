<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ServiceCategoryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProductModelController;



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


// service category routes 
Route::get('service-category',[ServiceCategoryController::class,'index'])->name('serviceCategory');


// service routes
Route::get('service',[ServiceController::class,'index'])->name('service');
Route::post('service-create',[ServiceController::class,'create'])->name('serviceCreate');
Route::get('service-show/{id}',[ServiceController::class,'show'])->name('serviceshow');
Route::post('service-update/{id}',[ServiceController::class,'update'])->name('serviceUpdate');
Route::delete('service-destroy/{id}',[ServiceController::class,'destroy'])->name('servicedestroy');


// products category routes

Route::get('category',[CategoryController::class, 'index'])->name('category');
Route::post('category-create',[CategoryController::class,'create'])->name('categoryCreate');
Route::post('category-update/{id}',[CategoryController::class,'update'])->name('categoryUpdate');
Route::delete('category-destroy/{id}',[CategoryController::class,'destroy'])->name('categoryDestroy');
Route::get('category-show/{id}',[CategoryController::class,'show'])->name('categoryShow');


// brands routes 

Route::get('brand',[BrandController::class,'index'])->name('brand');
Route::post('brand-create',[BrandController::class,'create'])->name('brandCreate');
Route::post('brand-update/{id}',[BrandController::class,'update'])->name('brandUpdate');
Route::delete('brand-destroy/{id}',[BrandController::class,'destroy'])->name('brandDestroy');
Route::get('brand-show/{id}',[BrandController::class,'show'])->name('brandShow');

// productModel routes 

Route::get('product-model',[ProductModelController::class,'index'])->name('productModel');
Route::post('product-model-create',[ProductModelController::class,'create'])->name('productModelCreate');
Route::post('product-model-update/{id}',[ProductModelController::class,'update'])->name('productModelUpdate');
Route::delete('product-model-destroy/{id}',[ProductModelController::class,'destroy'])->name('productModelDestroy');
Route::get('product-model-show/{id}',[ProductModelController::class,'show'])->name('productModelShow');

// 

