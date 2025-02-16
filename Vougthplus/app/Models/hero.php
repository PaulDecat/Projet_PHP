<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class hero extends Model
{
    use HasFactory;
    protected $table = 'hero';
    protected $fillable = ['name','sexe','idPlanet','description','idCity','idTeam','vehicle'];

    public function city()
    {
        return $this->belongsTo('App\Models\city');
    }

    public function planet()
    {
        return $this->belongsTo('App\Models\planet');
    }

    public function team()
    {
        return $this->belongsTo('App\Models\team');
    }
}
