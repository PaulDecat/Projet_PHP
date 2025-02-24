<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class hero_gadget extends Model
{
    use HasFactory;
    protected $table = 'hero_gadget';
    protected $fillable = ['hero_id', 'gadget_id'];

    public function hero()
    {
        return $this->belongsTo('App\Models\hero');
    }

    public function gadget()
    {
        return $this->belongsTo('App\Models\gadget');
    }
}
