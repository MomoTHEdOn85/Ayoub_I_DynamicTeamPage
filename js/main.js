(() => {
  const Tname = document.querySelectorAll('.names'),
        Info = document.querySelector('#NAMES'),
        Bio = document.querySelector('.team-info');

  const bioInfo = [
    `Hello there! Hope you are doing good. I am a part of this team acting as a developer for the creation for this website. This means that I did all the coding ;)
    Coding example would include writing HTML, CSS and JavaScript for this website. Hope you had a nice experience with our website.`,

    `Hey ya'll, I already know you are good. I am also the part of this team member and alsoo a designer. Means that I am the designer who designed the aestheticness of this website. I already know you liked them.
    Have a nice experience enjoying and viewing them, just like I had a nice experience of creating them.`
  ]


  function getNames () {
    getTeamNames(this.classList, this.dataset.offset);
  }

  function getTeamNames(name, index) {
    console.log(name[1], index);

    Info.textContent = `I am\u00A0 ${name[1]}`;

    //adding bio form an array
    Bio.textContent = bioInfo[index];
  }

    //adding event listener when the 'click me' is clicked
    Tname.forEach(Tname => Tname.addEventListener('click', getNames));

  })();
