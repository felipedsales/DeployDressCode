import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Sobre.css';


function Sobre() {

    return (


        <Grid container direction="row" justifyContent="center" className="caixa-sobre">
            <Grid xs={12} className="imagem-manifesto">
                <Box>
                    <img src="https://i.imgur.com/Ba0wSry.png" alt="" width="100%" />
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={12} sm={12} >

                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Apoiamos iniciativas que oferecem roupas de qualidade
                    produzidas de forma empática e responsável transformando a vida de todos envolvidos na cadeia produtiva -  da obtenção de matéria prima ao
                    corte e costura - e entregando ao consumidor final a certeza de que ele contribuiu com um processo cujas medidas visam a proteção, a
                    sustentação e a melhora dos recursos humanos e naturais que são necessários no futuro.
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Proporcionamos um lugar de troca para aqueles que desejam ter o consumo consciente como uma premissa do vestir-se (e sentir-se) bem. Fazemos
                    declarações ao mundo através das roupas que usamos. Através de cores, estilos e acessórios, oferecemos um vislumbre do nosso jeito de viver e
                    assim louvamos nossa diversidade: abolindo qualquer ideia de padrão.
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Promovemos atitudes que evitam o descarte rápido, construindo um diálogo constante entre as várias épocas da moda na medida em que fomentamos
                    também a comercialização de roupas usadas através do incentivo a brechós online e de bairro.
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Cada linha que compõe o tecido das roupas que vestimos tem sua importância e incentivando o uso roupas sem gênero que vestem todos os tipos
                    de corpos, realçamos cada traço que nos compõem, valorizando cada curva do nosso corpo, cada desvio de nossa história.
                    
                    
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto dresscodetxt">
                    Somos Dresscode.
                </Typography>

            </Grid>

            <Grid item xs={5} sm={5} >
                <img src="https://i.imgur.com/0oqcguC.png" alt="linha" className="linha" />
            </Grid>

            <Grid item xs={2} sm={2} justifyContent="center">

                <Typography variant="h4" component="h3" align="center" gutterBottom className="titulo-autores">
                    Equipe
                </Typography>

            </Grid>

            <Grid item xs={5} sm={5}>
                <img src="https://i.imgur.com/0oqcguC.png" alt="linha" className="linha" />
            </Grid>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://media.discordapp.net/attachments/900887742836248667/920714442545705000/20211215_133010.jpg?width=492&height=492" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Maiury Sousa
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Formada em Artes Visuais, me encontro hoje em uma transição de carreira tendo participado
                    do Bootcamp da Generation Brasil que teve como foco o desenvolvimento web com o uso da linguagem
                    Java para back-end e bibliotecas do React para front-end, além de desenvolver minhas Soft Skills.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/maiurysousa" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/maiury-sousa/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://avatars.githubusercontent.com/u/90806568?s=400&u=d46a0e82d323c484bd0832087dff74fdda482e5c&v=4" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Wesley Gomes
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Graduado em Administração, hoje estou em uma transição de carreira tendo participado do
                    Bootcamp da Generation Brasil, houve o foco no desenvolvimento web utilizando de linguagem como:
                    Java para back-end e bibliotecas do React para front-end, além disso, minhas Soft Skills também foram desenvolvidas,
                    principalmente a comunicação, traço muito importante de minha personalidade.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://imgur.com/qv0UQhX.png" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Felipe de Sales
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Estudante de Segurança da Informação, me encontro hoje formado no Bootcamp da Generation Brasil onde pude desenvolver minhas soft skills como a comunicação, o trabalho em equipe e atenção aos detalhes. E também minhas hard skills como a linguagem Java, SpringBoot, MySQL, React e TypeScript.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/felipedsales" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-santos-65b7171bb/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://avatars.githubusercontent.com/u/83739100?v=4" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Glauber Torres
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Olá! Sou formado em Produção de Áudio e Vídeo pela ETEC Jornalista Roberto Marinho e atualmente busco minha primeira oportunidade na área de tecnologia. Acredito que minha experiência como assistente de microfonista em curtas-metragens e séries me auxilia principalmente no trabalho em equipe.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/glaubertorres" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/glauberttorres/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://media.discordapp.net/attachments/900887742836248667/920731816007192586/20211215_143845.jpg?width=411&height=492" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Darcy Oliveira
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Uma desenvolvedora em constante evolução que largou o Design de Interiores para se aventurar
                    no mundo dos códigos. Formada pela Generation Brasil com as principais tecnologias em Java
                    para Back end e JavaScript com React para Front end, a famosa desenvolvedora fullstack java jr,
                    prazer eu sou a Darcy.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/DarcyOliveira" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/darcyelleoliveira/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://imgur.com/gjdzk58.png" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    André Santos
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Olá, eu sou o André, formado em administração pela ETEC de Poá. Hoje em transição de carreira, me encontrei em meio aos códigos e variáveis, e sou apaixonado pela tecnologia em si, como Desenvolvedor Full Stack Java Jr, espero contribuir para um mundo melhor com meus conhecimentos.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/Dehzxg" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/andresantos610/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>
        </Grid>
    );
}

export default Sobre;