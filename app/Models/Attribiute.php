<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribiute extends Model
{
    use HasFactory;
    protected $fillable = [
        'productId',
        'sku',
        'attribiuteImgId',
        'discount',
        'discountType',
        'size',
        'weight',
        'quantity',
        'color',

    ];
}
