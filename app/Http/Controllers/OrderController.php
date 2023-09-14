<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\AttributeValue;
use App\Models\Brand;
use App\Models\Category;
use App\Models\ProductAttribute;
use App\Models\UserDetail;
use Exception;
use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Service;
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
        // $products = $orders->products()->where('id','productId');

        $context = [
            'orders' => $orders,
            // 'products' => $products,
        ];
        return send_response('Products Data successfully loaded !', $context);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create( Request $request )
    {
        $validator = Validator::make($request->all(),[
        'customerId'=> "required",
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

            $i = 20;


            $order = Order::create([
                'customerId' => $request->customerId,
                'serviceId'=> $request->serviveId,
                // 'productId'=> $request->productId,
                'quantity' => $request->quantity,
                'subtotal' => $request->subtotal,
                'total' => $request->total,
                'tax' => $request->tax,
                'discount' => $request->discount,
                'note' => $request->note,
                'extra' => $request->extra,
                'serviceStatus' => $request->serviceStatus,
                'queue' => $i,
                'orderCreator' =>$request->orderCreator,
                // foreach($request->productId as $key => $product){
                //         'productId' = $product->productId;
                // }

            ]);

            $queue = $order->queues()->create([
                'arriveDateTime' => $request->arriveDateTime,
                'departDateTime' => $request->departDateTime,
                'orderId' => $order->id,
                'serviceId' => $order->serviceId,
                'staffId' => $request->staffId,
            ]);

            $queue = $i++;

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
        try{
            $orders = Order::find($id);
            if($orders){

                $customer = Customer::where('id',$orders->customerId)->get();
                $products = Product::where('id',$orders->productId)->get();
                $service = Service::where('id',$orders->serviceId)->get();
                if($orders){
                    $context=[
                        'orders' => $orders,
                        'products' => $products,
                        'customer' => $customer,
                        'service' => $service,
                    ];
                    return send_response('Orders founded !',$context);
                }else{
                    return send_error('Orders Not found !!!');
                }
            }else{
                return send_error('Order Not Found !!!!!');
            }

        }catch(Exception $e){

            return send_error($e->getMessage(),$e->getCode());
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


            // $order->customerId = $request->customerId;
            $order->serviceId = $request->serviveId;
            $order->productId = $request->productId;
            $order->quantity = $request->quantity;
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
    public function destroy(Order $order,$id)
    {
        try{
            $orders = Order::find($id);
            if($orders){
                $orders->delete();
                return send_response('Order Deleted successfully',[]);
            }else{
                return send_error('Order Not Found !!!');
            }
        }catch(Exception $e){
            return send_error($e->getMessage(),$e->getCode());
        }
    }



    public function orderPage()
    {

        $orders = Order::orderBy('id','asc')->get();
        $products = Product::get();
//        $products = $orders->products()->where('id','productId');

        $context = [
            'orders' => $orders,
             'products' => $products,
        ];
//        return send_response('Products Data successfully loaded !', $context);

        return view('orderpage',compact('context'));
    }

    public function orderDetails(Order $order, $id){

        try{
            $orders = Order::find($id);
            if($orders){

                $customer = Customer::where('id',$orders->customerId)->first();
                $products = Product::where('id',$orders->productId)->first();
                $category = Category::where('id',$products->categoryId)->first();
                $brand = Brand::where('id',$products->brandId)->first();
                $service = Service::where('id',$orders->serviceId)->first();

                    $context=[
                        'order' => $orders,
                        'product' => $products,
                        'customer' => $customer,
                        'service' => $service,
                        'category' => $category,
                        'brand' => $brand,
                    ];
//                    return send_response('Orders founded !',$context);
                    return view('orderDetails')->with('context',$context);
            }else{
                return send_error('Order Not Found !!!!!');
            }

        }catch(Exception $e){

            return send_error($e->getMessage(),$e->getCode());
        }

//        return view('orderDetails');
    }


    public function invoice(Request $request,$id)
    {

        try{
            $orders = Order::find($id);
            if($orders){

                $customer = Customer::where('id',$orders->customerId)->first();
//                $customerDetails = UserDetail::where('id',$customer->userDetailsId)->first();
//                $customerDetails = UserDetail::where('id', $customer->userDetailsId)->firstOrFail();
                $customerDetails=\DB::table('user_details')->Where('id','$customer->userDetailsId')->get();
                $products = Product::where('id',$orders->productId)->first();
                $category = Category::where('id',$products->categoryId)->first();
                $brand = Brand::where('id',$products->brandId)->first();
                $service = Service::where('id',$orders->serviceId)->first();

                $context=[
                    'order' => $orders,
                    'product' => $products,
                    'customer' => $customer,
                    'service' => $service,
                    'category' => $category,
                    'brand' => $brand,
                    'customerDetails' => $customerDetails,
                ];
//                    return send_response('Orders founded !',$context);
                return view('invoice')->with('context',$context);
            }else{
                return send_error('Order Not Found !!!!!');
            }
        }catch(Exception $e){

            return send_error($e->getMessage(),$e->getCode());
        }
    }

    public function generateInvoice($id){
            $orders = Order::find($id);
            if($orders) {

                $customer = Customer::where('id', $orders->customerId)->first();
                $products = Product::where('id', $orders->productId)->first();
                $category = Category::where('id', $products->categoryId)->first();
                $brand = Brand::where('id', $products->brandId)->first();
                $service = Service::where('id', $orders->serviceId)->first();
                $customerDetails=\DB::table('user_details')->Where('id','$customer->userDetailsId')->get();

            }

                $context=[
                    'order' => $orders,
                    'product' => $products,
                    'customer' => $customer,
                    'service' => $service,
                    'category' => $category,
                    'brand' => $brand,
                    'customerDetails' => $customerDetails,
                ];

//                $pdf = Pdf::loadView('invoice', $context);
//                $todayData = Carbon::now()->format('d-m-Y');
//                return $pdf->download('invoicetest.pdf');
        return view('invoice')->with('context',$context);
    }


}
