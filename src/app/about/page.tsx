import React from "react";
import Image from "next/image";
import perfil from "../../../public/images/perfil.png";
import SocialMedia from "@/components/social-media";

export default function About() {
  return (
    <div className="container mx-auto py-2 px-8">
      <section className="flex min-[100vh - 125px]: items-center gap-20 justify-between">
        <div className="flex flex-col gap-4 tracking-wide space-y-1">
          <h1 className="text-3xl font-semibold">
            Olá, eu sou Christopher Barros
          </h1>
          <p>
            Apaixonado por informática desde muito jovem, sempre tive
            curiosidade de entender como tudo funcionava e o que tinha por trás
            dos jogos, aplicativos e sites.
          </p>
          <p>
            Foi pensando nisso que no ultimo ano do ensino medio eu me inscrevi em um curso técnico profissionalizante no Instituto Social Nossa Senhora de Fátima.
          </p>
          <p>
            Um curso de informática completo de 1200 horas em parceria com o SENAC e CEDESP, onde pude entender melhor como tudo acontecia, aprendendo logica de programação, linguagem C, SQL e VC++, no próximo ano fiz no mesmo
            instituto um curso de inglês do básico ao intermediário, alem de outro curso profissionalizante mais focado em Hardware de Computadores
          </p>
          <p>
            Hoje estou
            cursando o 6° semestre de Ciência da Computação, onde estou
            aprendendo de tudo um pouco e acabei me interessando bastante pela
            parte de desenvolvimento de software, pois sempre gostei do trabalho de resolver problemas de forma criativo e eficiente
            através de códigos.
          </p>
          <p>
            Por isso tenho buscado vagas de estágio e trainee para me aprimorar
            e me especializar em desenvolvimento de software e crescer junto a empresa.
          </p>
          <SocialMedia />
        </div>
        <div className="container-foto">
          <div className="bg-sky-700 rounded-full">
            <Image className="rounded-full" src={perfil} alt="perfil" />
          </div>
        </div>
      </section>
    </div>
  );
}
