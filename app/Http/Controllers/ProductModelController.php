<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductModelRequest;
use App\Http\Requests\UpdateProductModelRequest;
use Illuminate\Support\Facades\Validator;



class ProductModelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $productModel=ProductModel::orderBy('id','asc')->get();

        $context =[
            'productModel' => $productModel,

        ];

        return send_response('Product Model data successfully loaded !!',$context);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //

        $validator = Validator::make($request->all(),[
            "modelName" => "required",
            "description"=>"required",
            "slug"=>"required",
            "year"=>"",
            "img"=>"required",

        ]);

        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }

        try{
            //create Product Model and save it to database
            if ($request->hasFile('img')){
                $imagePath = $request->file('img')->store('product-model','public');
                $request->img = $imagePath;
            }

            $productModel=ProductModel::create([
                "modelName"=> $request->modelName,
                "slug"=>$request->slug,
                "description"=>$request->description,
                "img"=>$request->img,
                "year" => $request->year,
                ]);
            $context = [
                'productModel'=>$productModel ,
            ];


            return send_response('Product Model create successfull !',$context);
        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductModelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductModel $productModel,$id)
    {
        //
        $productModel = ProductModel::find($id);


        if($productModel){
            return send_response('productModel founded !',$productModel);
        }else{
            return send_error('productModel Not found !!!');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductModel $productModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductModel $productModel ,$id)
    {
        //
        $validator = Validator::make($request->all(),[
            "modelName" => "required",
            "description"=>"required",
            "slug"=>"required",
            "year"=>"",
            "img"=>"required",

        ]);

        if($validator->fails()){
            return send_error('Validation Error', $validator->errors(),422);
        }

        try{

            $productModel = ProductModel::find($id);
            $productModel->modelName = $request->modelName;
            $productModel->slug=$request->slug;
            $productModel->description=$request->description ;
            $productModel->img =$request->img;
            $productModel->save();

            $context = [
                'productModel'=>$productModel,
            ];

            return send_response('Product Model update successfully',$context);

        }catch(Exception $e){
            return send_error('Product Model update failed !!!');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductModel $productModel,$id)
    {
        //
        try{
            $productModel = ProductModel::find($id);
            if($productModel){
                $productModel->delete();
            }
            return send_response('Product Model Deleted successfully',[]);
        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }
    }
}
