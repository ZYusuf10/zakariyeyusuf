/*remove container data. Replace with recieved :). Thanks.
*/
function recieved(){
    alert('Recieved! I would be in touch with you as soon as possiple.')
}
/* set the first section's id to current, 
if not the last section, on scroll, set next section's id to current */
var  currentNum = 1;
window.onload = () => {
    /*div(id="aboutContainer" class="mainContainer" class="about")
        div(class="section" id="current")
            p I started developing websites in 2016 with techCorps as a student employee, where I lead a team of 4 people to developing websites for local bussiness and organizations based in Ohio.
            p Since, then, I have been freelancing web developer, primarily with javascript, and, I have gotten experience to other paradigms of computing through my study of Computer Science and Engineering at the Ohio State University.
        div(class="section" id="current")
            p I started developing websites in 2016 with techCorps as a student employee, where I lead a team of 4 people to developing websites for local bussiness and organizations based in Ohio.
            p Since, then, I have been freelancing web developer, primarily with javascript, and, I have gotten experience to other paradigms of computing through my study of Computer Science and Engineering at the Ohio State University.
        div(class="section" id="education")
          h2 Education
            ul
              li The Ohio State Univesity 2019-2023: BS Computer Since &amp  Engineering
        div(class="section" id="reviews")
            h2 Reviews
        div(class="section" id="skills")
            h2 Skills
            div(class="skillsContainer")
              div(class="skillSection" id="especielty")
                p Especielty: JavaScript
            */
    let aboutContainer = document.querySelector('#aboutContainer');
    let section = document.createElement('div');
    section.setAttribute('class', 'section');
    section.setAttribute('class', 'aboutMe');
    section.setAttribute('id', 'current');
    aboutContainer.appendChild(section);

    let bio = document.createElement('p');
    bio.innerHTML = 'I started developing websites in 2016 with techCorps as a student employee, where I lead a team of 4 people to developing websites for local bussiness and organizations based in Ohio.'
    let bio2 = document.createElement('p');
    bio2.innerHTML =  'Since, then, I have been freelancing web developer, primarily with javascript, and, I have gotten experience to other paradigms of computing through my study of Computer Science and Engineering at the Ohio State University.';
    section.appendChild(bio);
    section.appendChild(bio2);

    let nav = document.createElement('div');
    nav.textContent = "+"
    nav.setAttribute('class', 'navigButton');
    nav.addEventListener('click', change);
    aboutContainer.appendChild(nav);
    
} 

/* on scroll, change the current focus to the next section accordingly */

