<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;

class CityController extends Controller
{
    public function index()
    {
        $cities = City::all();
        return response()->json($cities);
    }

    public function show($id)
    {
        $city = City::find($id);
        return response()->json($city);
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $city = new City();
        $city->name = $validateData['name'];
        $city->save();
        return response()->json($city);
    }

}
