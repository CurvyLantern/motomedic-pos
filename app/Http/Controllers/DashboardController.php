<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    public function apitest(){

        // this funtion is define into main controller file.
        // $this->adminAuthcheck();

        Session::put(Auth::user());
        // dd(
        //     Session::all(),
        // );

        $context = [

        ];

        return view('apitest');

    }
}
