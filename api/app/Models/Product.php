<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $guarded = ['id'];
    protected $casts = ['onsale' => 'boolean'];

    /**
     * category
     */
    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }
}
