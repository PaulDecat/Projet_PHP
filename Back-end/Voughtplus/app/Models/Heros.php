<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Heros extends Model
{
    use HasFactory;
    protected $table = 'heros';
    protected $fillable = ['name', 'sexe', 'planet', 'description', 'powers', 'city', 'gadgets', 'team', 'vehicle' ];

    protected $casts = [
        'powers' => 'array',
        'gadgets' => 'array',
    ];
}
