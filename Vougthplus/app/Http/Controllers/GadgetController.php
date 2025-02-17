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
}
