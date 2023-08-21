<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\ServiceCategory;
use App\Http\Requests\StoreServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Http\Resources\ServiceCategoryResource;

class ServiceCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        $serviceCategory = ServiceCategory::orderBy('id','asc')->get();

        if ($serviceCategory){
            return send_response('ServiceCategory data successfully loded' , ServiceCategoryResource::collection($serviceCategory));
        }else{
            return send_error('Data fetching task failed !!');
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
    public function store(StoreServiceCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ServiceCategory $serviceCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ServiceCategory $serviceCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceCategoryRequest $request, ServiceCategory $serviceCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ServiceCategory $serviceCategory)
    {
        //
    }
}
