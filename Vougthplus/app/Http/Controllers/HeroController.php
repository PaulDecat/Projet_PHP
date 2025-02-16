<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hero;

class HeroController extends Controller
{
    public function index()
    {
        $heroes = \App\Models\hero::all();
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
        $hero = \App\Models\hero::find($id);
        return response()->json($hero);
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
