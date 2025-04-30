<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('game_availability', function (Blueprint $table) {
            $table->id('Game_ID');
            $table->string('Game_Name');
            $table->integer('Game_Availability')->default(0); // Changed to integer with default value 0
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('game_availability');
    }
};