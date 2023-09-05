<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>  API Test </title>
</head>
<body class="" style="background-color: #f1f1f1;">


<section class="bg-white container border p-2 m-auto mt-4 border rounded">



@if(Session::has('message'))
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{{ session::get('message')}}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

@endif


<h3 class="text-center p-2"> Registration Section </h3>
<form class="p-4 " action="{{route('admin.register')}}" method="post">
@csrf

  <div class="form-group">
    <label for="adminName">Admin name</label>
    <input type="text" class="form-control" id="adminName" aria-describedby="nameHelp" placeholder="Enter admin name " name="adminName">
  </div>

  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>


  <div class="form-group">
    <label for="phone">Phone Number </label>
    <input type="phone" class="form-control" id="adminName" placeholder="Enter phone" name="phone">
  </div>


  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" name="password">
  </div>
  <button type="submit" class="btn btn-primary m-2">Submit</button>
</form>

</section>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="main.js"></script>
  </body>
</body>
</html>



