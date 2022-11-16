<?php

use App\Models\Image;
use App\Models\ProductCategory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->string('image')->nullable();
            $table->unsignedDecimal('sell_price', 8, 2)->default(0);
            $table->unsignedDecimal('production_price', 8, 2)->default(0);
            $table->unsignedDecimal('top_price', 8, 2)->default(0);
            $table->boolean('onsale')->default(false);
            $table->foreignIdFor(ProductCategory::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