function change(){

    
    //case go down to education
    let current = document.querySelector('#current');
    if(currentNum == 1){
        let aboutContainer = document.querySelector('#aboutContainer');
        aboutContainer.innerHTML = '';

        let navTop = document.createElement('div');
        navTop.textContent = "+"
        navTop.setAttribute('class', 'navigTop');
        navTop.addEventListener('click', topp);
        aboutContainer.appendChild(navTop);
    

        /*div(class="section" id="education")
          h2 Education
            ul
              li The Ohio State Univesity 2019-2023: BS Computer Since &amp  Engineering */
        let section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('class', 'education');
        section.setAttribute('id', 'current');
        aboutContainer.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = "Education";
        section.appendChild(h2);

        let ul = document.createElement('ul');
        section.appendChild(ul);
        let li = document.createElement('li');
        li.setAttribute('class', 'educationLi');
        li.textContent = 'The Ohio State Univesity 2019-2023: BS Computer Since &  Engineering';

        ul.appendChild(li);

        let nav = document.createElement('div');
        nav.textContent = "+"
        nav.setAttribute('class', 'navigButton');
        nav.addEventListener('click', change);
        aboutContainer.appendChild(nav);
        currentNum = 2;
    }else if(currentNum == 2){
        //case reviews //

        let aboutContainer = document.querySelector('#aboutContainer');
        aboutContainer.innerHTML = '';

        let navTop = document.createElement('div');
        navTop.textContent = "+"
        navTop.setAttribute('class', 'navigTop');
        navTop.addEventListener('click', topp);
        aboutContainer.appendChild(navTop);

        /*div(class="section" id="reviews")
        h2 Reviews */
    
        let section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('class', 'Experience');
        section.setAttribute('id', 'current');
        aboutContainer.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = "Relevent Experience";
        section.appendChild(h2);


        //job1 
        let job1 = document.createElement('div');
        job1.setAttribute('class', 'job');
        section.appendChild(job1);
        let exp1Header = document.createElement('div');
        exp1Header.textContent = "2017: Student Employee at Tech Corps";
        job1.appendChild(exp1Header);

        let exp1Duty = document.createElement('ul');

        let exp1DutyOne = document.createElement('li');
        exp1DutyOne.textContent = "Web Developer";
        exp1Duty.appendChild(exp1DutyOne);

        let exp1DutyTwo = document.createElement('li');
        exp1DutyTwo.textContent = "Team Leader";
        exp1Duty.appendChild(exp1DutyTwo);

        job1.appendChild(exp1Duty);

        //job2
        let job2 = document.createElement('div');
        job2.setAttribute('class', 'job');
        section.appendChild(job2);
        let exp2Header = document.createElement('div');
        exp2Header.textContent = "2019-2020: Free Lancing Web Developer";
        job2.appendChild(exp2Header);

        let exp2Duty = document.createElement('ul');

        let exp2DutyOne = document.createElement('li');
        exp2DutyOne.textContent = "Javascript Developer";
        exp2Duty.appendChild(exp2DutyOne);

        let exp2DutyTwo = document.createElement('li');
        exp2DutyTwo.textContent = "Consultant";
        exp2Duty.appendChild(exp2DutyTwo);

        job2.appendChild(exp2Duty);

        let nav = document.createElement('div');
        nav.textContent = "+"
        nav.setAttribute('class', 'navigButton');
        nav.addEventListener('click', change);
        aboutContainer.appendChild(nav);
        currentNum = 3;
    }else if(currentNum == 3){
        /*case skills
        div(class="section" id="skills")
            h2 Skills
            div(class="skillsContainer")
              div(class="skillSection" id="especielty")
                p Especielty: JavaScript
            */
        let aboutContainer = document.querySelector('#aboutContainer');
        aboutContainer.innerHTML = '';

        let navTop = document.createElement('div');
        navTop.textContent = "+"
        navTop.setAttribute('class', 'navigTop');
        navTop.addEventListener('click', topp);
        aboutContainer.appendChild(navTop);

        /*div(class="section" id="reviews")
        h2 Reviews */
    
        let section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('class', 'skills');
        section.setAttribute('id', 'current');
        aboutContainer.appendChild(section);

        let h2 = document.createElement('h3');
        h2.textContent = "Skills";
        section.appendChild(h2);

        let skillsContainer = document.createElement('div');
        skillsContainer.setAttribute('class', 'skillsContainer');
        section.appendChild(skillsContainer);
        //expecielty
        let especielty = document.createElement('div');
        especielty.setAttribute('class', 'skillSection');
        especielty.setAttribute('id', 'especielty');
        skillsContainer.appendChild(especielty);
        
        let exp = document.createElement('h2');
        exp.textContent = 'Especialty';
        especielty.appendChild(exp);

        let javP = document.createElement('p');
        javP.textContent = 'JavaScript';
        especielty.appendChild(javP);

        let node = document.createElement('p');
        node.textContent = 'NodeJs';
        especielty.appendChild(node);

        //Other Languages
        let otherSkills = document.createElement('div');
        otherSkills.setAttribute('class', 'skillSection');
        otherSkills.setAttribute('id', 'otherSkills');
        skillsContainer.appendChild(otherSkills);

        let otherh = document.createElement('h2');
        otherh.textContent = 'Other Languages';
        otherSkills.appendChild(otherh);

        let java = document.createElement('p');
        java.textContent = 'Java';
        otherSkills.appendChild(java);

        let cssHtml = document.createElement('p');
        cssHtml.textContent = 'CSS3/HTML5';
        otherSkills.appendChild(cssHtml);

        let xml = document.createElement('p');
        xml.textContent = 'XML';
        otherSkills.appendChild(xml);

        //frame works
        let frameWorks = document.createElement('div');
        frameWorks.setAttribute('class', 'skillSection');
        frameWorks.setAttribute('id', 'frameWorks');
        skillsContainer.appendChild(frameWorks);

        let frh = document.createElement('h2');
        frh.textContent = 'Frame Works';
        frameWorks.appendChild(frh);

        let express = document.createElement('p');
        express.textContent = 'Express';
        frameWorks.appendChild(express);

        //Database Services
        //Other Languages
        let databases = document.createElement('div');
        databases.setAttribute('class', 'skillSection');
        databases.setAttribute('id', 'database');
        skillsContainer.appendChild(databases);

        let databasesH = document.createElement('h2');
        databasesH.textContent = 'Database Services';
        databases.appendChild(databasesH);

        let MongoDB = document.createElement('p');
        MongoDB.textContent = 'MongoDB';
        databases.appendChild(MongoDB);




        currentNum = 4;
    }
}

