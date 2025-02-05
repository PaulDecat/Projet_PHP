<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Heros;
class HerosController extends Controller
{
    public function index(){
        $Heros = Heros::all();
        return response()->json($Heros);
    }

    public function store(){
        $hero = new Heros();
        $hero->name = $request->name;
        $hero->sexe = $request->sexe;
        $hero->planet = $request->planet;
        $hero->description = $request->description;
        $hero->powers = $request->powers;
        $hero->city = $request->city;
        $hero->gadgets = $request->gadgets;
        $hero->team = $request->team;
        $hero->vehicle = $request->vehicle;
        $hero->save();
        return response()->json([
            "message" => "Hero created"
        ], 201);
    }

    public function show($id){
        $hero = Heros::find($id);
        if(!empty($hero)){
            return response()->json($hero);
        }
        else
        {
            return response()->json([
                "message" => "Hero not found"
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        if(Heros::where('id',$id)->exists()) {
            $hero = Heros::find($id);
            $hero->name = is_null($request->name) ? $hero->name : $request->name;
            $hero->sexe = is_null($request->sexe) ? $hero->sexe : $request->sexe;
            $hero->planet = is_null($request->planet) ? $hero->planet : $request->planet;
            $hero->description = is_null($request->description) ? $hero->description : $request->description;
            $hero->powers = is_null($request->powers) ? $hero->powers : $request->powers;
            $hero->city = is_null($request->city) ? $hero->city : $request->city;
            $hero->gadgets = is_null($request->gadgets) ? $hero->gadgets : $request->gadgets;
            $hero->team = is_null($request->team) ? $hero->team : $request->team;
            $hero->vehicle = is_null($request->vehicle) ? $hero->vehicle : $request->vehicle;
            $book->save(); 
            return response()->json([
                "message" => "records updated successfully"
            ], 200); 
        } else {
            return response()->json([
                "message" => "Hero not found"
            ], 404);
        }     
    }
    
    public function destroy($id)
    {
        if(Heros::where('id', $id)->exists()) {
            $hero = Heros::find($id);
            $hero->delete();
            return response()->json([
              "message" => "Hero deleted"
            ], 202);
        } else {
            return response()->json([
              "message" => "Hero not found"
            ], 404);
        }
    }
}