import React from 'react'
import Image from 'next/image'
import perfil from '../../../public/images/perfil.png'

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <h1 className='text-3xl font-bold'>Sobre mim</h1>
      <section className="flex min-[100vh - 125px]: items-center gap-20 justify-between">
        <div className="flex flex-col gap-4 tracking-wide space-y-2">
          <h3 className='text-sm font-semibold'>Olá, eu sou Christopher Barros</h3>
            <p>Apaixonado por informática desde muito jovem, sempre tive curiosidade de entender como tudo funciona e o que tinha por trás dos jogos, aplicativos e sites.</p>
            <p>Foi pensando nisso que me inscrevi em um curso técnico no Instituto Social Nossa Senhora de Fátima.</p>
            <p>Um curso de informática associado ao SENAC e CEDESP, onde pude entender melhor como tudo acontecia, no próximo ano fiz no mesmo instituto um curso de inglês do básico ao intermediário e hoje estou cursando o 5° semestre de Ciência da Computação, onde estou aprendendo de tudo um pouco e acabei me interessando bastante pela parte de Web, pois sempre gostei do trabalho criativo e artístico através de códigos.</p>
            <p>Por isso tenho buscado vagas de estágio e trainee para me aprimorar e me especializar em desenvolvimento de software.</p>
        </div>
        <div className="container-foto">
            <div className="bg-sky-700 rounded-full">
                <Image className="rounded-full" src={perfil} alt="perfil" />
            </div>
        </div>
      </section>
    </div>
  )
}
