<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>  API Test </title>
</head>
<body class="" style="background-color: #f1f1f1;">

<section class="bg-white container border p-2 m-auto mt-4 border rounded">
    <h3>
        {{Session::get('id')}}
    </h3>
</section>

<section class="bg-white container border p-2 m-auto mt-4 border rounded">
<h3 class="text-center p-2"> Service Section </h3>

<form class="p-4 " action="{{url('api/service/create')}}" method="post" enctype="multipart/form-data">
{{csrf_field()}}

<fieldset class="gap-3">
<div class="form-group">
    <label for="serviceName"> Enter Your Service Name </label>
    <input type="text" class="form-control" id="serviceName" placeholder="Enter Your Service Name " name="serviceName">
  </div>

  <div class="form-group">
    <label for="serviceName">Service description </label>
    <input type="text" class="form-control" id="description" placeholder="Enter Your Service Name" name="description" >
  </div>

  <div class="mb-3">
    <label for="formFile" class="form-label">Input image file</label>
    <input class="form-control" type="file" id="img" name="img">
  </div>

  <div class="form-group">
    <label for="serviceName">Service price </label>
    <input type="text" class="form-control" id="price" placeholder="Enter Your Service price" name="price" >
  </div>

  <div class="form-group">
    <label for="serviceName">Service durationHours </label>
    <input type="text" class="form-control" id="durationHours" placeholder="Enter Your Service durationHours" name="durationHours" >
  </div>

  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="featured">
  <label class="form-check-label" for="featured">
  featured
  </label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</fieldset>
</form>

</section>


<section class="bg-white container border p-2 m-auto mt-4 border rounded">
<form class="p-4 " action="{{url('api/login/auth')}}" method="post">
{{csrf_field()}}

  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" name="password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</section>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="main.js"></script>
  </body>
</body>
</html>

