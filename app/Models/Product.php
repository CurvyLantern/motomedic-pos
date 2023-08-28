<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        'productName',
        'slug',
        'categoryId',
        'brandId',
        'model',
        'color',
        'tags',
        'productType',
        'material',
        'size',
        'year',
        'compitibility',
        'condition',
        'manufacturer',
        'weight',
        'quantity',
        'price',
        'discount',
        'discoundType',
        'primaryImg',
        'thumbImg',
        'shortDescriptions',
        'longDescriptions',
        'installationMethod',
        'note',
        'warranty',
        'rating',
        'availability',
        'status',
    ];
}
