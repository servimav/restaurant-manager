<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $guarded = ['id'];

    // static public $STATUS = ['created', 'accepted', 'preparing', 'c-canceled', 'r-canceled', 'ready', 'ontable', 'completed', 'other'];
    static public $STATUS = ['created', 'accepted', 'c-canceled', 'r-canceled', 'completed'];
    /**
     * Client
     */
    // public function client()
    // {
    //     return $this->belongsTo(Client::class);
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    /**
     * order_products
     */
    public function order_products()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
