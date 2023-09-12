<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title> API Test </title>
</head>

<body class="" style="background-color: #f1f1f1;">


    <section class="bg-white container border p-2 m-auto mt-4 border rounded">
        <h3 class="text-center p-2"> Products Section </h3>

        <form class="p-4" action="{{ route('product.create.api') }}" method="post" enctype="multipart/form-data">
            {{ csrf_field() }}

            <fieldset class="gap-3">
                <div class="form-group">
                    <label for="serviceName"> Enter Your Product Name </label>
                    <input type="text" class="form-control"name="productName">
                </div>

                <div class="form-group">
                    <label for="categoryId">Product categoryId </label>
                    <input type="number" class="form-control" name="categoryId">
                </div>

                <div class="form-group">
                    <label for="brandId">Product brandId </label>
                    <input type="number" class="form-control" name="brandId">
                </div>

                <div class="form-group">
                    <label for="sku">Product sku </label>
                    <input type="text" class="form-control" name="sku">
                </div>

                <div class="form-group">
                    <label for="model">Product model </label>
                    <input type="text" class="form-control" name="model">
                </div>

                <div class="form-group">
                    <label for="color">Product color </label>
                    <input type="text" class="form-control" name="color">
                </div>

                <div class="form-group">
                    <label for="material">Product material </label>
                    <input type="text" class="form-control" name="material">
                </div>

                <div class="form-group">
                    <label for="size">Product size </label>
                    <input type="text" class="form-control" name="size">
                </div>

                <div class="form-group">
                    <label for="year">Product year </label>
                    <input type="text" class="form-control" name="year">
                </div>

                <div class="form-group">
                    <label for="compitibility">Product compitibility </label>
                    <input type="text" class="form-control" name="compitibility">
                </div>

                <div class="form-group">
                    <label for="condition">Product condition </label>
                    <input type="text" class="form-control" name="condition">
                </div>

                <div class="form-group">
                    <label for="weight">Product weight </label>
                    <input type="text" class="form-control" name="weight">
                </div>

                <div class="form-group">
                    <label for="quantity">Product quantity </label>
                    <input type="text" class="form-control" name="quantity">
                </div>

                <div class="form-group">
                    <label for="price">Product price </label>
                    <input type="text" class="form-control" name="price">
                </div>


                <div class="form-group">
                    <label for="discount">Product discount </label>
                    <input type="text" class="form-control" name="discount">
                </div>




                <!-- ....................................... -->

                <div class="mb-3">
                    <label for="primaryImg" class="form-label">Input primaryImg file</label>
                    <input class="form-control" type="file" name="primaryImg">
                </div>

                <div class="mb-3">
                    <label for="thumbImg" class="form-label">Input thumbImg file</label>
                    <input class="form-control" type="file" multiple name="thumbImg[]">
                </div>

                <!-- ....................................... -->



                <div class="form-group">
                    <label for="shortDescriptions">Product shortDescriptions </label>
                    <input type="text" class="form-control" name="shortDescriptions">
                </div>

                <div class="form-group">
                    <label for="availability">Product availability </label>
                    <input type="text" class="form-control" name="availability">
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="status">
                    <label class="form-check-label" for="status">
                        Status
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
        </form>

    </section>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
    </script>
    <script src="main.js"></script>
</body>
</body>

</html>
