<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Power;

class PowerController extends Controller
{
    public function index()
    {
        $powers = Power::all();
        return response()->json($powers);
    }

    public function show($id)
    {
        $power = Power::find($id);
        return response()->json($power);
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $power = new Power();
        $power->name = $validateData['name'];
        $power->save();
        return response()->json($power);
    }
}
