

    const Home = document.querySelector('.home')
    const Projects = document.querySelector('.projects')
    const Contact = document.querySelector('.contact')
    const Model = document.querySelector('.model')
    const Menus = document.querySelectorAll('.menu')
    const InfoDivs = document.querySelectorAll('.info-menu');
    const bgVideo = document.querySelector('.video-background video')
   
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
