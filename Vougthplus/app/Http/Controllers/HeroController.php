<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hero;

class HeroController extends Controller
{
    public function index()
    {
        $heroes = \App\Models\hero::all();
        return view('hero.index', compact('heroes'));
    }

    public function store(Request $request){
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
        $hero = new Hero();
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
        $hero->power()->attach($validateData['power']);
        $hero->gadget()->attach($validateData['gadget']);
        return response()->json(['message' => 'Hero created', 'id' => $hero->idHero], 201);

    }

    public function show($id)
    {
        $hero = \App\Models\hero::find($id);
        return view('hero.show', compact('hero'));
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
        return response()->json(['message' => 'Hero updated', 'id' => $hero->idHero], 200);
    }

    public function destroy($id)
    {
        $hero = \App\Models\hero::find($id);
        $hero->delete();
        return response()->json(['message' => 'Hero deleted'], 200);
    }
}
