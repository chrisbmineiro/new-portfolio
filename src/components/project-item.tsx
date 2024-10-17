import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

// Definição de Props
interface ProjectProps {
  name: string;
  description: string;
  link: string;
  imageSrc: string; // Nova prop para a imagem
}

const ProjectItem: React.FC<ProjectProps> = ({
  name,
  description,
  link,
  imageSrc,
}) => {
  return (
    <Card className="w-[267px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        {/* Imagem Dinâmica */}
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="rounded-2xl object-cover"
          />
          <div className="rounded-2xl bg-#040203  p-14 hover:opacity-70 hover:bg-black">
            <p className="font-semibold opacity-0 text-white hover:opacity-70">
              {description}
            </p>
            <Button variant="secondary" className="mt-3 w-full" asChild>
              <Link href={link}>GitHub</Link>
            </Button>
          </div>
        </div>
        <h3 className=" bg-black w-full py-2 px-5 bottom-0 text-center text-white rounded-2xl">
          {name}
        </h3>
        {/* Conteúdo */}
      </CardContent>
    </Card>
  );
};

export default ProjectItem;
