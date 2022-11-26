<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;
    protected $table = 'product_categories';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id', 'id');
    }
}
