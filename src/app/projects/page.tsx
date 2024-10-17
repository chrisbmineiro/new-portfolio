import ProjectItem from "@/components/project-item";
import React from "react";
import img from "../../../public/images/projeto-listagem-pokemon.png";

export default function Services() {
  return (
    <div className="p-10" id="projetos">
      <h2 className="text-center pb-10 font-medium text-3xl uppercase">
        Meus Projetos
      </h2>
      <div className="flex gap-4">
        <ProjectItem
          name={"pokedex"}
          description={"Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"}
          link={
            "Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"
          }
          imageSrc={img}
        />
        <ProjectItem
          name={"pokedex"}
          description={"Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"}
          link={
            "Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"
          }
          imageSrc={img}
        />
        <ProjectItem
          name={"pokedex"}
          description={"Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"}
          link={
            ""
          }
          imageSrc={img}
        />
        <ProjectItem
          name={"pokedex"}
          description={"Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"}
          link={
            "Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"
          }
          imageSrc={img}
        />
        <ProjectItem
          name={"pokedex"}
          description={"Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"}
          link={
            "Fiz esse projeto sobre um dos desenhos mais amados do mundo e seus fofos pokemons"
          }
          imageSrc={img}
        />
      </div>
    </div>
  );
}
