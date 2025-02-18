<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::all();
        return response()->json($teams);
    }

    public function show($id)
    {
        $team = Team::find($id);
        return response()->json($team);
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $team = new Team();
        $team->name = $validateData['name'];
        $team->save();
        return response()->json($team);
    }
}
