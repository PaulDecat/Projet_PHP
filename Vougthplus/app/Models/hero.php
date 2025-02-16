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
        return $this->belongsTo('App\Models\city', 'idCity');
    }

    public function planet()
    {
        return $this->belongsTo('App\Models\planet', 'idPlanet');
    }

    public function team()
    {
        return $this->belongsTo('App\Models\team', 'idTeam');
    }

    public function power()
    {
        return $this->belongsToMany('App\Models\power', 'hero_power', 'idHero', 'idPower');
    }

    public function gadget()
    {
        return $this->belongsToMany('App\Models\gadget', 'hero_gadget', 'idHero', 'idGadget');
    }
}
