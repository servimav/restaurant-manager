<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class FakeSeeder extends Seeder
{

    /**
     * Run the database s.
     *
     * @return void
     */
    public function run()
    {
        $this->call([DatabaseSeeder::class]);

        $this->users();
        $this->categories();
        $this->products(10, 2);
        $this->clients();
        $this->orders();
        $this->orderProducts();
    }
    /**
     * Users
     */
    private function users(int $limit = 10, int $repeat = 1)
    {
        $faker = Factory::create();
        for ($r = 0; $r < $repeat; $r++) {
            $data = [];
            for ($l = 0; $l < $limit; $l++) {
                array_push($data, [
                    'name' => $faker->name(),
                    'phone' => $faker->phoneNumber(),
                    'role' => $faker->randomElement(User::$ROLES),
                    'password' => bcrypt('password'),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            User::query()->insert($data);
        }
    }
    /**
     * Categories
     */
    private function categories()
    {
        $faker = Factory::create();
        $data = [];
        for ($i = 0; $i < 10; $i++) {
            array_push($data, [
                'icon' => 'icon',
                'title' => $faker->word()
            ]);
        }
        ProductCategory::query()->insert($data);
    }
    /**
     * Products
     */
    private function products(int $limit = 10, int $repeat = 1)
    {
        $faker = Factory::create();
        for ($r = 0; $r < $repeat; $r++) {
            $data = [];
            for ($l = 0; $l < $limit; $l++) {
                array_push($data, [
                    'title' => $faker->name(),
                    'description' => $faker->text(),
                    'image' => '',
                    'sell_price' => $faker->numberBetween(1, 100),
                    'production_price' => $faker->numberBetween(1, 100),
                    'top_price' => $faker->numberBetween(1, 100),
                    'onsale' => $faker->boolean(),
                    'category_id' => $faker->numberBetween(1, ProductCategory::count()),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            Product::query()->insert($data);
        }
    }
    /**
     * Clients
     */
    private function clients(int $limit = 10, int $repeat = 1)
    {
        $faker = Factory::create();
        for ($r = 0; $r < $repeat; $r++) {
            $data = [];
            for ($l = 0; $l < $limit; $l++) {
                array_push($data, [
                    'name' => $faker->name(),
                    'ci' => $faker->numerify('###########'),
                    'contact' => $faker->phoneNumber(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            Client::query()->insert($data);
        }
    }

    /**
     * Orders
     */
    private function orders(int $limit = 10, int $repeat = 1)
    {
        $faker = Factory::create();
        for ($r = 0; $r < $repeat; $r++) {
            $data = [];
            for ($l = 0; $l < $limit; $l++) {
                array_push($data, [
                    'client_id' => $faker->numberBetween(1, Client::count()),
                    'total_price' => $faker->numberBetween(1, 100),
                    'table_number' => $faker->numberBetween(1, 10),
                    'status' => $faker->randomElement(Order::$STATUS),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            Order::query()->insert($data);
        }
    }


    /**
     * orderProducts
     */
    private function orderProducts(int $limit = 10, int $repeat = 1)
    {
        $faker = Factory::create();
        foreach (Order::all() as $order) {
            $orderProducts = [
                [
                    'product_id' => $faker->numberBetween(1, Product::count()),
                    'qty' => $faker->numberBetween(1, 10)
                ], [
                    'product_id' => $faker->numberBetween(1, Product::count()),
                    'qty' => $faker->numberBetween(1, 10)
                ], [
                    'product_id' => $faker->numberBetween(1, Product::count()),
                    'qty' => $faker->numberBetween(1, 10)
                ]
            ];
            $order->order_products()->createMany($orderProducts);
        }
    }
}
