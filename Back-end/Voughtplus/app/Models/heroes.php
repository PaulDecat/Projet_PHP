<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class heroes extends Model
{
    use HasFactory;
    protected $table = 'heroes';
    protected $fillable = ['idHeroes','name','sexe','idPlanet','description','powers','idCity','gadgets','idTeam','vehicle'];

    protected $casts = [
        'powers' => 'array',
        'gadgets' => 'array'
    ];
}
