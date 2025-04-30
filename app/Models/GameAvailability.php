<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameAvailability extends Model
{
    protected $table = 'game_availability';
    protected $primaryKey = 'Game_ID';
    
    protected $fillable = [
        'Game_Name',
        'Game_Availability'
    ];
}