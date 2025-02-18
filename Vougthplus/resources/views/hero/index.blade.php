<!-- resources/views/hero/index.blade.php -->
<h1>Liste des héros</h1>
<ul>
    @foreach ($heroes as $hero)
        <li>{{ $hero->name }}</li>
    @endforeach
</ul>