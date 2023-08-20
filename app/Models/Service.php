<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = [
        'serviceName',
        'slug',
        'description',
        'img',
        'price',
        'durationHours',
        'status',
        'featured',
        'note',

    ];
}
