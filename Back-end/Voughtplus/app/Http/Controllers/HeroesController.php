<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Heroes;

class HeroesController extends Controller
{
    public function index(){
        $Heros = Heroes::all();
        return response()->json($Heros);
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
            'gadgets' => 'nullable|array',
            'gadgets.*' => 'string',
            'team' => 'nullable|string|max:255',
            'vehicle' => 'nullable|string|max:255',
        ]);
        $hero = new Heroes();
        $hero->name = $validateData['name'];
        $hero->sexe = $validateData['sexe'];
        $hero->planet = $validateData['planet'];
        $hero->description = $validateData['description'];
        $hero->power = $validateData['power'] ?? [];
        $hero->city = $validateData['city'];
        $hero->gadgets = $validateData['gadgets'] ?? [];
        $hero->team = $validateData['team'] ?? '';
        $hero->vehicle = $validateData['vehicle'] ?? '';
        $hero->save();
        return response()->json([
            'message' => 'Heroe created',
            'heroe' => $hero
        ], 201);

    }

    public function show($id){
        $hero = Heroes::find($id);
        if(!empty($hero)){
            return response()->json($hero);
        }else{
            return response()->json([
                'message' => 'Heroe not found'
            ], 404);
        }
    }

    public function update(Request $request, $id){
        $hero = Heroes::find($id);
        if(!empty($hero)){
            $validateData = $request->validate([
                'name' => 'required|string|max:255',
                'sexe' => 'required|string|max:1',
                'planet' => 'required|string|max:255',
                'description' => 'required|string',
                'power' => 'nullable|array',
                'power.*' => 'string',
                'city' => 'required|string|max:255',
                'gadgets' => 'nullable|array',
                'gadgets.*' => 'string',
                'team' => 'nullable|string|max:255',
                'vehicle' => 'nullable|string|max:255',
            ]);
            $hero->name = $validateData['name'];
            $hero->sexe = $validateData['sexe'];
            $hero->planet = $validateData['planet'];
            $hero->description = $validateData['description'];
            $hero->power = $validateData['power'] ?? [];
            $hero->city = $validateData['city'];
            $hero->gadgets = $validateData['gadgets'] ?? [];
            $hero->team = $validateData['team'] ?? '';
            $hero->vehicle = $validateData['vehicle'] ?? '';
            $hero->save();
            return response()->json([
                'message' => 'Heroe updated',
                'heroe' => $hero
            ], 200);
        }else{
            return response()->json([
                'message' => 'Heroe not found'
            ], 404);
        }
    }

    public function destroy($id){
        $hero = Heroes::find($id);
        if(!empty($hero)){
            $hero->delete();
            return response()->json([
                'message' => 'Heroe deleted'
            ], 200);
        }else{
            return response()->json([
                'message' => 'Heroe not found'
            ], 404);
        }
    }
}
