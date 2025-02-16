<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class gadget extends Model
{
    use HasFactory;
    protected $table = 'gadget';
    protected $fillable = ['name'];

    public function hero()
    {
        return $this->belongsToMany('App\Models\hero');
    }
}
