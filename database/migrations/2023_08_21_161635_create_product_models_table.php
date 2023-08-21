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
        Schema::create('product_models', function (Blueprint $table) {
            $table->id();
            $table->string('modelName');
            $table->string('slug');
            $table->longText('description')->nullable();
            $table->year('year')->nullable()->default(NULL);
            $table->string('img')->nullable();
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_models');
    }
};
