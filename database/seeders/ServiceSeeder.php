<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Model\Service;
use Faker\Factory;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $faker = Factory::create();

        for ($i = 0; $i <= 10; $i++) {

            $serviceName = $faker->name;
            $description = $faker->text(25);
            $slug = $faker->name;
            $img = $faker->imageUrl();
            $price = $faker->numberBetween($min = 1500, $max = 6000);
            $durationHours = $faker->numberBetween($min = 1, $max = 8);
            $status = 'published';
            $featured = 'true';
            $note = $faker->sentence;

            Service::create([
                'serviceName' => $serviceName,
                'slug' => $slug,
                'img' => $img,
                'description' => $description,
                'price' =>$price,
                'durationHours'=> $durationHours,
                'featured' => $featured,
                'note' => $note,
                'status' => $status, 

            ]);
        }
    }
}
