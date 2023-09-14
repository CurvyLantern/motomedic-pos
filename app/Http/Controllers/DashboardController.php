<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    public function apitest(){

        // this funtion is define into main controller file.
        // $this->adminAuthcheck();

        $products = Product::get();

        $context = [
            'products' => $products,
        ];

        return view('apitest')->with([
            'products' => $products,
        ]);

    }

    public function categoryProducts(Request $request, $id, $slug){
        try{
        $category = Category::where('id', $id)->first();

        if($category){
            $products = $category->products()->get();
        }
        return send_response('Category Products Loaded successfully', $products);

        }catch(Exception $e){
            return send_error('category Not Found',$e->getCode());
        }
    }
}
