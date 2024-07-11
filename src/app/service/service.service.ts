import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  img: string;
  desc: string
  link: string
  linkGithub: string
  data: string
  tags: string[]
}



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getAllProjects() {
    const projectsList: Project[] = [
      {
        name: "BarEasy Java e Angular",
        img: "",
        desc: "Implementação de projeto pessoal como MVP para tratar implementações padrões com designer patterns, concorrência, de arquitetura de um sistema de bar.",
        link: "",
        linkGithub: "https://github.com/AL33H/BarEasy",
        data: "06/2024",
        tags: ["#Java", "#Spring", "#Angular", "#Docker", "#PostgreSql"]
      },
      {
        name: "Portfólio com Vaadin framework Java",
        img: "",
        desc: "Portifólio para aprendizado a qual, em três horas lendo a documentação consegui implementar um projeto com Vaadin e hospedar na AWS.",
        link: "http://aleff.sa-east-1.elasticbeanstalk.com/",
        linkGithub: "https://github.com/AL33H/portifolio",
        data: "01/024",
        tags: ["#Java", "#Vaadin", "#AWS"]
      },
      {
        name: "Portfólio com react",
        img: "",
        desc: "Implementação de portifolio com react afim de aprendizado.",
        link: "",
        linkGithub: "https://github.com/AL33H/portifolio-react",
        data: "01/2024",
        tags: ["#React"]
      },
      {
        name: "Java, Python, Kotlin e Go Teste",
        img: "",
        desc: "Projeto de linguagens diferente para aprendizado de sintaxe.",
        link: "",
        linkGithub: "https://github.com/AL33H/JavaTest",
        data: "06/2023",
        tags: ["#Java", "#Spring", "Python", "#Flask", "#SQLAlchy", "#Kotlin", "#Go"]
      },
      {
        name: "Java Concorrency template",
        img: "",
        desc: "Template para implementação concorrência de jobs no cliente, criei o template para testes pré-implementação, e posteriormente no cliente com sucesso.",
        link: "",
        linkGithub: "https://github.com/AL33H/java-competion",
        data: "01/2023",
        tags: ["#Java"]
      },
      {
        name: "OceanAgendas",
        img: "",
        desc: "Criar um sistema web voltado para prestação de serviços por agendamento. A ideia inicial é criar com as linguagens Java + SpringBoot, Angular e banco de dados com Oracle.",
        link: "",
        linkGithub: "https://github.com/AL33H/OceanAgendas",
        data: "07/2022",
        tags: ["#Java", "#Spring", "#Angular", "#Heroku"]
      },
      {
        name: "Dino Game",
        img: "",
        desc: "Replicar o jogo do Dino games para afins de treinamento.",
        link: "https://github.com/AL33H/Dino-game",
        linkGithub: "",
        data: "03/2022",
        tags: ["#JavaScript", "#HTML5", "#CSS3"]
      },
      {
        name: "Semana devsuperior Nélio Alves",
        img: "",
        desc: "O projeto dsvenda é um projeto Full Stack da plataforma da devsuperior, hospedando Backend e banco de dados no Heroku e FrontEnd no Netlify.",
        link: "https://dsvendas-aleff.netlify.app/",
        linkGithub: "https://dsvendas-aleff.netlify.app/",
        data: "09/2021",
        tags: ["#Java", "#Spring", "#Angular", "#Netlify"]
      },
      {
        name: "Semana devsuperior Nélio Alves",
        img: "",
        desc: "BarberSystem é um projeto de software de barbearia que foi intitulado como projeto final do Instituto federal do Ceará (IFCE),",
        link: "",
        linkGithub: "https://github.com/AL33H/BarberSystemJava",
        data: "01/2020",
        tags: ["#Java", "JavaSwing"]
      },
    ]
  }
}
