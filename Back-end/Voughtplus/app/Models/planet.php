<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class planet extends Model
{
    use HasFactory;
    protected $table = 'planet';
    protected $fillable = ['idPlanet','name','galaxy'];
}
