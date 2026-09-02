import ReactIcon from "../assets/skills/react.svg"
import VueIcon from "../assets/skills/vue.svg"
import TypeScriptIcon from "../assets/skills/typescript.svg"
import JavaScriptIcon from "../assets/skills/javascript.svg"
import TailwindIcon from "../assets/skills/tailwind.svg"
import NodeIcon from "../assets/skills/node.svg"
import PythonIcon from "../assets/skills/python.svg"
import FastAPIIcon from "../assets/skills/fastapi.svg"
import JavaIcon from "../assets/skills/java.svg"
import SpringBootIcon from "../assets/skills/springboot.svg"
import DjangoIcon from "../assets/skills/django.svg"
import FlutterIcon from "../assets/skills/flutter.svg"
import PostgreSQLIcon from "../assets/skills/postgresql.svg"
import ChromaDBIcon from "../assets/skills/chromadb.png"
import QDrantIcon from "../assets/skills/qdrant.svg"
import DockerIcon from "../assets/skills/docker.svg"
import GitIcon from "../assets/skills/git.svg"
import FigmaIcon from "../assets/skills/figma.svg"
import LangchainIcon from "../assets/skills/langchain.svg"
import LaravelIcon from "../assets/skills/laravel.svg"
import PHPIcon from "../assets/skills/php.svg"

export interface Skill {
  name: string
  icon: string
  /** extra classes for the <img> (e.g. dark:invert for monochrome logos) */
  imgClass?: string
}

export const skills: Skill[] = [
  { name: "React", icon: ReactIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "PHP", icon: PHPIcon },
  { name: "Python", icon: PythonIcon },
  { name: "FastAPI", icon: FastAPIIcon },
  { name: "Langchain", icon: LangchainIcon, imgClass: "dark:invert" },
  { name: "Java", icon: JavaIcon },
  { name: "SpringBoot", icon: SpringBootIcon },
  { name: "Django", icon: DjangoIcon, imgClass: "dark:invert" },
  { name: "Flutter", icon: FlutterIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "ChromaDB", icon: ChromaDBIcon },
  { name: "QDrant", icon: QDrantIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Git", icon: GitIcon },
  { name: "Figma", icon: FigmaIcon },
]
