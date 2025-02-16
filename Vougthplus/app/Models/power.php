<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class power extends Model
{
    use HasFactory;
    protected $table = 'power';
    protected $fillable = ['name'];

    protected $hidden = ['pivot'];

    public function hero()
    {
        return $this->belongsToMany('App\Models\hero');
    }
}
