<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(Request $request)
    {
        $validate = $request->all();
        if(Auth::guard('admin')->attempt([
            // 'email' => $validate['email'],
            // 'password' => $validate['password'],
            'email' => $request->email,
            'password' =>$request->password,

        ])){

            // return redirect()->route('admin.dashboard')->with('message','Logged in successfull');
            return send_response('Your are Logged in !' , Auth::guard('admin')->user());
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

    public function register(Request $request){


        return send_response('This is register Option', Auth::guard('admin')->user());
    }

    public function dashboard()
    {
        return send_response('This is Dashboard API',[]);
    }


    /**
     * Show the form for creating a new resource.
     */



    public function index()
    {
        return send_response('This will be login page route',[]);
    }

     public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        //
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
        //
    }
}
