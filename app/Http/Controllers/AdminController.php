<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */

    public function index()
    {
        return view('loginpage');
        // return Inertia::render('Auth/Login', [
        //     'canLogin' => Route::has('login'),
        //     'canRegister' => Route::has('register'),
        //     'laravelVersion' => Application::VERSION,
        //     'phpVersion' => PHP_VERSION,
        // ]);
    }

    public function dashboard()
    {
        return view('dashboardpage');
    }

    public function login(Request $request)
    {
//         dd($request->all());

        $credentials = $request->only('email', 'password');

//        if(Auth::guard('admin')->attempt($credentials)){
//
//            $user = Auth::user();
//            $data ['name'] = $user->adminName;
//            $data ['access_token'] = $user->createToken('accessToken')->accessToken;
//
//            return send_response('Login success', $data);
//        }else{
//            return send_error('Invalid Credentials', [], 401);
//        }


        if(Auth::guard('admin')->attempt($credentials)) {

            // Laravel create session token by "_token" name ;
            // by storing this _token we can use this in frontend .....

            return redirect()->route('admin.dashboard')->with('message', 'Admin Login Successfull, Now you are in Dashboardpage');
        }else{
            return back()->with('message', 'Invalid email or password');
        }
    }


    public function registerpage(){
        return view('registerpage');
    }


    public function register(Request $request){

        // dd($request->all());

        Admin::insert([
            'adminName' => $request->adminName,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' =>Hash::make($request->password),
            // 'created_at' =>Carbon::now(),
        ]);

        return redirect()->route('admin.loginpage')->with('message', 'Admin Registration Successfull. Now Try to login');
    }









// Admin Test files ends here ...............................






    public function signin(Request $request){

        $validate = $request->all();

        if(Auth::guard('admin')->attempt([
            'email' => $validate['email'],
            'password' => $validate['password'],

        ])){
            // $request->authenticate();

//            $request->session()->regenerate();
            // Session::put('email',Auth::user());

            // return redirect()->route('product');
            return send_response('Admin Login Successfull !',[]);
        }else{
            // return back()->with('message','Invalid Email or Password !!!');

            return send_error('Invalid Email or Password');

        }

    }


    public function logout()
    {
        Auth::guard('admin')->logout();

        //  return redirect()->route('admin.login')->with('message', 'Logged Out Successfull !!');

        return send_response('You are Logged out !!', Auth::user());

    }
    public function registerAdmin(Request $request) {

//        $validator = Validator::make($request->all(),[
//            'adminName' => 'required|string|max:255',
//            'email' => 'required|string|email|max:255|unique:'.Admin::class,
//            'password' => ['required', 'confirmed', Rules\Password::defaults()],
//            ]);
//
//            if($validator->failed()) {
//                return send_response("name :nasim1",[]);
//
//            }

        $validate = $request->validated();
        $admin = Admin::create([
            'adminName' => $validate->adminName,
            'email' => $validate->email,
            'password' => Hash::make($validate->password),
            'phone' => $validate->phone,
            'status' => $validate->status
        ]);

        if($admin) {
            return send_response("Admin Registration Successfull !!",Session::all());
        }

        event(new Registered($admin));

        // Auth::login($admin);

        return send_response('Login Details',Auth::user());
    }

    // public function register(Request $request){
    //     return send_response("name :nasim1",[]);


    //     $request->validate([
    //         'adminName' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:'.Admin::class,
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //     ]);


    //     $admin = Admin::create([
    //         'adminName' => $request->adminName,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //     ]);

    //     event(new Registered($admin));

    //     Auth::login($admin);

    //     // Session::put('email',Auth::user('email'));

    //     return send_response('Login Details',Auth::user());
    // }


    /**
     * Show the form for creating a new resource.
     */


     public function create( Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        //        $validator = Validator::make($request->all(),[
//            'email' => 'required|email|unique:users',
//            'password' => 'required|min:6|confirmed',
//        ]);
//        if($validator->fails()){
//            return send_error('Data validation Failed !!',$validator->errors(),422);
//        }

        $validator = $request->validated();

        // Create a new user
        $user = User::create([
            'email' => $validator['email'],
            'password' => bcrypt($validator['password']),
        ]);

        // Create an admin record associated with the user
        Admin::create([
            'adminName' => $validator['adminName'],
            'email' => $validator['email'],
            'password' => bcrypt($validator['password']),
            'phone' => $validator->phone,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.loginpage')->with('message', 'Loggedout successfully !!!');
    }
}
