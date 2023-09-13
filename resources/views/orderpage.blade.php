<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Order Table</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body class="bg-light">

<div class="container mt-5 py-md-5 bg-white rounded">
    <h1 class="mb-4">Order Table</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

{{--                @forelse($context as $data)--}}
{{--                    {{$data}}--}}
{{--                @empty--}}
{{--                @endforelse--}}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="shadow-sm  p-3 ">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Service Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($context['orders'] as $orderData)
{{--                        @foreach($data as $orders)--}}
                        <tr>
                            <th scope="row">{{$orderData->id}}</th>
                            <td>{{$orderData->customerId}}</td>
                            <td>{{$orderData->quantity}}</td>
                            <td>{{$orderData->total}}</td>
                            <td>{{$orderData->serviceStatus}}</td>
                            <td>
                                <a href="{{url('apitest/order/'.$orderData->id)}}" class="btn btn-primary" >
                                    view
                                </a>
                            </td>
                        </tr>
{{--                        @endforeach--}}
                    @endforeach
{{--                    {{ $context['products'] }}--}}
                    <!-- Add more rows for additional orders -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


{{--<section class="h-100 gradient-custom">--}}
{{--    <div class="container py-5 h-100">--}}
{{--        <div class="row d-flex justify-content-center align-items-center h-100">--}}
{{--            <div class="col-lg-10 col-xl-8">--}}
{{--                <div class="card" style="border-radius: 10px;">--}}
{{--                    <div class="card-header px-4 py-5">--}}
{{--                        <h5 class="text-muted mb-0">Thanks for your Order, <span style="color: #a8729a;">Anna</span>!</h5>--}}
{{--                    </div>--}}
{{--                    <div class="card-body p-4">--}}
{{--                        <div class="d-flex justify-content-between align-items-center mb-4">--}}
{{--                            <p class="lead fw-normal mb-0" style="color: #a8729a;">Receipt</p>--}}
{{--                            <p class="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>--}}
{{--                        </div>--}}
{{--                        <div class="card shadow-0 border mb-4">--}}
{{--                            <div class="card-body">--}}
{{--                                <div class="row">--}}
{{--                                    <div class="col-md-2">--}}
{{--                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"--}}
{{--                                             class="img-fluid" alt="Phone">--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0">Samsung Galaxy</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">White</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">Capacity: 64GB</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">Qty: 1</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">$499</p>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">--}}
{{--                                <div class="row d-flex align-items-center">--}}
{{--                                    <div class="col-md-2">--}}
{{--                                        <p class="text-muted mb-0 small">Track Order</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-10">--}}
{{--                                        <div class="progress" style="height: 6px; border-radius: 16px;">--}}
{{--                                            <div class="progress-bar" role="progressbar"--}}
{{--                                                 style="width: 65%; border-radius: 16px; background-color: #a8729a;" aria-valuenow="65"--}}
{{--                                                 aria-valuemin="0" aria-valuemax="100"></div>--}}
{{--                                        </div>--}}
{{--                                        <div class="d-flex justify-content-around mb-1">--}}
{{--                                            <p class="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>--}}
{{--                                            <p class="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                        <div class="card shadow-0 border mb-4">--}}
{{--                            <div class="card-body">--}}
{{--                                <div class="row">--}}
{{--                                    <div class="col-md-2">--}}
{{--                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"--}}
{{--                                             class="img-fluid" alt="Phone">--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0">iPad</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">Pink rose</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">Capacity: 32GB</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">Qty: 1</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">--}}
{{--                                        <p class="text-muted mb-0 small">$399</p>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">--}}
{{--                                <div class="row d-flex align-items-center">--}}
{{--                                    <div class="col-md-2">--}}
{{--                                        <p class="text-muted mb-0 small">Track Order</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-10">--}}
{{--                                        <div class="progress" style="height: 6px; border-radius: 16px;">--}}
{{--                                            <div class="progress-bar" role="progressbar"--}}
{{--                                                 style="width: 20%; border-radius: 16px; background-color: #a8729a;" aria-valuenow="20"--}}
{{--                                                 aria-valuemin="0" aria-valuemax="100"></div>--}}
{{--                                        </div>--}}
{{--                                        <div class="d-flex justify-content-around mb-1">--}}
{{--                                            <p class="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>--}}
{{--                                            <p class="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                            </div>--}}
{{--                        </div>--}}

{{--                        <div class="d-flex justify-content-between pt-2">--}}
{{--                            <p class="fw-bold mb-0">Order Details</p>--}}
{{--                            <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $898.00</p>--}}
{{--                        </div>--}}

{{--                        <div class="d-flex justify-content-between pt-2">--}}
{{--                            <p class="text-muted mb-0">Invoice Number : 788152</p>--}}
{{--                            <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p>--}}
{{--                        </div>--}}

{{--                        <div class="d-flex justify-content-between">--}}
{{--                            <p class="text-muted mb-0">Invoice Date : 22 Dec,2019</p>--}}
{{--                            <p class="text-muted mb-0"><span class="fw-bold me-4">GST 18%</span> 123</p>--}}
{{--                        </div>--}}

{{--                        <div class="d-flex justify-content-between mb-5">--}}
{{--                            <p class="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>--}}
{{--                            <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="card-footer border-0 px-4 py-5"--}}
{{--                         style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">--}}
{{--                        <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total--}}
{{--                            paid: <span class="h2 mb-0 ms-2">$1040</span></h5>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--</section>--}}

<!-- Bootstrap JS (Popper.js and Bootstrap.js) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
</script>
</body>
</html>
