<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use Illuminate\Support\Facades\Validator;
use Exception;


class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function testBrand(Request $req){
    //     return send_response('dasdasd',[]);
    //  }

    public function getBrandsAttributeData() {
        $tableName = 'brands'; // Replace with the actual table name

        if (Schema::hasTable($tableName)) {
            $columnNames = Schema::getColumnListing($tableName);
            return $columnNames;
        } else {
            return ['Table not found'];
        }
    }


    public function index()
    {
        $brands=Brand::orderBy('id','asc')->get();

        $context =[
            'brands' => $brands,

        ];

        return send_response('Brand data successfully loaded !!',$context);
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
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $validator = Validator::make($request->all(),[
            "brandName" => "required",
            "description"=>"required",
            "img"=>"required",
            ]);


        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }

        try{
            //create brand and save it to database
            if ($request->hasFile('img')){
                $imagePath = $request->file('img')->store('brand','public');
            }

            $brand=Brand::create([
                "brandName"=> $request->brandName,
                'slug'=>  Str::slug($request->brandName, '-'),
                "description"=>$request->description,
                "img"=> $imagePath,
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
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand, Request $request,$id)
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand,$id)
    {

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
                return send_response('Brand Deleted successfully',[]);
            }else{
                return send_error('Brand Not Found !!');
            }
        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }
    }



    public function brandProducts(Request $request , $id){

        try{

            // $products = Product::all()->where('brandId',$request->id);
            $products = Product::where('brandId', $request->id)->get();

            // $products = Brand::findsOrfails($id)->where('id',Product::get('brandId'));

            if($products){

            $context =[
                'products' => $products,
            ];

            return send_response('Products by brand .. ',$context);
            }else{
                return send_error('Not Products found !!',[]);
            }

        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }
    }
}
