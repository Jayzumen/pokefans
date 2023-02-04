import Image from "next/image";
import Link from "next/link";
import { PokemonTypes } from "@/assets/constants";
import { PokemonData } from "@/types/pokemonTypes";

export default function RandomPokemon({
  randomPokemon,
}: {
  randomPokemon: PokemonData[];
}) {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-4 capitalize text-black">
      {randomPokemon.map((pokemon) => (
        <div
          key={pokemon.name}
          className="min-w-[300px] rounded-lg bg-slate-400 p-4"
        >
          <h2 className="max-w-[280px] text-2xl font-semibold">
            {pokemon.name}
          </h2>
          <Link href={`pokemon/${pokemon.name}`}>
            <Image
              className="mx-auto"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </Link>
          <div className="flex justify-center gap-2 text-lg font-semibold">
            {pokemon.types.map((type) => {
              const matchingType = PokemonTypes.filter(
                (pokemonType) => pokemonType.name === type.type.name
              )[0];
              return (
                <Link
                  key={type.type.name}
                  href={`/types/${type.type.name}`}
                  className={`min-w-[100px] rounded-lg py-2 transition hover:opacity-80 ${matchingType.color}`}
                >
                  {type.type.name}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
