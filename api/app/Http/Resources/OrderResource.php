<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            // 'client' => new ClientResource($this->client),
            'user' => new UserResource($this->user),
            'total_price' => $this->total_price,
            'status' => $this->status,
            'order_products' => OrderProductResource::collection($this->order_products),
            'table_number' => $this->table_number
        ];
    }
}
