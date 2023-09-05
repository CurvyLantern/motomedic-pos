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
        Schema::create('attribiutes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('productId');
            $table->foreign('productId')->references('id')->on('products')->onUpdate('cascade')->onDelete('cascade');

            $table->string('sku')->nullable();
            $table->unsignedBigInteger('attribiuteImgId');
            // $table->foreign('attribiuteImgId')->references('id')->on('media_images')->onUpdate('cascade')->onDelete('cascade');
            $table->float('discount')->nullable();
            $table->enum('discountType',['fixed','percentage'])->nullable();
            $table->string('size')->nullable();
            $table->string('weight');
            $table->integer('quantity');
            $table->string('color')->nullable();


            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attribiutes');
    }
};
