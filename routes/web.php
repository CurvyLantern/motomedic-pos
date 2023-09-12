<?php



use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ServiceController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;



//......... custom controllers

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\OrderController;




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

// Admin routes starts from here

Route::prefix('v1')->group(function () {


    // Admin login and register routes.............


    Route::get('/login', [AdminController::class, 'index'])->name('admin.login');
    Route::post('/login/auth', [AdminController::class, 'login'])->name('admin.auth');
    Route::get('/register', [AdminController::class, 'registerpage'])->name('admin.registerpage');
    Route::post('/register/create', [AdminController::class, 'register'])->name('admin.register');


    // Admin login and register routes ends here ...........



    // Admin pages routes starts from here .................

    //after fully integrated with frontend this routes needs to pass through middleware


    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    // Admin pages routes ends here ..............


    // Customer management route for admin


    Route::get('/all-customer', [CustomerController::class, 'allCustomer'])->name('admin.allCustomer');
    Route::post('/add-customer', [CustomerController::class, 'addCustomer'])->name('admin.addCustomer');
    Route::get('/delete-customer/{id}', [CustomerController::class, 'deleteCustomer'])->name('admin.deleteCustomer');
    Route::post('/edit-customer/{id}', [CustomerController::class, 'editCustomer'])->name('admin.editCustomer');

    // Customer management route for admin ends here ...


    // Customer management route for customer starts from here ...

    Route::prefix('customer')->group(function () {


        // customer  CRUD routes ................

        Route::get('/login', [CustomerController::class, 'index'])->name('customer.loginpage');
        Route::post('/login/auth', [CustomerController::class, 'login'])->name('customer.auth');
        Route::get('/logout', [CustomerController::class, 'logout'])->name('customer.logout');
        Route::get('/registerpage', [CustomerController::class, 'registerpage'])->name('customer.registerpage');
        Route::post('/register', [CustomerController::class, 'register'])->name('customer.register');
        Route::post('/update/{id}', [CustomerController::class, 'update'])->name('customer.update');
    });

    // Customer management route for customer ends here ...


    // Service management routes for admin

    Route::get('/services', [ServiceController::class, 'index'])->name('services');
    Route::get('/service/{id}', [ServiceController::class, 'show'])->name('service.show');
    Route::post('/add-service', [ServiceController::class, 'create'])->name('service.create');
    Route::post('/edit-service/{id}', [ServiceController::class, 'update'])->name('service.edit');

    Route::get('/delete-service/{id}', [ServiceController::class, 'destroy'])->name('service.delete');

    // Service management routes for admin ends

    // Products management routes for admin start

    Route::get('/products', [ProductController::class, 'index'])->name('products');
    Route::get('product/{id}', [ProductController::class, 'show'])->name('product.show');
    // Route::get('/add-product',[ProductController::class,'create'])->name('product.create'); // use store route instead of this route

    Route::post('store-product', [ProductController::class, 'store'])->name('product.store');
    Route::post('edit-product/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::get('delete-product/{id}', [ProductController::class, 'destroy'])->name('product.destroy');

    // Products management routes for admin ends


    // Products Categoty management routes for admin starts


    Route::get('categories', [CategoryController::class, 'index'])->name('categories');
    Route::get('category/{id}', [CategoryController::class, 'show'])->name('category.show');
    Route::post('add-category', [CategoryController::class, 'create'])->name('category.create');
    Route::post('edit-category/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::get('destroy-category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');


    Route::get('category/{id}/products', [CategoryController::class, 'categoryProducts'])->name('category.products');




    // Brands CRUD routes...................




    Route::get('brands', [BrandController::class, 'index'])->name('brands');
    Route::get('brand/{id}', [BrandController::class, 'show'])->name('brand.show');
    Route::post('add-brand/', [BrandController::class, 'create'])->name('brand.create');
    Route::post('edit-brand/', [BrandController::class, 'create'])->name('brand.create');
    Route::get('delete-brand/{id}', [BrandController::class, 'destroy'])->name('brand.destroy');
    Route::get('brand/{id}/products', [BrandController::class, 'brandProducts'])->name('brand.products');

    // Route::post('testBrand',[BrandController::class,'testBrand'])->name('brand.testBrand');


    // Orders CRUD routes...................

    Route::get('orders', [OrderController::class, 'index'])->name('orders');
    Route::get('order/{id}', [OrderController::class, 'show'])->name('order.show');
    Route::post('add-order/', [OrderController::class, 'create'])->name('order.create');
    Route::post('edit-order/', [OrderController::class, 'create'])->name('order.create');
    Route::get('delete-order/{id}', [OrderController::class, 'destroy'])->name('order.destroy');

    // Route::get('order/{id}/products',[OrderController::class,'brandProducts'])->name('order.products');







    // Admin middleware controll routes ................



    Route::middleware('admin')->group(function () {

        Route::delete('/delete', [AdminController::class, 'destroy'])->name('admin.delete');
    });



    // Products Categoty management routes for admin ends


});


// Admin Routes only ......................................

// Route::middleware('admin')->group(function(){

//     Route::delete('/delete',[AdminController::class , 'destroy'])->name('admin.delete');



// });



// Admin routes ends here

Route::prefix('customer/v1')->group(function () {

    // Customer login registretion routes ................

    Route::get('/logout', [CustomerController::class, 'logout'])->name('customer.logout');
    Route::get('/registerpage', [CustomerController::class, 'registerpage'])->name('customer.registerpage');
    Route::post('/register', [CustomerController::class, 'register'])->name('customer.register');
});


// Customer login registretion routes ................


// Staff routes starts from here


Route::middleware('staff')->group(function () {
    // Route::get('products',[ProductController::class,'index'])->name('product');
});


// Staff routes ends here



// Public routes ...............................................
// Public routes ...............................................
// Public routes ...............................................
// Public routes ...............................................
// Public routes ...............................................


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

Route::prefix('products')->group(function () {
    Route::get('/brands', function () {
        return Inertia::render('Product/BrandPage');
    });

    Route::get('/colors', function () {
        return Inertia::render('Product/ColorPage');
    });

    Route::get('/attributes', function () {
        return Inertia::render('Product/AttributePage');
    });
});

Route::prefix('sales')->group(function () {
    Route::get('/orders', function () {
        return Inertia::render('Sales/OrderPage');
    });
    Route::get('/invoice', function () {
        return Inertia::render('Sales/InvoicePage');
    });
});

Route::get('/', function () {
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

    // test

    Route::get(
        '/edit/{id}',
        function () {
            return Inertia::render('Service/EditServicePage');
        }
    )->name('service.editPage');

    // test end

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




require __DIR__ . '/auth.php';
