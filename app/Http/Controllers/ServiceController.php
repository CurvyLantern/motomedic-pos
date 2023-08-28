<?php

namespace App\Http\Controllers;

use Image;
use Exception;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Validator;


class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $service = Service::orderBy('id','asc')->get();

        if ($service){
            return send_response('Service data successfully loded' , ServiceResource::collection($service));
        }else{
            return send_error('Data fetching task failed !!');
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),[
            "serviceName" => "required",
            "slug" => "required",
            "description" => "required",
            "img" => "required",
            "price" => "required",
            'durationHours'=> "required",
        ]);
        if($validator->fails()){
            return send_error('Validation Error', $validator->errors(),422);
        }

        try{
            //upload image to server and get path
            // no need to worry form line 51 to line 55
            // if($request->hasFile('img')){
            //     $destinationPath= 'public/img/service';
            //     $image = $request->file('img');
            //     $imageName = $image->getClientOriginalName();
            //     $imagePath = $request->file('img')->storeAs($imagePath,$destinationPath);

            // };

            $image_path = '';

            if ($request->hasFile('img')) {
                $image_path = $request->file('img')->store('products', 'public');
            }

            $service = Service::create([
                'serviceName' => $request->serviceName,
                'slug'=>  $request->slug,
                'description'=>$request->description,
                'img'=>$request->img,
                'price'=>$request->price,
                'durationHours'=>$request->durationHours,
                'img' => $request->img,
            ]);
            return send_response("service create successfull", new ServiceResource($service));

        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        //

        $service = Service::find($id);

        if($service){
            return send_response("Data Found !", new ServiceResource($service));
        }else{
            return send_error("Service Data Not Found ");
        }

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            "serviceName" => "required",
            "slug" => "required",
            "description" => "required",
            "img" => "required",
            "price" => "required",
            'durationHours'=> "required",
        ]);
        if($validator->fails()){
            return send_error('Validation Error', $validator->errors(),422);
        }

        try{

            $service = Service::find($id);
            $service->serviceName = $request->serviceName;
            $service->slug = $request->slug;
            $service->description =$request->description ;
            $service->img=$request->img;
            $service->price= $request->price;
            $service->durationHours= $request->durationHours;
            $service->save();
            return send_response("Service Update successfully !", new ServiceResource($service));

        }catch(Exception $e){
            return send_error("Service data update failed !!!", $e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        try{

            $service = Service::find($id);

            if($service){
                $service->delete();
            }
            return send_response("service delete successfully !",[]);

        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }
    }
}