/* The move top button in the about */
function topp(){

    
    //case uo to bio
    let current = document.querySelector('#current');
    if(currentNum == 2){
        let aboutContainer = document.querySelector('#aboutContainer');
        aboutContainer.innerHTML = '';

        let section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('class', 'aboutMe');
        section.setAttribute('id', 'current');
        aboutContainer.appendChild(section);

        let bio = document.createElement('p');
        bio.innerHTML = 'I started developing websites in 2016 with techCorps as a student employee, where I lead a team of 4 people to developing websites for local bussiness and organizations based in Ohio.'
        let bio2 = document.createElement('p');
        bio2.innerHTML =  'Since, then, I have been freelancing web developer, primarily with javascript, and, I have gotten experience to other paradigms of computing through my study of Computer Science and Engineering at the Ohio State University.';
        section.appendChild(bio);
        section.appendChild(bio2);

        let nav = document.createElement('div');
        nav.textContent = "+"
        nav.setAttribute('class', 'navigButton');
        nav.addEventListener('click', change);
        aboutContainer.appendChild(nav);
        currentNum = 1;
    }else if(currentNum == 3){
        //go upto education
        let aboutContainer = document.querySelector('#aboutContainer');
        aboutContainer.innerHTML = '';

        let navTop = document.createElement('div');
        navTop.textContent = "+"
        navTop.setAttribute('class', 'navigTop');
        navTop.addEventListener('click', topp);
        aboutContainer.appendChild(navTop);
    

        /*div(class="section" id="education")
          h2 Education
            ul
              li The Ohio State Univesity 2019-2023: BS Computer Since &amp  Engineering */
        let section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('class', 'education');
        section.setAttribute('id', 'current');
        aboutContainer.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = "Education";
        section.appendChild(h2);

        let ul = document.createElement('ul');
        section.appendChild(ul);
        let li = document.createElement('li');
        li.setAttribute('class', 'educationLi');
        li.textContent = 'The Ohio State Univesity 2019-2023: BS Computer Since &  Engineering';

        ul.appendChild(li);

        let nav = document.createElement('div');
        nav.textContent = "+"
        nav.setAttribute('class', 'navigButton');
        nav.addEventListener('click', change);
        aboutContainer.appendChild(nav);
        currentNum = 2;
        
    }else if(currentNum == 4){
        //go upto reviews
        let aboutContainer = document.querySelector('#aboutContainer');
        aboutContainer.innerHTML = '';

        let navTop = document.createElement('div');
        navTop.textContent = "+"
        navTop.setAttribute('class', 'navigTop');
        navTop.addEventListener('click', topp);
        aboutContainer.appendChild(navTop);

        /*div(class="section" id="reviews")
        h2 Reviews */
    
        let section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('class', 'Experience');
        section.setAttribute('id', 'current');
        aboutContainer.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = "Relevent Experience";
        section.appendChild(h2);


        //job1 
        let job1 = document.createElement('div');
        job1.setAttribute('class', 'job');
        section.appendChild(job1);
        let exp1Header = document.createElement('div');
        exp1Header.textContent = "2017: Student Employee at Tech Corps";
        job1.appendChild(exp1Header);

        let exp1Duty = document.createElement('ul');

        let exp1DutyOne = document.createElement('li');
        exp1DutyOne.textContent = "Web Developer";
        exp1Duty.appendChild(exp1DutyOne);

        let exp1DutyTwo = document.createElement('li');
        exp1DutyTwo.textContent = "Team Leader";
        exp1Duty.appendChild(exp1DutyTwo);

        job1.appendChild(exp1Duty);

        //job12
        let job2 = document.createElement('div');
        job2.setAttribute('class', 'job');
        section.appendChild(job2);
        let exp2Header = document.createElement('div');
        exp2Header.textContent = "2019-2020: Free Lancing Web Developer";
        job2.appendChild(exp2Header);

        let exp2Duty = document.createElement('ul');

        let exp2DutyOne = document.createElement('li');
        exp2DutyOne.textContent = "Javascript Developer";
        exp2Duty.appendChild(exp2DutyOne);

        let exp2DutyTwo = document.createElement('li');
        exp2DutyTwo.textContent = "Consultant";
        exp2Duty.appendChild(exp2DutyTwo);

        job2.appendChild(exp2Duty);

        let nav = document.createElement('div');
        nav.textContent = "+"
        nav.setAttribute('class', 'navigButton');
        nav.addEventListener('click', change);
        aboutContainer.appendChild(nav);
        currentNum = 3;
    }
}
/* Front page
0) declare frontNum to 1
1)if frontNum == 1 add navigation button of down that onclick sets content to "", and adds the navup and two button sections. 
  set frontNum to 2.
2) if frontNum == 2 add navigation button up  thatthat onclick sets content to "", and adds tnavdown andhe top sections.
  set frontNum to 3. */

