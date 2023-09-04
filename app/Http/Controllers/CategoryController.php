<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Facades\Validator;
use Exception;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function getCategoryAttributeData() {
        $tableName = 'categories'; // Replace with the actual table name

        if (Schema::hasTable($tableName)) {
            $columnNames = Schema::getColumnListing($tableName);
            return $columnNames;
        } else {
            return ['Table not found'];
        }
    }


    public function index()
    {
        $category = Category::orderBy('id','asc')->get();

        $context =[
            'categories' =>  $category,
        ];

        return send_response('Category data successfully loaded !!', $context);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),[
            "categoryName" => "required",
            "description"=>"required",
            "img"=>"required",
            ]);


        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }

        try{
            //create category and save it to database
            if ($request->hasFile('img')){
                $imagePath = $request->file('img')->store('category','public');
            }

            $category=Category::create([
                "categoryName"=> $request->categoryName,
                'slug'=>  Str::slug($request->categoryName, '-'),
                "description"=>$request->description,
                "img"=>$imagePath,
                "parentCategoryId"=>$request->parentCategoryId,
                ]);
            $context = [
                'category'=>$category ,
            ];


            return send_response('Category create successfull !',$context);
        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category,$id)
    {
        $category = Category::find($id);


        if($category){
            return send_response('Category founded !',$category);
        }else{
            return send_error('Category Not found !!!');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        //
        $validator = Validator::make($request->all(),[
            "categoryName" => "required",
            "description"=>"required",
            "parentCategoryId"=>"required",
            "img"=>"required",

        ]);
        if($validator->fails()){
            return send_error('Validation Error', $validator->errors(),422);
        }

        try{

            $category= Category::find($id);
            $category->categoryName = $request->categoryName;
            $category->slug=$request->slug;
            $category->description=$request->description ;
            $category->img =$request->img;
            $category->parentCategoryId =$request->parentCategoryId;
            $category->save();

            $context = [
                'category'=>$category,
            ];

            return send_response('Category update successfully',$context);

        }catch(Exception $e){
            return send_error('Category update failed !!!');
        }



    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try{
            $category = Category::find($id);
            if($category){
                $category->delete();
            }
            return send_response('Category Deleted successfully',[]);
        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }

    }

}
