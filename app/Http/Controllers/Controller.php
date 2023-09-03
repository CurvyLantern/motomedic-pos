<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function adminAuthcheck(){
        $id=Session::get('id');
        if ($id){
            return request();
        }
        else{
            return Redirect::to("/login")->send();
        }
    }

    // public function customerAuthcheck(){

    //     $customer_id=Session::get('customer_id');
    //     if ($customer_id){
    //         return;
    //     }
    //     else{
    //         return Redirect::to("/login")->send();
    //     }
    // }
}
