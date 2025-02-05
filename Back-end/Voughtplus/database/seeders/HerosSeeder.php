<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Heros;

class HerosSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();
        for($i = 0; $i<50; $i++){
            Books::create([
                'name' => $faker->name,
                'sexe' => $faker->sexe,
                'planet' => $faker->planet,
                'description' => $faker->description,
                'powers' => $faker->powers,
                'city' => $faker->city,
                'gadgets' => $faker->gadgets,
                'team' => $faker->team,
                'vehicle' => $faker->vehicle,
            ]);
        }
    }
}
