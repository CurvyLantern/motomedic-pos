<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(Request $request)
    {
        $validate = $request->all();
        if(Auth::guard('customer')->attempt([
            // 'email' => $validate['email'],
            // 'password' => $validate['password'],
            'email' => $request->email,
            'password' =>$request->password,

        ])){

            // return redirect()->route('admin.dashboard')->with('message','Logged in successfull');
            return send_response('Your are Logged in !' , Auth::guard('customer')->user());
        }else{
            // return back()->with('message','Invalid Email or Password !!!');

            return send_error('Invalid Email or Password');

        }
    }

    public function logout()
    {
        Auth::guard('customer')->logout();

        //  return redirect()->route('admin.login')->with('message', 'Logged Out Successfull !!');

        return send_response('You are Logged out !!', Auth::user());

    }

    public function register(Request $request){


        return send_response('This is register Option', Auth::guard('customer')->user());
    }


    public function index()
    {
        return send_response('This will be login page route',[]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
