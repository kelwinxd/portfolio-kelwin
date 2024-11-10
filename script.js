

    const Home = document.querySelector('.home')
    const Projects = document.querySelector('.projects')
    const Contact = document.querySelector('.contact')
    const Model = document.querySelector('.model')
    const Menus = document.querySelectorAll('.menu')
    const InfoDivs = document.querySelectorAll('.info-menu');
    const bgVideo = document.querySelector('.video-background video')
    const Config = document.querySelector('.config')
   
    console.log(InfoDivs)



    function changeModelAndColor(menu, modelSrc) {
        console.log(`Clicou em ${menu}`);

        Model.classList.add("animation")
        Menus.forEach((i) => {
            i.classList.remove('active-menu');
        });

        InfoDivs.forEach((div) => {
            div.classList.remove('active');
        });



        document.getElementById(`${menu}`).classList.add('active-menu');
        setTimeout(() => {
            
            Model.setAttribute('src', modelSrc);
        }, 350)

        setTimeout(() => {
            Model.classList.remove("animation")
        }, 1200)
    }

    Home.addEventListener('click', () => {
        changeModelAndColor('home', './office_computer.glb');
        InfoDivs[0].classList.add('active')
         bgVideo.style.left = '60%'
            bgVideo.style.top = '50%'
    });

    Projects.addEventListener('click', () => {
        console.log('Projects')
        changeModelAndColor('projects', './ship.glb');
        setTimeout(calcScroll, 400); 
        InfoDivs[1].classList.add('active')
        
          bgVideo.style.left = '40%'
             bgVideo.style.top = '50%'
    });

    Contact.addEventListener('click', () => {
        changeModelAndColor('contact', './device.glb');
        InfoDivs[2].classList.add('active')

            bgVideo.style.left = '40%'
            bgVideo.style.top = '30%'
    });

   
    const config = document.querySelector('.config');
    const DropConfig = document.querySelector('.drop-config');
    
    config.addEventListener('click', (event) => {
        DropConfig.classList.toggle('activeDrop');
        console.log('clicou');
        
        // Impede que o clique no Config feche o dropdown imediatamente
        event.stopPropagation();
    });
    
    // Evento para fechar o dropdown ao clicar fora
    document.addEventListener('click', (event) => {
        // Verifica se o clique foi fora do Config e do DropConfig
        if (!config.contains(event.target) && !DropConfig.contains(event.target)) {
            DropConfig.classList.remove('activeDrop');
        }
    });


// Função para calcular o scroll
function calcScroll() {
    const ProjOne = document.querySelector('.proj'); // Um projeto
    const ArrowRight = document.querySelector('.arrows .right');
    const ArrowLeft = document.querySelector('.arrows .left');
    const Works = document.querySelector('.works'); // Container dos projetos

    if (ProjOne) {
        const ProjWidth = ProjOne.offsetWidth;
        let scrollAmount = ProjWidth + parseInt(window.getComputedStyle(ProjOne).marginRight) + 30; // Inclui a margem do gap

        console.log('Project width:', ProjWidth);

        // Função para rolar o conteúdo e atualizar as setas
        function scrollAndUpdate(amount) {
            Works.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
            setTimeout(updateArrows, 400); // Espera a rolagem concluir para atualizar as setas
        }

        // Adiciona evento para ArrowRight
        ArrowRight.addEventListener('click', () => {
            scrollAndUpdate(scrollAmount); // Rola para a direita
        });

        // Adiciona evento para ArrowLeft
        ArrowLeft.addEventListener('click', () => {
            scrollAndUpdate(-scrollAmount); // Rola para a esquerda
        });

        // Função para verificar e atualizar a visibilidade das setas
        function updateArrows() {
            const maxScrollLeft = Works.scrollWidth - Works.clientWidth; // Ponto máximo de rolagem
            console.log('Max Scroll Left:', maxScrollLeft);
            console.log('Current Scroll Left:', Works.scrollLeft);

            // Se a rolagem estiver no início (0), esconde a seta da esquerda
            if (Works.scrollLeft <= 0) {
                ArrowLeft.style.display = 'none'; 
            } else {
                ArrowLeft.style.display = 'block'; 
            }

            // Se a rolagem estiver no final, esconde a seta da direita
            if (Works.scrollLeft + Works.clientWidth >= Works.scrollWidth) {
                ArrowRight.style.display = 'none'; 
            } else {
                ArrowRight.style.display = 'block'; 
            }
        }

        // Inicializa a verificação das setas ao carregar a página
        updateArrows();
    } else {
        console.error('Element .proj not found!');
    }
}

document.getElementById("checkbox").addEventListener("change", function() {
    const videoSource = document.getElementById("bg-video").querySelector("source");

    if (this.checked) {
        videoSource.src = "./bglight.mp4"; 
        document.body.style.backgroundColor = '#c1764d'
        const allMenu = document.querySelectorAll('.info-menu')
        allMenu.forEach((i) => {
            i.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
            i.style.color = 'black'
        })
        console.log(allMenu)

    } else {
        videoSource.src = "./earth2.mp4"; // Caminho do vídeo para o modo "moon"
        document.body.style.backgroundColor = 'black'
        const allMenu = document.querySelectorAll('.info-menu')
         allMenu.forEach((i) => {
            i.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
            i.style.color = '#fff'
        })
       


    }
    
    document.getElementById("bg-video").load(); // Recarrega o vídeo com o novo src
});
