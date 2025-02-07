<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class team extends Model
{
    use HasFactory;
    protected $table = 'heroes_powers';
    protected $fillable = ['idHeroes','idPowers'];
}
