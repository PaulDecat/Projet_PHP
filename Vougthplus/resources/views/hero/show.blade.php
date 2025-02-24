<!-- resources/views/hero/index.blade.php -->
<h1>Liste des héros</h1>
<ul>
    @foreach($heroes as $hero)
        <li>
            <a href="{{ route('hero.show', $hero->id) }}">{{ $hero->name }}</a>
        </li>
    @endforeach
</ul>