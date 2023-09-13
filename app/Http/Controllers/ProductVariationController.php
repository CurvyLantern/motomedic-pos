<?php

namespace App\Http\Controllers;

use App\Models\ProductVariation;
use App\Http\Requests\StoreProductVariationRequest;
use App\Http\Requests\UpdateProductVariationRequest;

class ProductVariationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productVariation = ProductVariation::all()->sort('id', 'desc')->forPage(1, 15);
        $context = [
            'productVariation' => $productVariation,
        ];

        return send_response('ProductVariation Data successfully loaded !', $context);
    }

        /**
     * Display the specified resource.
     */
    public function show(ProductVariation $productVariation,$id)
    {
        $productVariation = ProductVariation::find($id);


        if ($productVariation) {
            return send_response('ProductVariation founded !', $productVariation);
        } else {
            return send_error('ProductVariation Not found !!!');
        }
    }

    // public function showbyProduct(ProductVariation $productVariation,$product_id)
    // {
    //     $productVariation = Product::where('id', $request->$product_id)->get();


    //     if ($productVariation) {
    //         return send_response('ProductVariation founded !', $productVariation);
    //     } else {
    //         return send_error('ProductVariation Not found !!!');
    //     }
    // }

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
    public function store(StoreProductVariationRequest $request)
    {
        //
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductVariation $productVariation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductVariationRequest $request, ProductVariation $productVariation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductVariation $productVariation)
    {
        //
    }
}
