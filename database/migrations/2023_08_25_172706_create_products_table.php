<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('productName');
            $table->string('slug');
            $table->unsignedBigInteger('categoryId')->nullable();
            $table->foreign('categoryId')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('brandId')->nullable();
            $table->foreign('brandId')->references('id')->on('brands')->onDelete('cascade');
            $table->string('model')->nullable();
            $table->string('color')->default('#fff');
            $table->string('tags')->nullable();
            $table->string('material')->nullable();
            $table->string('size')->nullable();
            $table->date('year')->nullable();
            $table->string('compitibility')->nullable();
            $table->string('condition')->nullable();
            $table->float('weight');
            $table->integer('quantity');
            $table->float('price');
            $table->float('discount')->nullable();
            $table->enum('discountType',['fixed','percentage'])->nullable();
            $table->string('primaryImg');
            $table->longText('thumbImg')->nullable();
            $table->text('shortDescriptions');
            $table->boolean('availability')->default(true);
            $table->text('note')->nullable();
            $table->longText('longDescriptions')->nullable();
            $table->longText('installationMethod')->nullable();
            $table->string('warranty')->nullable();
            $table->string('manufacturerPartNumber')->nullable();
            $table->float('rating')->nullable();
            $table->bigInteger('reviewsId')->nullable();
            $table->tinyInteger('status');
            $table->enum('productType',['simpleProduct','variationProduct'])->default('simpleProduct');
            $table->string('manufacturer')->nullable();
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
