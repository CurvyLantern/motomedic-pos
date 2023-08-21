<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
      * @return array<string, mixed>
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        return [
            'id' =>$this->id,
            'serviceName'  =>$this->serviceName ,
            'slug' =>$this->slug,
            'description' => $this->description,
            'img' => $this->img,
            'price' =>$this->price,
            'durationHours'=> $this->durationHours,
            'featured' => $this->featured,
            'note' => $this->note,
            'status' => $this->status, 

        ];
    }
}
