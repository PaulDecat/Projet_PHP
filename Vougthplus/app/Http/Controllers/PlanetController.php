<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Planet;

class PlanetController extends Controller
{
    public function index()
    {
        $planets = Planet::all();
        return response()->json($planets);
    }

    public function show($id)
    {
        $planet = Planet::find($id);
        return response()->json($planet);
    }

    public function store(Request $request)
{
    $validateData = $request->validate([
        'name' => 'required|string|max:255',
        'galaxy' => 'required|string|max:255',
    ]);

    $existingPlanet = Planet::where('name', $validateData['name'])
                            ->where('galaxy', $validateData['galaxy'])
                            ->first();

    if ($existingPlanet) {
        return response()->json(['message' => 'La planète existe déjà.'], 409);
    }

    $planet = new Planet();
    $planet->name = $validateData['name'];
    $planet->galaxy = $validateData['galaxy'];
    $planet->save();

    return response()->json($planet);
}
}
