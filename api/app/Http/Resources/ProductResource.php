<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'image' => env('APP_URL') . Storage::url($this->image),
            'sell_price' => $this->sell_price,
            'production_price' => $this->production_price,
            'top_price' => $this->top_price,
            'onsale' => $this->onsale,
            'category' => $this->category,
        ];
    }
}
