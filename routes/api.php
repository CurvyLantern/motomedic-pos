<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ServiceCategoryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProductModelController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;



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
Route::get('service-category',[ServiceCategoryController::class,'index'])->name('service.category');


// service routes
Route::get('service',[ServiceController::class,'index'])->name('service');
Route::post('service-create',[ServiceController::class,'create'])->name('service.create');
Route::get('service-show/{id}',[ServiceController::class,'show'])->name('service.show');
Route::post('service-update/{id}',[ServiceController::class,'update'])->name('service.update');
Route::delete('service-destroy/{id}',[ServiceController::class,'destroy'])->name('service.destroy');


// products category routes

Route::get('getCategoryAttributeData',[CategoryController::class,'getCategoryAttributeData'])->name('get.category.attribute.data'); // Get all the column name from here

Route::get('category',[CategoryController::class, 'index'])->name('category');
Route::post('category-create',[CategoryController::class,'create'])->name('category.create');
Route::post('category-update/{id}',[CategoryController::class,'update'])->name('category.update');
Route::delete('category-destroy/{id}',[CategoryController::class,'destroy'])->name('category.destroy');
Route::get('category-show/{id}',[CategoryController::class,'show'])->name('category.show');


// brands routes

Route::get('getBrandsAttributeData',[BrandController::class,'get.brands.attribute.data'])->name('getBrandsAttributeData'); // Get all the column name from here

Route::get('brand',[BrandController::class,'index'])->name('brand');
Route::post('brand-create',[BrandController::class,'create'])->name('brand.create');
Route::post('brand-update/{id}',[BrandController::class,'update'])->name('brand.update');
Route::delete('brand-destroy/{id}',[BrandController::class,'destroy'])->name('brand.destroy');
Route::get('brand-show/{id}',[BrandController::class,'show'])->name('brand.show');

// productModel routes

Route::get('product-model',[ProductModelController::class,'index'])->name('product.model');
Route::post('product-model-create',[ProductModelController::class,'create'])->name('product.model.create');
Route::post('product-model-update/{id}',[ProductModelController::class,'update'])->name('product.model.update');
Route::delete('product-model-destroy/{id}',[ProductModelController::class,'destroy'])->name('product.model.destroy');
Route::get('product-model-show/{id}',[ProductModelController::class,'show'])->name('product.model.show');

// products data routes


Route::get('getProductAttributeData',[ProductController::class,'getProductAttributeData'])->name('get.product.attribute.data'); // Get all the column name from here

Route::get('products',[ProductController::class,'index'])->name('product');
Route::post('product-create',[ProductController::class,'create'])->name('product.create');
Route::post('product-update/{id}',[ProductController::class,'update'])->name('product.update');
Route::delete('product-destroy/{id}',[ProductController::class,'destroy'])->name('product.destroy');
Route::get('product-show/{id}',[ProductController::class,'show'])->name('product.show'); 


// Order data api routes

Route::get('getOrderAttributeData',[OrderController::class,'getOrderAttributeData'])->name('get.order.attribute.data');

Route::get('orders',[OrderController::class,'index'])->name('orders');
Route::get('orders-create',[OrderController::class,'create'])->name('orders.create');
Route::post('product-update/{id}',[ProductController::class,'update'])->name('product.update');
Route::post('product-show/{id}',[ProductController::class,'show'])->name('product.update');

