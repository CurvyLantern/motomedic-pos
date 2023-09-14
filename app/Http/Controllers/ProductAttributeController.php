<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\ProductAttribute;
use App\Http\Requests\StoreProductAttributeRequest;
use App\Http\Requests\UpdateProductAttributeRequest;

class ProductAttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productAttribute = ProductAttribute::orderBy('id', 'asc')->get();

        if ($productAttribute) {
            // return send_response('productAttribute data successfully loded' , ProductAttributeResource::collection($productAttribute));
            return send_response('productAttribute Data Loaded !', $productAttribute);
        } else {
            return send_error('productAttribute fetching task failed !!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductAttribute $productAttribute, $id)
    {
        $productAttribute = ProductAttribute::find($id);

        if ($productAttribute) {
            return send_response("ProductAttribute Data Found !", $productAttribute);
        } else {
            return send_error("ProductAttribute Data Not Found ");
        }
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
    public function store(StoreProductAttributeRequest $request)
    {
        $validated = $request->validated();
        if (!$validated) {
            return send_error('validation Failed !!');
        }

        try {
            $productAttribute = ProductAttribute::create([
                'name' => $request->name,
            ]);
            return send_response("service create successfull", $productAttribute);
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductAttribute $productAttribute)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductAttributeRequest $request, ProductAttribute $productAttribute, $id)
    {
        $validated = $request->validated();

        // dd($validated['name']);
        if (!$validated) {
            return send_error("Validation Failed");
        }
        try {

            $productAttribute = ProductAttribute::find($id);
            if ($productAttribute) {

                $productAttribute->name = $request->name;
                $productAttribute->save();
                return send_response("ProductAttribute Update successfully !", $productAttribute);
            } else {
                return send_response('No ProductAttribute found !!', []);
            }
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductAttribute $productAttribute, $id)
    {
        try {

            $productAttribute = ProductAttribute::find($id);

            if ($productAttribute) {
                $productAttribute->delete();
            }
            return send_response("ProductAttribute delete successfully !", []);
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }
}
