import { BiListUl, BiUser } from 'react-icons/bi';
import { Bootstrap, CodeIgniter, CSS3, Figma, HTML5, JavaScript, JQuery, MySQL, NodeJS, PHP, Sass, SEO, TypeScript } from './assets';

export interface IFormationDetail {
  institution?: string;
  course?: string;
  time_course?: string;
  start?: string;
  end?: string;
  workload?: string;
  coccupation?: string;
  responsibility?: string;
}
interface IDataFormation {
  title: string;
  formation: Array<IFormationDetail>;
  type: number;
}

interface IPeriodoOccupation {
  occupation: string;
  start: string;
  end: string;
}

interface IEvolutionProfissional {
  initialOccupation: IPeriodoOccupation;
  nextOccupation: IPeriodoOccupation;

}

export interface IDataWork {
  company: string;
  occupation: string;
  start: string;
  end: string;
  description: string;
  evolution: IPeriodoOccupation[];
}

export const Menus = [
  {
    path: '/',
    title: 'Apresentação',
    icon: <BiUser />
  },
  {
    path: '/formacao',
    title: 'Formação',
    icon: <BiListUl />
  },
  {
    path: '/experiencia',
    title: 'Experiência',
    icon: <BiUser />
  },
  {
    path: '/habilidades',
    title: 'Habilidades',
    icon: <BiUser />
  },
  {
    path: '/projetos',
    title: 'Projetos',
    icon: <BiUser />
  },
];

export const ListFormation: Array<IDataFormation> = [
  {
    title: "Superior",
    formation: [
      {
        institution: "UNP - Universidade Potiguar",
        course: "Análise e Desenvolvimento de Sistemas",
        time_course: "5º",
        start: "2017.1",
        end: "Em andamento",
        workload: ""
      }
    ],
    type: 1,
  },
  {
    title: "Cursos online",
    formation: [
      {
        institution: "DIO - Digital Innovation One",
        course: "Bootcamp Impulso Javascript Evolution",
        time_course: "",
        start: "",
        end: "",
        workload: "104 horas"
      },
      {
        institution: "DIO - Digital Innovation One",
        course: "Bootcamp Linux Experience",
        time_course: "",
        start: "",
        end: "",
        workload: "42 horas"
      },
    ],
    type: 2,
  },
];

export const ListExperience: Array<IDataWork> = [
  {
    company: "Corps Teknologi",
    start: "Abril/2021",
    end: "Atual",
    occupation: "Desenvolvedor Web FullStack",
    description: "Desenvolvo sistemas Web",
    evolution: [
      {
        occupation: "Desenvolvedor Junior I",
        start: "Abril/2021",
        end: "Março/2022"
      },
      {
          occupation: "Desenvolvedor Junior II",
          start: "Março/2022",
          end: "Atual"
      },
    ]
  },
  {
    company: "E-code UNP",
    start: "Março/2018",
    end: "Novembro/2018",
    occupation: "Desenvolvedor Web FullStack",
    description: "Desenvolvo sistemas Web",
    evolution: [
      {
        occupation: "Desenvolvedor Junior I",
        start: "Abril/2021",
        end: "Março/2022"
      },
      {
        occupation: "Desenvolvedor Junior II",
        start: "Março/2022",
        end: "Atual"
      },
    ]
  },
]

export const Skills = [
  "Organizado",
  "Pontual",
  "Empático",
  "Trabalho em Equipe",
  "Gosta de Pesquisar",
  "Gosta de Estudar",
  "Criativo",
  "Focado",
  "Curioso"
];

interface IIconsHardSkills {
  title: string;
  url: string;
}
interface IHardSkill {
  area: string;
  skill: IIconsHardSkills[];
}

export const AssetsHardSkills: IHardSkill[] = [
  {
    area: "Front-End",
    skill: [
      {
        title: "HTML5",
        url: HTML5
      },
      {
        title: "CSS3",
        url: CSS3
      },
      {
        title: "JavaScript",
        url: JavaScript,
      },
      {
        title: "JQuery",
        url: JQuery
      },
      {
        title: "TypeScript",
        url: TypeScript
      },
      {
        title: "Sass",
        url: Sass
      },
      {
        title: "Bootstrap",
        url: Bootstrap
      },
      {
        title: "Figma",
        url: Figma
      },
      {
        title: "SEO",
        url: SEO
      },
    ],
  },
  {
    area: "Back-End",
    skill: [
      {
        title: "PHP",
        url: PHP
      },
      {
        title: "NodeJS",
        url: NodeJS
      },
      {
        title: "MySQL",
        url: MySQL
      },
      {
        title: "CodeIgnier",
        url: CodeIgniter
      },
    ]
  }
];


export interface IDataProject {
  img: string;
  title: string;
  desc: string;
  link: string;
}
export const DataProjectToCard: Array<IDataProject> = [
  {
    title: "Projeto 01",
    img: "#",
    desc: "Lorem Ispum dollor amet Lorem Ispum dollor amet, Lorem Ispum dollor amet Lorem Ispum dollor amet.",
    link: "https//aqui.com"
  },
  {
    title: "Projeto 02",
    img: "#",
    desc: "Lorem Ispum dollor amet Lorem Ispum dollor amet, Lorem Ispum dollor amet Lorem Ispum dollor amet.",
    link: "https//aqui.com"
  },
  {
    title: "Projeto 03",
    img: "#",
    desc: "Lorem Ispum dollor amet Lorem Ispum dollor amet, Lorem Ispum dollor amet Lorem Ispum dollor amet.",
    link: "https//aqui.com"
  },
  {
    title: "Projeto 04",
    img: "#",
    desc: "Lorem Ispum dollor amet Lorem Ispum dollor amet, Lorem Ispum dollor amet Lorem Ispum dollor amet.",
    link: "https//aqui.com"
  },
];