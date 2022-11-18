<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ProductCategory;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::query()->create(['name' => 'Admin', 'role' => 'admin', 'phone' => '53375180', 'password' => bcrypt('password')]);

        ProductCategory::query()->create([
            'title' => 'Culinarios',
            'icon' => 'mdi-cuttlery'
        ]);
    }
}
