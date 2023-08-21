<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ServiceCategory;
use Faker\Factory as Faker;


class ServiceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 1; $i <= 10; $i++){

            ServiceCategory::create([
                'categoryName' => $faker->sentence,
                'slug' => $faker->sentence,
                'descriptiom' => $faker->paragraph,
                'parentCategoryId'=> faker->numberBetween(3,7),
            ]);
        };
    }
}
