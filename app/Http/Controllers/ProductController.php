<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\MediaImage;
use App\Models\ProductVariation;
use Illuminate\Support\Facades\Storage;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *  @return \Illuminate\Http\JsonResponse
     */

    public function getProductAttributeData()
    {
        $tableName = 'products'; // Replace with the actual table name

        if (Schema::hasTable($tableName)) {
            $columnNames = Schema::getColumnListing($tableName);
            return $columnNames;
        } else {
            return ['Table not found'];
        }
    }




    public function index()
    {
        //
        //        $products = Product::orderBy('id','asc')->paginate(15);
        $products = Product::all()->sort('id', 'desc')->forPage(1, 15);
        $context = [
            'products' => $products,
        ];

        return send_response('Products Data successfully loaded !', $context);
    }

    /**
     * Show the form for creating a new resource.
     */
    /**
     * Display the specified resource.
     */
    public function show(Product $product, $id)
    {
        $products = Product::find($id);


        if ($products) {
            return send_response('Products founded !', $products);
        } else {
            return send_error('Products Not found !!!');
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'productName' => "required",
            'categoryId' => "required",
            'brandId' => "required",
            'model' => "required",
            'color' => "required",
            'material' => "required",
            'size' => "required",
            'year' => "required",
            'compitibility' => "required",
            'condition' => "required",
            'weight' => "required",
            'quantity' => "required",
            'price' => "required",
            'discount' => "required",
            'primaryImg' => "required",
            'shortDescriptions' => "required",
            'availability' => "required",
            'status' => "required",



            'thumbImg' => 'required',
            'thumbImg.*' => 'mimes:jpg,png'
        ]);

        if ($validator->fails()) {
            return send_error('Data validation Failed !!', $validator->errors(), 422);
        }

        try {

            $image_path = '';

            if ($request->hasFile('primaryImg')) {
                $image_path = $request->file('primaryImg')->store('products', 'public');
            }

            $product = Product::create([
                'productName' => $request->productName,
                'slug' =>  Str::slug($request->productName, '-'),
                'categoryId' => $request->categoryId,
                'brandId' => $request->brandId,
                'model' => $request->model,
                'color' => $request->color,
                'tags' => $request->tags,
                'material' => $request->material,
                'size' => $request->size,
                'year' => $request->year,
                'compitibility' => $request->compitibility,
                'condition' => $request->condition,
                'manufacturer' => $request->manufacturer,
                'weight' => $request->weight,
                'quantity' => $request->quantity,
                'price' => $request->price,
                'discount' => $request->discount,
                'discoundType' => $request->discoundType,
                'primaryImg' => $image_path,
                // 'thumbImg' => $request->thumbImg,
                // 'productType' => $request->productType,
                'shortDescriptions' => $request->shortDescriptions,
                'longDescriptions' => $request->longDescriptions,
                'installationMethod' => $request->installationMethod,
                'note' => $request->note,
                'warranty' => $request->warranty,
                'rating' => $request->rating,
                'availability' => $request->availability,
                'status' => $request->status,


            ]);

            if ($request->hasfile('thumbImg')) {
                foreach ($request->file('thumbImg') as $key => $thumbImg) {
                    $path = $thumbImg->store('products', 'public');
                    $name = $thumbImg->getClientOriginalName();
                    $product->media_images()->create([
                        'hostId' => $product->id,
                        'imageName' => $name,
                        'imagePath' => $path,
                    ]);
                }
            }

            // if($request->productType == 'variationProduct')
            // {
            //    foreach($request->productType as $key => $attributes)
            //    {
            //         $image_path = '';

            //         if ($request->hasFile('attribiuteImgId')) {
            //             $image_path = $request->file('attribiuteImgId')->store('products', 'public');
            //         }
            //         $product->attributes()->create([
            //             'productId' => $product->id,
            //             'sku' => $request->id,
            //             'attribiuteImgId' => $image_path,
            //             'discount' => $request->discount,
            //             'discountType' => $request->discountType,
            //             'size' => $request->size,
            //             'weight' => $request->weight,
            //             'quantity' => $request->quantity,
            //             'color' => $request->color,
            //         ]);
            //     }
            // }


            // if ($request->hasFile('thumbImg')) {
            //     echo '<pre>',print_r($request->thumbImg),'</pre>';

            //     $thumb = $request->thumbImg;
            //     return send_response('testing thumb', $thumb);

            //     foreach( $request->file('thumbImg') as $thumbImg ){

            //         $thumbImgpath = $thumbImg->file('thumbImg')->store('products', 'public');

            //         $product->media_images()->create([
            //             'hostId'=> $product->id,
            //             'imageName' => $request->file('thumbImg')->getClientOriginalName(),
            //             'imagePath'=> $thumbImgpath,
            //         ]);
            //     }
            // }


            // fetch data from categories table -- stars from here

            $categories =  Category::all();

            // fetch data from categories table -- ends from here


            // fetch data from brands table -- ends from here

            $brands =  Brand::all();

            // fetch data from brands table -- ends from here


            $context = [
                'product' => $product,
                'categories' => $categories,
                'brands' => $brands,
            ];
            return send_response('Products create successfull !', $context);
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $categories = Category::all();
        $brands = Brand::all();
        $validator = $request->validated();
        $category = Category::findOrFail($validator('categoryId'));

        try {
            $image_path = '';
            if ($request->hasFile('primaryImg')) {
                $image_path = $request->file('primaryImg')->store('products', 'public');
            }
            // products() function is from category model relation
            $product = $category->products()->create([
                'categoryId' => $validator['category'],
                'productName' => $validator['productName'],
                'slug' =>  Str::slug($validator['productName'], '-'),
                'brandId' => $validator['brandId'],
                'model' => $validator['model'],
                'color' => $validator['color'],
                'tags' => $validator['tags'],
                'size' => $validator['size'],
                'year' => $validator['year'],
                'compitibility' => $validator['compitibility'],
                'condition' => $validator['condition'],
                'weight' => $validator['weight'],
                'manufacturer' => $validator['manufacturer'],
                'price' => $validator['price'],
                'quantity' => $validator['quantity'],
                'price' => $validator['price'],
                'discoundType' => $validator['discoundType'],
                'discount' => $validator['discount'],
                'primaryImg' => $image_path,
                'shortDescriptions' => $validator['shortDescriptions'],
                'longDescriptions' => $validator['longDescriptions'],
                'installationMethod' => $validator['installationMethod'],
                'warranty' => $validator['warranty'],
                'note' => $validator['note'],
                'availability' => $validator['availability'],
                'status' => $validator['status'],
            ]);
            // media_images()
            // Upload multiple thumbnail image
            if ($request->hasFile('thumbImg')) {
                $image_path = '';
                foreach ($request->file('thumbImg') as $img) {

                    $image_path = $img->store('products', 'public');

                    $product->media_images()->create([
                        'hostId' => $product->id,
                        'imageName' => $img->getClientOriginalName(),
                        'imagePath' => $image_path,
                    ]);
                }
            }

            if ($request->productType == 'variationProduct') {

                // This is a logical mistake as it's not obvious which array contains the whole collection of values.
                foreach ($request->attributesData as $key => $attributes) {
                    $image_path = '';

                    if ($request->hasFile('attribiuteImgId')) {
                        $image_path = $attributes->file('attribiuteImgId')->store('products', 'public');
                    }
                    $product->attributes()->create([
                        'productId' => $product->id,
                        'sku' => $attributes->sku,
                        'attribiuteImgId' => $image_path,
                        'discount' => $attributes->discount,
                        'discountType' => $attributes->discountType,
                        'size' => $attributes->size,
                        'weight' => $attributes->weight,
                        'quantity' => $attributes->quantity,
                        'color' => $attributes->color,
                    ]);
                }
            }

            $context = [
                'product' => $product,
                'categories' => $categories,
                'brands' => $brands,
            ];
            return send_response('Product Stored successfull', $context);
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product, $id)
    {
        $validator = Validator::make($request->all(), [

            'productName' => "required",
            'slug' => "required",
            'categoryId' => "required",
            'brandId' => "required",
            'model' => "required",
            'color' => "required",
            'tags' => "required",
            'productType' => "required",
            'material' => "required",
            'size' => "required",
            'year' => "required",
            'compitibility' => "required",
            'condition' => "required",
            'manufacturer' => "required",
            'weight' => "required",
            'quantity' => "required",
            'price' => "required",
            'discount' => "required",
            'discoundType' => "required",
            'primaryImg' => "required",
            'thumbImg' => "required",
            'shortDescriptions' => "required",
            'longDescriptions' => "required",
            'installationMethod' => "required",
            'note' => "required",
            'warranty' => "required",
            'rating' => "required",
            'availability' => "required",
            'status' => "required",
        ]);

        if ($validator->fails()) {
            return send_error('Data validation Failed !!', $validator->errors(), 422);
        }

        try {

            $product = Product::find($id);

            if ($request->hasFile('primaryImg')) {
                // Delete old image
                if ($product->primaryImg) {
                    Storage::delete($product->primaryImg);
                }
                // Store image
                $image_path = $request->file('primaryImg')->store('products', 'public');
                // Save to Database
                $product->primaryImg = $image_path;
            }

            $product->productName = $request->productName;
            $product->slug = $request->slug;
            $product->categoryId = $request->categoryId;
            $product->brandId = $request->brandId;
            $product->model = $request->model;
            $product->color = $request->color;
            $product->tags = $request->tags;
            $product->productType = $request->productType;
            $product->material = $request->material;
            $product->size = $request->size;
            $product->year = $request->year;
            $product->compitibility = $request->compitibility;
            $product->condition = $request->condition;
            $product->manufacturer = $request->manufacturer;
            $product->weight = $request->weight;
            $product->quantity = $request->quantity;
            $product->price = $request->price;
            $product->discoundType = $request->discoundType;

            $product->thumbImg = $request->thumbImg;
            $product->shortDescriptions = $request->shortDescriptions;
            $product->longDescriptions = $request->longDescriptions;
            $product->installationMethod = $request->installationMethod;
            $product->note = $request->note;
            $product->warranty = $request->warranty;
            $product->rating = $request->rating;
            $product->availability = $request->availability;
            $product->status = $request->status;

            $product->save();

            $context = [
                'product' => $product,
            ];
            return send_response("Product Update successfully !", $context);
        } catch (Exception $e) {
            return send_error("Produc data update failed !!!");
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, $id)
    {
        try {
            $products = Product::find($id);
            if ($products) {
                $products->delete();
            }
            return send_response('products Deleted successfully', []);
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }




    // Product API Test ......................................

    public function productCreatePage()
    {
        return view('productCreatetest')->with('This is Product Create Page');
    }

    public function productCreate(Request $request)
    {
        $categories = Category::all();
        $brands = Brand::all();
        $validator = $request;
        $category = Category::findOrFail($request['categoryId']);

        // dd($request->all(), $categories, $category);

        try {
            $primaryImage = '';
            if ($request->hasFile('primaryImg')) {
                $primaryImage = $request->file('primaryImg')->store('products', 'public');
            }
            // products() function is from category model relation
            $product = $category->products()->create([
                'categoryId' => $validator['category'],
                'productName' => $validator['productName'],
                'slug' =>  Str::slug($validator['productName'], '-'),
                'brandId' => $validator['brandId'],
                'model' => $validator['model'],
                'color' => $validator['color'],
                'size' => $validator['size'],
                'year' => $validator['year'],
                'compitibility' => $validator['compitibility'],
                'condition' => $validator['condition'],
                'weight' => $validator['weight'],
                'manufacturer' => $validator['manufacturer'],
                'price' => $validator['price'],
                'quantity' => $validator['quantity'],
                'discoundType' => $validator['discoundType'],
                'discount' => $validator['discount'],
                'primaryImg' => $primaryImage,
                'shortDescriptions' => $validator['shortDescriptions'],
                'longDescriptions' => $validator['longDescriptions'],
                'installationMethod' => $validator['installationMethod'],
                'warranty' => $validator['warranty'],
                'note' => $validator['note'],
                'availability' => $validator['availability'],
                'status' => $validator['status'],
            ]);
            // media_images()
            // Upload multiple thumbnail image
            if ($request->hasFile('thumbImg')) {
                $thumbImg = '';
                foreach ($request->file('thumbImg') as $img) {

                    $thumbImg = $img->store('products', 'public');

                    $product->media_images()->create([
                        'hostId' => $product->id,
                        'imageName' => $img->getClientOriginalName(),
                        'imagePath' => $thumbImg,
                    ]);
                }
            }

            if ($request->productType == 'variationProduct') {

                // This is a logical mistake as it's not obvious which array contains the whole collection of values.
                foreach ($request->attributesData as $key => $attributes) {
                    $attribiuteImg = '';

                    if ($request->hasFile('attribiuteImgId')) {
                        $attribiuteImg = $attributes->file('attribiuteImgId')->store('products', 'public');
                    }
                    $product->productVariation()->create([
                        'product_id' => $product->id,
                        'attribute_value_id' => $product->attribute_value_id,
                        'attribute_id' => $product->attribute_id, // not important
                        'color_id' => $attributes->color_id,
                        'image' => $attribiuteImg,
                        'price' => $attributes->discount,
                    ]);
                }
            }

            $context = [
                'product' => $product,
                // 'categories' => $categories,
                // 'brands' => $brands,
            ];
            return send_response('Product Stored successfull', $context);
        } catch (Exception $e) {
            return send_error($e->getMessage(), $e->getCode());
        }
    }

    public function productVariation(Request $request, $id)
    {

        try {

            $productVariation = ProductVariation::where('product_id', $request->id)->get();

            if ($productVariation) {

                $context = [
                    'productVariation' => $productVariation,
                ];

                return send_response('ProductVariation by products .. ', $context);
            } else {
                return send_error('Not Products found !!', []);
            }
        } catch (Exception $e) {
            return send_error('ProductVariation update failed !!!', []);
        }
    }
}
