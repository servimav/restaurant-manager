<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $guarded = ['id'];
    /**
     * order_products
     */
    public function order_products()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
