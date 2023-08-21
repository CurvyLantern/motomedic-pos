<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use Illuminate\Support\Facades\Validator;




class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands=Brand::orderBy('id','asc')->get();

        $context =[
            'brands' => $brands,

        ];

        return send_response('Brand data successfully loaded !!',$context);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $validator = Validator::make($request->all(),[
            "brandName" => "required",
            "description"=>"required",
            "slug"=>"required",
            "img"=>"required",
            ]);
            

        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }

        try{
            //create brand and save it to database
            if ($request->hasFile('img')){
                $imagePath = $request->file('img')->store('brand','public');
                $request->img = $imagePath;
            }

            $brand=Brand::create([
                "brandName"=> $request->brandName,
                "slug"=>$request->slug,
                "description"=>$request->description,
                "img"=>$request->img,
                "parentbrandId"=>$request->parentbrandId,
                ]);
            $context = [
                'brand'=>$brand ,
            ];
            
            
            return send_response('Brand create successfull !',$context);
        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBrandRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand,$id)
    {
        //
        $brand = Brand::find($id);

        
        if($brand){
            return send_response('Brand founded !',$brand);
        }else{
            return send_error('Brand Not found !!!');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand,$id)
    {
        //
        $validator = Validator::make($request->all(),[
            "brandName" => "required",
            "description"=>"required",
            "img"=>"required",

        ]);
        if($validator->fails()){
            return send_error('Validation Error', $validator->errors(),422);
        }

        try{

            $brand = Brand::find($id);
            $brand->brandName = $request->brandName;
            $brand->slug=$request->slug;
            $brand->description=$request->description ;
            $brand->img =$request->img; 
            $brand->save();

            $context = [
                'brand'=>$brand,
            ];

            return send_response('Brand update successfully',$context);

        }catch(Exception $e){
            return send_error('Brand update failed !!!');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand, $id)
    {
        //
        try{
            $brand = Brand::find($id);
            if($brand){
                $brand->delete();
            }
            return send_response('Brand Deleted successfully',[]);
        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }
    }
}
