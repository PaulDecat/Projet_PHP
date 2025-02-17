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
}