/*div(id="media" class="section")
            h2 Say Hi
            <a id="gitHub" href="https://github.com/ZYusuf10">gitHub</a>
            <a id="instagram" href="https://www.instagram.com/zakariye_yusuf_/">instagram</a>
            <a id="linkedIn" href="https://www.linkedin.com/in/zakaria-yusuf-a6ba1976">linked in</a>
            <a id="twitter" href="https://twitter.com/ZakariyeYusuf7">twitter </a>
        div(id="moreAboutMe" class="section")
            h2 More about Me
            <a id="about" href="about"> Summary</a>
            <a href="projects"> projects</a>
            <a id="resume" href="resume"> resume</a>
            <a id="journal" href="journal"> journal </a> 
             <a href="contact"> contactMe. </a>
            */
//0)
var frontNum = 1;
//1)

if(frontNum == 1){ 
    let frontPage = document.querySelector('#frontPage'); 
    let frontContainer = document.querySelector('.front');
    

    let gradientDiv = document.createElement('div');

    gradientDiv.setAttribute('class', 'gradientDiv');
    gradientDiv.addEventListener('click', down)
    frontPage.appendChild(gradientDiv); 
    

    let navDown = document.createElement('div');
    navDown.textContent = ">"
    navDown.setAttribute('class', 'navigDown');
    navDown.addEventListener('click', down);
    gradientDiv.appendChild(navDown);
    
}

function down(){
    

    let frontPage = document.querySelector('#frontPage');
    frontPage.innerHTML = '';
    let gradientDivUp = document.createElement('div');
    gradientDivUp.setAttribute('class', 'gradientDivUp');
    gradientDivUp.addEventListener('click', up);
    gradientDivUp.style.color = '#CBD0D8;'

    let navUp = document.createElement('div');
    navUp.textContent = ">"
    navUp.setAttribute('class', 'navigUp');
    navUp.addEventListener('click', up);
    gradientDivUp.appendChild(navUp);
    frontPage.appendChild(gradientDivUp); 
    frontPage.style.backgroundColor = '#CBD0D8';

    let frontContainer = document.createElement('div');
    frontContainer.setAttribute('class', 'mainContainer');
    frontContainer.setAttribute('class', 'front')
    frontContainer.setAttribute('id', 'mainContainer')
    frontPage.appendChild(frontContainer);
    
    /*
    div(id="moreAboutMe" class="section")
            h2 More about Me
            <a id="about" href="about"> Summary</a>
            <a id="resume" href="resume"> resume</a>
            <a href="projects"> Recent Work</a>
            <a href="contact"> contactMe. </a>
            <a id="journal" href="journal"> journal </a> 
            */
    let moreAboutMe = document.createElement('div');
    moreAboutMe.setAttribute('class', 'section');
    moreAboutMe.setAttribute('id', 'moreAboutMe');
    frontContainer.appendChild(moreAboutMe);

    let moreH2 = document.createElement('h2');
    moreH2.textContent = 'More About Me';
    moreAboutMe.appendChild(moreH2);

    let about = document.createElement('a');
    about.setAttribute('href', 'about');
    about.setAttribute('id', 'about');
    about.textContent = 'summary'
    moreAboutMe.appendChild(about);

    let resume = document.createElement('a');
    resume.setAttribute('href', 'resume');
    resume.setAttribute('id', 'resume');
    resume.textContent = 'resume';
    moreAboutMe.appendChild(resume);

    let projects = document.createElement('a');
    projects.setAttribute('href', 'projects');
    projects.setAttribute('id', 'projects');
    projects.textContent = 'projects';
    moreAboutMe.appendChild(projects);

    let contact = document.createElement('a');
    contact.setAttribute('href', 'contact');
    contact.setAttribute('id', 'contact');
    contact.textContent = 'contact';
    moreAboutMe.appendChild(contact);

    let journal = document.createElement('a');
    journal.setAttribute('href', 'journal');
    journal.setAttribute('id', 'journal');
    journal.textContent = 'journal';
    moreAboutMe.appendChild(journal);

    /*div(id="media" class="section")
            h2 Say Hi
            <a id="gitHub" href="https://github.com/ZYusuf10">gitHub</a>
            <a id="instagram" href="https://www.instagram.com/zakariye_yusuf_/">instagram</a>
            <a id="linkedIn" href="https://www.linkedin.com/in/zakaria-yusuf-a6ba1976">linked in</a>
            <a id="twitter" href="https://twitter.com/ZakariyeYusuf7">twitter </a> */
    let media = document.createElement('div');
    media.setAttribute('class', 'section');
    media.setAttribute('id', 'media');
    frontContainer.appendChild(media);

    let mediaH2 = document.createElement('h2');
    mediaH2.textContent = 'Social Media';
    media.appendChild(mediaH2);

    let gitHub = document.createElement('a');
    gitHub.setAttribute('href', 'https://github.com/ZYusuf10');
    gitHub.setAttribute('id', 'gitHub');
    gitHub.textContent = 'gitHub'
    media.appendChild(gitHub);

    let instagram = document.createElement('a');
    instagram.setAttribute('href', 'https://www.instagram.com/zakariye_yusuf_/');
    instagram.setAttribute('id', 'instagram');
    instagram.textContent = 'instagram';
    media.appendChild(instagram);

    let linkedIn = document.createElement('a');
    linkedIn.setAttribute('href', 'https://www.linkedin.com/in/zakaria-yusuf-a6ba1976');
    linkedIn.setAttribute('id', 'linkedIn');
    linkedIn.textContent = 'linkedIn';
    media.appendChild(linkedIn);

    let twitter = document.createElement('a');
    twitter.setAttribute('href', 'https://twitter.com/ZakariyeYusuf7');
    twitter.setAttribute('id', 'twitter');
    twitter.textContent = 'twitter';
    media.appendChild(twitter);
}

