import { BiListUl, BiUser } from 'react-icons/bi';

interface IFormationDetail {
  institution: string;
  course: string;
  time_course: string;
  start: string;
  end: string;
  workload: string;
}
interface IDataFormation {
  title: string;
  formation: Array<IFormationDetail>;
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
    ]
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
    ]
  },
]