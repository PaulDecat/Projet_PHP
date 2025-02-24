<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class hero_power extends Model
{
    use HasFactory;
    protected $table = 'hero_power';
    protected $fillable = ['hero_id', 'power_id'];

    public function hero()
    {
        return $this->belongsTo('App\Models\hero');
    }

    public function power()
    {
        return $this->belongsTo('App\Models\power');
    }
}
