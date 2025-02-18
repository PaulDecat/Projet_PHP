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
        $planet = Planet::create($request->all());
        return response()->json($planet);
    }
}
