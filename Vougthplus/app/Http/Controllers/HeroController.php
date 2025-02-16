<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hero;

class HeroController extends Controller
{
    public function index()
    {
        $heroes = Hero::with(['gadget:name', 'power:name'])->get();
    
        $heroes = $heroes->map(function ($hero) {
            return [
                'id' => $hero->id,
                'name' => $hero->name,
                'sexe' => $hero->sexe,
                'description' => $hero->description,
                'Planet' => \App\Models\Planet::find($hero->idPlanet)?->name,
                'City' => \App\Models\City::find($hero->idCity)?->name,
                'Team' => \App\Models\Team::find($hero->idTeam)?->name,
                'vehicle' => $hero->vehicle,
                'gadget' => $hero->gadget->pluck('name'),
                'power' => $hero->power->pluck('name'),
            ];
        });
    
        return response()->json($heroes);
    }

    public function store(Request $request){
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
            'sexe' => 'required|string|max:1',
            'planet' => 'required|string|max:255',
            'galaxy' => 'required|string|max:255',
            'description' => 'required|string',
            'power' => 'nullable|array',
            'power.*' => 'string',
            'city' => 'required|string|max:255',
            'gadget' => 'nullable|array',
            'gadget.*' => 'string',
            'team' => 'nullable|string|max:255',
            'vehicle' => 'nullable|string|max:255',
        ]);
        $hero = new Hero();
        $hero->name = $validateData['name'];
        $hero->sexe = $validateData['sexe'];
        $hero->description = $validateData['description'];
        $hero->idPlanet = \App\Models\planet::firstOrCreate(['name' => $validateData['planet'], 'galaxy' => $validateData['galaxy']])->id;
        $hero->idCity = \App\Models\city::firstOrCreate(['name' => $validateData['city']])->id;
        if($validateData['team']){
            $hero->idTeam = \App\Models\team::firstOrCreate(['name' => $validateData['team']])->id;
        }
        if($validateData['vehicle']){
            $hero->vehicle = $validateData['vehicle'];
        }
        $hero->save();
        foreach($validateData['power'] as $power){
            $hero->power()->attach(\App\Models\power::firstOrCreate(['name' => $power])->id);
        }
        foreach($validateData['gadget'] as $gadget){
            $hero->gadget()->attach(\App\Models\gadget::firstOrCreate(['name' => $gadget])->id);
        }
        return response()->json($hero);
    }

    public function show($id)
    {
        $hero = \App\Models\Hero::with(['gadget:name', 'power:name'])->find($id);

        if (!$hero) {
            return response()->json(['message' => 'Hero not found'], 404);
        }

        return [
            'id' => $hero->id,
            'name' => $hero->name,
            'sexe' => $hero->sexe,
            'description' => $hero->description,
            'planet' => \App\Models\Planet::find($hero->idPlanet)?->name, 
            'city' => \App\Models\City::find($hero->idCity)?->name, 
            'team' => \App\Models\Team::find($hero->idTeam)?->name,
            'vehicle' => $hero->vehicle,
            'gadget' => $hero->gadget->pluck('name'),
            'power' => $hero->power->pluck('name'),
        ];
    }


    public function update(Request $request, $id)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
            'sexe' => 'required|string|max:1',
            'planet' => 'required|string|max:255',
            'description' => 'required|string',
            'power' => 'nullable|array',
            'power.*' => 'string',
            'city' => 'required|string|max:255',
            'gadget' => 'nullable|array',
            'gadget.*' => 'string',
            'team' => 'nullable|string|max:255',
            'vehicle' => 'nullable|string|max:255',
        ]);
        $hero = \App\Models\hero::find($id);
        $hero->name = $validateData['name'];
        $hero->sexe = $validateData['sexe'];
        $hero->description = $validateData['description'];
        $hero->idPlanet = \App\Models\planet::firstOrCreate(['name' => $validateData['planet']])->idPlanet;
        $hero->idCity = \App\Models\city::firstOrCreate(['name' => $validateData['city']])->idCity;
        if($validateData['team']){
            $hero->idTeam = \App\Models\team::firstOrCreate(['name' => $validateData['team']])->idTeam;
        }
        if($validateData['vehicle']){
            $hero->vehicle = $validateData['vehicle'];
        }
        $hero->save();
        $hero->power()->sync($validateData['power']);
        $hero->gadget()->sync($validateData['gadget']);
        return response()->json($hero);
    }

    public function destroy($id)
    {
        $hero = \App\Models\hero::find($id);
        $hero->delete();
        return response()->json(['message' => 'Hero deleted'], 200);
    }
}
