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
        Schema::create('queues', function (Blueprint $table) {
            $table->id();
            $table->datetime('arriveDateTime')->nullable();
            $table->datetime('departDateTime')->nullable();

            $table->unsignedBigInteger('orderId')->nullable();
            $table->foreign('orderId')->references('id')->on('orders')->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('serviceId')->nullable();
            $table->foreign('serviceId')->references('id')->on('services')->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('staffId')->nullable();
            $table->foreign('staffId')->references('id')->on('staffs')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('queues');
    }
};
