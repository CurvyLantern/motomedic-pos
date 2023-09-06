<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>  API Test </title>
</head>
<body class="" style="background-color: #f1f1f1;">


<section class="bg-white container border p-2 m-auto mt-4 border rounded">
<h3 class="text-center p-2"> This is Dashboard Page  </h3>


@if(Session::has('message'))
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{{ session::get('message')}}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

@endif

<p>Admin name : {{Auth::guard('admin')->user()->email}} </p>
<p>Admin name : {{Auth::guard('admin')->user()->adminName}} </p>

</section>
<section class="bg-white container border p-2 m-auto mt-4 border rounded">
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="{{route('admin.dashboard')}}" > Dashboard </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('admin.products')}}"> All products </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('admin.allCustomer')}}"> All Customer </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('admin.addCustomer')}}"> Add Customer </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Add Customer </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>

<section class="bg-white container border p-2 m-auto mt-4 border rounded">

<h3>
    <a href="{{route('admin.products')}}">
        Products Page
    </a>
</h3>

</section>



<section class="bg-white container border p-2 m-auto mt-4 border rounded">

<h3>
    <a href="{{route('admin.destroy')}}">
        Logout / session destroy
    </a>
</h3>

</section>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="main.js"></script>
  </body>
</body>
</html>



