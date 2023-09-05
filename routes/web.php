<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/









Route::prefix('customer/v1')->group(function(){
    Route::get('/login',[AdminController::class,'index'])->name('admin.login');
    Route::get('/login/auth',[AdminController::class,'login'])->name('admin.login.auth');
    Route::get('/logout',[AdminController::class,'logout'])->name('admin.logout');
    Route::get('/register',[AdminController::class,'register'])->name('admin.register');
});





// Staff routes starts from here

Route::middleware('staff')->group(function(){
    // Route::get('products',[ProductController::class,'index'])->name('product');
});

// Staff routes ends here

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/barcode', function () {
    return Inertia::render('BarcodePage');
});
Route::get('/products', function () {
    return Inertia::render('ProductsPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/add-product', function () {
    return Inertia::render('AddProductPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::prefix('service')->group(function () {
    // create a service
    Route::get('/create', function () {
        return Inertia::render('Service/CreateServicePage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    });

    // view all services
    Route::get('/view-all', function () {
        return Inertia::render('Service/ViewServicePage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    });

     // view all services
     Route::get('/create-service-data', function () {
        return Inertia::render('Service/CreateEssentials/index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    });
});



Route::get('/customers', function () {
    return Inertia::render('CustomersPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),

    ]);
});

Route::get('/demo-test', function () {
    return Inertia::render('TestingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



// Route::get('apitest',[DashboardController::class,'apitest'])->name('apitest');




require __DIR__.'/auth.php';
