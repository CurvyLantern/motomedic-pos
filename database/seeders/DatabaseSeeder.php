<?php

namespace Database\Seeders;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Service;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Stuff;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Admin::factory(2)->create();
        // Customer::factory(10)->create();
        // Product::factory(50)->create();
        // Brand::factory(10)->create();
        // Category::factory(10)->create();
        // Service::factory(10)->create();
        Order::factory(10)->create();

    }
}
