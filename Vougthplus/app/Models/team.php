<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class team extends Model
{
    use HasFactory;
    protected $table = 'team';
    protected $fillable = ['name'];

    public function hero()
    {
        return $this->hasMany('App\Models\hero', 'idTeam');
    }
}
