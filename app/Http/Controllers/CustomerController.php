<?php

namespace App\Http\Controllers;

use DB;
use Exception;
use App\Models\User;
use App\Models\Customer;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Support\Facades\Auth;


class CustomerController extends Controller
{


    /**
     * Display a listing of the resource.
     */

     public function index(){

        return view('loginpage');
   }

   public function dashboard()
   {
       return view('dashboardpage');
   }

   public function login(Request $request)
   {
       dd($request->all());

       $validator = $request->all();

       if(Auth::guard('customer')->attempt([
           'email' => $validator['email'],
           'password' => $validator['password']
       ])){
           return send_response('Your are Logged in !' , Auth::guard('customer')->user());
           // return redirect()->route('admin.dashboard')->with('message', 'Admin Login Successfull, Now you are in Dashboardpage');
       }else{
           return back()->with('message', 'Invalid email or password');
       }
   }


   public function registerpage(){
       return view('registerpage');
   }



    public function logout()
    {
        Auth::guard('customer')->logout();

        //  return redirect()->route('admin.login')->with('message', 'Logged Out Successfull !!');

        return send_response('You are Logged out !!', Auth::user());

    }

    public function register(Request $request){


        $validator = Validator::make($request->all(),[
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
            'phone' => 'required|min:11',
        ]);
        if($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }


        try{

        // Create a new user
        $user = User::create([
            'email' => $request->email,
            'name' => $request->customerName,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
        ]);

        // Create an admin record associated with the user
        $customer = Customer::create([
            'customerName' => $request->customerName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
        ]);


            return send_response('Customer Registration Success !',$customer);

        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());

        }
    }




    /**
     * Show the form for creating a new resource.
     */

    public function allCustomer(){
        $customers = Customer::orderBy('id','asc')->paginate(15);

        $context = [
            'customers' => $customers,
        ];

        return send_response('Customers Data successfully loaded !', $context);
    }


    public function addCustomer(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
            'phone' => 'required|min:11',
        ]);
        if($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }


        try{

        // Create a new user
        $user = User::create([
            'email' => $request->email,
            'name' => $request->customerName,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
        ]);

        // Create an admin record associated with the user
        $customer = Customer::create([
            'customerName' => $request->customerName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
        ]);


            return send_response('Customer Login Success !',$customer);

        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());

        }
    }



    /**
     * Store a newly created resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function customerDetails(Request $request, $id)
    {
        try{


            $customer = Customer::whereId($id)->firstOrfail();

            // $customerDetails = DB::table('UserDetails')->Where('id', $customer->userDetailsId);

            $customerDetails = UserDetail::where('id', $customer->userDetailsId)->firstOrFail();



            if($customer){

                $context=[
                    'customer' => $customer,
                    'customerDetails' => $customerDetails,
                ];
                return send_response('Customer founded !',$context);

            }else{
                return send_error('Customer not found !',[]);
            }

        }catch( Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function editCustomer(Customer $customer ,Request $request, $id)
    {
        $validator = Validator::make($request->all(),[

            'customerName' =>"required",
            'email' =>"required",
            'phone' =>"required",
            'password' =>"required",
        ]);
        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }

        try{

            $customer = Customer::find($id);

            $customer->customerName = $request->customerName;
            $customer->email = $request->email;
            $customer->phone = $request->phone;
            $customer->password = $request->password;

            $customer->save();

            $context=[
                'customer' => $customer,
            ];

            return send_response('Customer Update Successfull ', $customer);
        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }


    }

    /**
     * Update the specified resource in storage.
     */


    /**
     * Remove the specified resource from storage.
     */
    public function deleteCustomer(Request $request , $id)
    {
        try{
            $customer = Customer::find($id);
            if($customer){
                $customer->delete();
            }else{
                return send_response('Customer Not Found !',[]);
            }
            return send_response('Customer Deleted successfully',[]);
        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }
    }
}
