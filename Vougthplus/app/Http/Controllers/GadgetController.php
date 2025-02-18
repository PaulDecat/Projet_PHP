<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gadget;

class GadgetController extends Controller
{
    public function index()
    {
        $gadgets = Gadget::all();
        return response()->json($gadgets);
    }

    public function show($id)
    {
        $gadget = Gadget::find($id);
        return response()->json($gadget);
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $gadget = new Gadget();
        $gadget->name = $validateData['name'];
        $gadget->save();
        return response()->json($gadget);
    }
}
