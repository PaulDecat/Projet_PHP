<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hero', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sexe', 1);
            $table->foreignId('idPlanet')->constrained('planet')->onDelete('cascade');
            $table->text('description');
            $table->foreignId('idCity')->constrained('city')->onDelete('cascade');
            $table->foreignId('idTeam')->nullable()->constrained('team')->onDelete('cascade');
            $table->string('vehicle')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero');
    }
};