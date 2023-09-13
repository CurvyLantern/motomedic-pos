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
use App\Http\Controllers\ColorController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductAttributeController;




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

    Route::prefix('admin')->group(function () {
        Route::get('/loginpage', [AdminController::class, 'index'])->name('admin.login'); //login page
        Route::get('/register', [AdminController::class, 'registerpage'])->name('admin.registerpage'); //reg page
        //    Route::post('/register/create',[AdminController::class , 'register'])->name('admin.register');

        Route::post('/login', [AdminController::class, 'login'])->name('admin.auth');
        Route::post('/register', [AdminController::class, 'store'])->name('admin.register');
    });



    // Admin login and register routes ends here ...........



    // Admin pages routes starts from here .................

    //after fully integrated with frontend this routes needs to pass through middleware


    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    // Admin pages routes ends here ..............


    // Customer management route for admin


    Route::get('/customers', [CustomerController::class, 'allCustomer'])->name('admin.allCustomer');
    Route::post('/customer/create', [CustomerController::class, 'addCustomer'])->name('admin.addCustomer');
    Route::delete('/customer/{id}', [CustomerController::class, 'deleteCustomer'])->name('admin.deleteCustomer');
    Route::put('/customer/{id}', [CustomerController::class, 'editCustomer'])->name('admin.editCustomer');

    Route::get('/customer-details/{id}', [CustomerController::class, 'customerDetails'])->name('admin.customerDetails');

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

    Route::prefix('service')->group(function () {

        Route::get('/all', [ServiceController::class, 'index'])->name('services');
        Route::get('/{id}', [ServiceController::class, 'show'])->name('service.show');
        Route::post('/create', [ServiceController::class, 'create'])->name('service.create');
        Route::put('/{id}', [ServiceController::class, 'update'])->name('service.edit');
        Route::delete('/{id}', [ServiceController::class, 'destroy'])->name('service.delete');
    });


    // Service management routes for admin ends

    // Products management routes for admin start

    Route::prefix('product')->group(function () {

        Route::get('/all', [ProductController::class, 'index'])->name('products');
        Route::get('/{id}', [ProductController::class, 'show'])->name('product.show');
        // Route::get('/add-product',[ProductController::class,'create'])->name('product.create'); // use store route instead of this route
        Route::post('/create', [ProductController::class, 'store'])->name('product.store');
        //    Route::put('product/{id}',[ProductController::class,'update'])->name('product.update');
        Route::delete('/{id}', [ProductController::class, 'destroy'])->name('product.destroy');
    });

    // Products management routes for admin ends


    // Products Categoty management routes for admin starts

    Route::prefix('category')->group(function () {

        Route::get('all', [CategoryController::class, 'index'])->name('categories');
        Route::get('/{id}', [CategoryController::class, 'show'])->name('category.show');
        Route::post('/create', [CategoryController::class, 'create'])->name('category.create');
        Route::put('/{id}', [CategoryController::class, 'update'])->name('category.update');
        Route::delete('/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');
        Route::get('/{id}/products', [CategoryController::class, 'categoryProducts'])->name('category.products');
    });


    // Brands CRUD routes...................

    Route::prefix('brand')->group(function () {
        Route::get('/all', [BrandController::class, 'index'])->name('brands');
        Route::get('/{id}', [BrandController::class, 'show'])->name('brand.show');
        Route::post('/create', [BrandController::class, 'store'])->name('brand.create');
        Route::put('/{id}', [BrandController::class, 'update'])->name('brand.update');
        Route::delete('/{id}', [BrandController::class, 'destroy'])->name('brand.destroy');
        Route::get('/{id}/products', [BrandController::class, 'brandProducts'])->name('brand.products');
        // Route::post('testBrand',[BrandController::class,'testBrand'])->name('brand.testBrand');
    });
    //    Route::get('brand/all/{id}',[BrandController::class,'nasim'])->name('nasim');





    // Orders CRUD routes...................

    Route::prefix('order')->group(function () {

        Route::get('all', [OrderController::class, 'index'])->name('orders');
        Route::get('/{id}', [OrderController::class, 'show'])->name('order.show');
        Route::post('/create', [OrderController::class, 'create'])->name('order.create');
        Route::put('/{id}', [OrderController::class, 'update'])->name('order.edit');
        Route::delete('/{id}', [OrderController::class, 'destroy'])->name('order.delete');
    });


    // Route::get('order/{id}/products',[OrderController::class,'brandProducts'])->name('order.products');


    // Product attributes routes ............


    Route::prefix('product-attribute')->group(function () {

        Route::get('all', [ProductAttributeController::class, 'index'])->name('productAttributes');
        Route::get('/{id}', [ProductAttributeController::class, 'show'])->name('productAttribute.show');
        Route::post('/create', [ProductAttributeController::class, 'store'])->name('productAttribute.create');
        Route::put('/{id}', [ProductAttributeController::class, 'update'])->name('productAttribute.edit');
        Route::delete('/{id}', [ProductAttributeController::class, 'destroy'])->name('productAttribute.delete');
    });





    // Admin middleware controll routes ................



    Route::middleware('admin')->group(function () {
        Route::get('products', [ProductController::class, 'index'])->name('admin.products');

        Route::get('/logout', [AdminController::class, 'destroy'])->name('admin.delete');
    });



    // Products Categoty management routes for admin ends


    // Public routes .........................................

    // Route::get('colors',[ColorController::class,'index'])->name('color');


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



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', function () {
    return Inertia::render('Welcome');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



// Route::get('apitest',[DashboardController::class,'apitest'])->name('apitest');


// Public routes ...............................................

// Route::get('color/create',[ColorController::class,'create'])->name('color.create');






require __DIR__ . '/auth.php';
