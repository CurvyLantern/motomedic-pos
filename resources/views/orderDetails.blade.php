<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title> API Test </title>
</head>

<body class="" style="background-color: #f1f1f1;">

{{--<section class="bg-white container border p-2 m-auto mt-4 border rounded">--}}
{{--    <div class="row">--}}
{{--        <div class="col-md-12">--}}
{{--            <div class="shadow-sm  p-3 ">--}}
{{--                <table class="table table-bordered">--}}
{{--                    <thead>--}}
{{--                    <tr>--}}
{{--                        <th scope="col">Order ID</th>--}}
{{--                        <th scope="col">Customer Name</th>--}}
{{--                        <th scope="col">Product Name</th>--}}
{{--                        <th scope="col">Quantity</th>--}}
{{--                        <th scope="col">Total</th>--}}
{{--                        <th scope="col">Service Status</th>--}}
{{--                        <th scope="col">Action</th>--}}
{{--                    </tr>--}}
{{--                    </thead>--}}
{{--                    <tbody>--}}
{{--                        <tr>--}}
{{--                            <th scope="row">{{$context['order']->id}}</th>--}}
{{--                            <td>{{$context['customer']->customerName}}</td>--}}
{{--                            <td>{{$context['product']->productName}}</td>--}}
{{--                            <td>{{$context['order']->quantity}}</td>--}}
{{--                            <td>{{$context['order']->total}}</td>--}}
{{--                            <td>{{$context['order']->serviceStatus}}</td>--}}
{{--                            <td>--}}
{{--                                <a href="" class="btn btn-primary" >--}}
{{--                                    Invoice--}}
{{--                                </a>--}}
{{--                            </td>--}}
{{--                        </tr>--}}
{{--                                                @endforeach--}}
{{--                    @endforeach--}}
{{--                                        {{ $context['products'] }}--}}
{{--                    <!-- Add more rows for additional orders -->--}}
{{--                    </tbody>--}}
{{--                </table>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--</section>--}}

<section class="bg-white container border p-2 m-auto mt-4 border rounded" >
    <div class="row">
        <div class="col-md-12">
            <div class=" p-3">
                <h4>Order Details</h4>
                <a  href="{{url('apitest/invoice-page/'.$context['order']->id)}}" target="_blank"  class="btn btn-primary">
                    Invoice
                </a>
                <a  href="{{url('apitest/generate-invoice/'.$context['order']->id)}})}}" class="btn btn-primary">
                    Download Invoice
                </a>
                <a href="{{url('apitest/order/all')}}" class="btn btn-secondary">
                    Order Page
                </a>
                <hr>
                <div class="row">
                    <div class="col-md-6 ">
                        <h5> Order Details </h5>
                        <hr>
                        <h6> Order ID : {{$context['order']->id}}</h6>
                        <h6> Order quantity : {{$context['order']->quantity}}</h6>
                        <h6>Order subtotal : {{$context['order']->subtotal}}</h6>
                        <h6>Order tax : {{$context['order']->tax}}</h6>
                        <h6>Order total : {{$context['order']->total}}</h6>
                        <h6>Order serviceStatus : {{$context['order']->serviceStatus}}</h6>
                        <h6>Order Creator : {{$context['order']->orderCreator}}</h6>
                    </div>
                    <div class="col-md-6 ">
                        <h5> Products Details </h5>
                        <hr>
                        <h6> Name : {{$context['product']->productName}}</h6>
                        <h6> Category : {{$context['category']->categoryName}}</h6>
                        <h6> Brand : {{$context['brand']->brandName}}</h6>
                        <h6> Per Product : {{$context['product']->price}}</h6>
                        <h6> Color : {{$context['product']->color}}</h6>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6 ">
                        <h5> Customer Details </h5>
                        <hr>
                        <h6> Customer Name : {{$context['customer']->customerName}}</h6>
                        <h6> Customer Email : {{$context['customer']->email}}</h6>
                        <h6> Customer Phone : {{$context['customer']->phone}}</h6>
                    </div>
                    <div class="col-md-6 ">

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
</script>
<script src="main.js"></script>
</body>
</body>

</html>
