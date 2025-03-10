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
        Schema::create('hero_gadget', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idHero')->constrained('hero', 'id')->onDelete('cascade');
            $table->foreignId('idGadget')->constrained('gadget', 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_gadget');
    }
};
