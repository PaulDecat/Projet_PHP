<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class team extends Model
{
    use HasFactory;
    protected $table = 'heroes_gadgets';
    protected $fillable = ['idHeroes','idGadgets'];
}
