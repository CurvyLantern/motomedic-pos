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




    public function category()
    {
        return $this->belongsTo(Category::class,'id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class,'id');
    }

}