function up(){
    let frontPage = document.querySelector('#frontPage');
    frontPage.innerHTML = '';


    let frontContainer = document.createElement('div');
    frontContainer.setAttribute('class', 'mainContainer');
    frontContainer.setAttribute('class', 'front')
    frontContainer.setAttribute('id', 'mainContainer')
    frontPage.appendChild(frontContainer);
    frontPage.style.backgroundColor = '#59360b';
   
    /* div(class="mainContainer" id="mainContainer" class="front")
        div(id="banner" class="section")
          h2 Zakariye Yusuf
          img(src="/images/banner.webp")
          p 
        */
    let banner = document.createElement('div');
    banner.setAttribute('class', 'section');
    banner.setAttribute('id', 'banner');
    frontContainer.appendChild(banner);

    let nameH = document.createElement('h2');
    nameH.textContent = 'Zakariye Yusuf';
    banner.appendChild(nameH);

    let bannerImg = document.createElement('img');
    bannerImg.setAttribute('src', '/images/banner.webp');
    banner.appendChild(bannerImg);

    let info = document.createElement('p');
    banner.appendChild(info);

    
    /*
    div(id="summary" class="section")
            div(id="summaryBody")
                p(id="hello") Hello, 
                p Your bussiness needs to come online with a new modren website and you need a modren javaScript web developer for that. 
                p That is where I come in. I develop websites in JavaScript and study Computer Science and Engineering at The Ohio State University. I have expertise is in Javascript for both frontend and the backend(Node/express). So, let me take care of your web development in javascript, while you focus on what is  more important to you!
                */ 

    let summary = document.createElement('div');
    summary.setAttribute('class', 'section');
    summary.setAttribute('id', 'summary');
    frontContainer.appendChild(summary);

    let summaryBody = document.createElement('div');
    summaryBody.setAttribute('id', 'summaryBody');
    summary.appendChild(summaryBody);
    
    let hello = document.createElement('p');
    hello.textContent = 'Hello,';
    hello.setAttribute('id', 'hello');
    summaryBody.appendChild(hello);

    let p1 = document.createElement('p');
    p1.textContent = 'Your bussiness needs to come online with a new modren website and you need a modren javaScript web developer with ample knowledge and experties for that.';
    summaryBody.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = "That is where I come in. Get in touch below, let's have a cap of cofee";
    summaryBody.appendChild(p2);

    let gradientDiv = document.createElement('div');
   
    gradientDiv.setAttribute('class', 'gradientDiv');
    

    let navDown = document.createElement('div');
    navDown.textContent = ">"
    navDown.setAttribute('class', 'navigDown');
    navDown.addEventListener('click', down);
    gradientDiv.appendChild(navDown);
    frontPage.appendChild(gradientDiv); 
}