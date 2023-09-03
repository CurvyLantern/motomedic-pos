<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Illuminate\Support\Facades\Auth;




class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::orderBy('id','asc')->paginate(15);

        $context = [
            'orders' => $orders,
        ];
        return send_response('Products Data successfully loaded !', $context);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create( Request $request )
    {
        $validator = Validator::make($request->all(),[
        // 'customerId'=> "required",
        'serviceId'=> "required",
        'productId' => "required",
        'subtotal' => "required",
        'total' => "required",
        // 'tax' => "required",
        // 'discount' => "required",
        // 'note' => "required",
        // 'extra' => "required",
        // 'serviceStatus' => "required",
        // 'queue' => "required",
        ]);

        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }
        try{

            $order = Order::create([
                'customerId' => $request->customerId,
                'serviceId'=> $request->serviveId,
                'productId' => $request->productId,
                'subtotal' => $request->subtotal,
                'total' => $request->total,
                'tax' => $request->tax,
                'discount' => $request->discount,
                'note' => $request->note,
                'extra' => $request->extra,
                'serviceStatus' => $request->serviceStatus,
                'queue' => $request->queue,
                'orderCreator' =>$request->orderCreator,

            ]);
            $context = [
                'order' => $order,
            ];
            return send_response('Order Create Successfully', $context);
        }catch(Exception $e){
            return send_error($e->getMessage(), $e->getCode());
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order, $id)
    {
        $orders = Order::find($id);


        if($orders){
            return send_response('Orders founded !',$orders);
        }else{
            return send_error('Orders Not found !!!');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order,$id)
    {
        $validator = Validator::make($request->all(),[
            // 'customerId'=> "required",
            'serviceId'=> "required",
            'productId' => "required",
            'subtotal' => "required",
            'total' => "required",
            // 'tax' => "required",
            // 'discount' => "required",
            // 'note' => "required",
            // 'extra' => "required",
            // 'serviceStatus' => "required",
            // 'queue' => "required",
            ]);
        if ($validator->fails()){
            return send_error('Data validation Failed !!',$validator->errors(),422);
        }

        try{

            $order = Order::find($id);


            $order->serviceId = $request->serviveId;
            $order->productId = $request->productId;
            $order->subtotal = $request->subtotal;
            $order->total = $request->total;
            $order->tax = $request->tax;
            $order->discount = $request->discount;
            $order->note = $request->note;
            $order->extra = $request->extra;
            $order->serviceStatus = $request->serviceStatus;
            $order->queue = $request->queue;

            $order->save();

            $context = [
                'order' => $order,
            ];
            return send_response("Order Update successfully !",$context);

        }catch(Exception $e){
            return send_error("Order data update failed !!!");
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
