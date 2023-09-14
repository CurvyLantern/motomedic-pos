<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Invoice #6</title>

    <style>
        html,
        body {
            margin: 10px;
            padding: 10px;
            font-family: sans-serif;
        }
        h1,h2,h3,h4,h5,h6,p,span,label {
            font-family: sans-serif;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 0px !important;
        }
        table thead th {
            height: 28px;
            text-align: left;
            font-size: 16px;
            font-family: sans-serif;
        }
        table, th, td {
            border: 1px solid #ddd;
            padding: 8px;
            font-size: 14px;
        }

        .heading {
            font-size: 24px;
            margin-top: 12px;
            margin-bottom: 12px;
            font-family: sans-serif;
        }
        .small-heading {
            font-size: 18px;
            font-family: sans-serif;
        }
        .total-heading {
            font-size: 18px;
            font-weight: 700;
            font-family: sans-serif;
        }
        .order-details tbody tr td:nth-child(1) {
            width: 20%;
        }
        .order-details tbody tr td:nth-child(3) {
            width: 20%;
        }

        .text-start {
            text-align: left;
        }
        .text-end {
            text-align: right;
        }
        .text-center {
            text-align: center;
        }
        .company-data span {
            margin-bottom: 4px;
            display: inline-block;
            font-family: sans-serif;
            font-size: 14px;
            font-weight: 400;
        }
        .no-border {
            border: 1px solid #fff !important;
        }
        .bg-blue {
            background-color: #414ab1;
            color: #fff;
        }
    </style>
</head>
<body>

<section class="container p-2">

    <table class="order-details">
        <thead>
        <tr>
            <th width="50%" colspan="2">
                <h2 class="text-start">Motomodic Ltd</h2>
            </th>
            <th width="50%" colspan="2" class="text-end company-data">
                <span>Invoice NUmber : #{{$context['order']->id}}</span> <br>
                <span>{{$context['order']->created_at->format('d-m-y : h:i A')}}</span><br>
{{--                @foreach( $context['customerDetails'] as $data)--}}
{{--                    <span>{{$data}}</span>--}}
{{--                @endforeach--}}
                <span>Address : {{$context['customerDetails']}} </span> <br>
            </th>
        </tr>
        <tr class="bg-blue">
            <th width="50%" colspan="2">Order Details</th>
            <th width="50%" colspan="2">User Details</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Order Id:</td>
            <td>{{$context['order']->id}}</td>

            <td>Full Name:</td>
            <td>{{$context['customer']->customerName}}</td>
        </tr>
        <tr>
            <td>Tracking Id/No.:</td>
            <td>funda-CRheOqspbA</td>

            <td>Email Id:</td>
            <td>{{$context['customer']->email}}</td>
        </tr>
        <tr>
            <td>Ordered Date:</td>
            <td>{{$context['order']->created_at->format('d-m-y : h:i A')}}</td>

            <td>Phone:</td>
            <td>{{$context['customer']->phone}}</td>
        </tr>
        <tr>
            <td>Payment Mode:</td>
            <td>Hand Cash</td>

            <td>Address:</td>
            <td>{{$context['customerDetails']}}</td>
        </tr>
        <tr>
            <td>Order Status:</td>
            <td>{{$context['order']->status}}</td>

            <td>Bike Info :</td>
            <td>{{$context['order']->bikeInfo}}</td>
        </tr>
        </tbody>
    </table>

    <table>
        <thead>
        <tr>
            <th class="no-border text-start heading" colspan="5">
                Order Items
            </th>
        </tr>
        <tr class="bg-blue">
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td width="10%">{{$context['product']->id}}</td>
            <td>
                {{$context['product']->productName}}
            </td>
            <td width="10%">৳ {{$context['product']->price}}</td>
            <td width="10%">{{$context['order']->quantity}}</td>
            <td width="15%" class="fw-bold">৳ {{$context['order']->quantity*$context['product']->price}}</td>
        </tr>
        </tbody>
    </table>

</section>

<br>
<p class="text-center">
    Thank your for shopping with Motomedic.
</p>

</body>
</html>
