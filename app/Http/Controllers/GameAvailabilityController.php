<?php

namespace App\Http\Controllers;

use App\Models\GameAvailability;

class GameAvailabilityController extends Controller
{
    public function index()
    {
        return response()->json(GameAvailability::all());
    }
}