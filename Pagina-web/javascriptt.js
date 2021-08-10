//DOM Element
const mainPage= document.querySelector('.main-page');
const loginPage= document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds_page');
const loginPageBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-button');
const modelPost = document.querySelector('.post-model');
const modelp=document.querySelector('.model');
const modelHeader = document.querySelector('.model-header');
const homebtn = document.querySelector('.brend');
const disconect=document.querySelector('.fa-chevron-down');
const modelpostbtn = document.querySelector('.model-header button');
const  modelinput = document.querySelector('.model-input');
const  userr = document.querySelector('.user');
const  sidebar = document.querySelector('.sidebar');
const  sidebarbody = document.querySelector('.sidebar-body');
const  xBtn = document.querySelector('.sidebar-header i');
const  logout = document.querySelector('.logout');
//--------------------------------------------------------


logout.addEventListener('click', () => {

    newsFeedPage.style.display = 'none';
    loginPage.style.display = 'grid';
    sidebar.classList.remove('sidebar-display');
    sidebarbody.classList.remove('sidebar-body-display');
});

const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

userr.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar-display');
    sidebarbody.classList.add('sidebar-body-display');
});

xBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarbody.classList.remove('sidebar-body-display');
});

homebtn.addEventListener('click', () => {
    loginPage.style.display = 'none';
    mainPage.style.display = 'grid';
});

middleContent.addEventListener('click', e=> {
    if(e.target.classList[1]=='main-btn')
    {
    goToLoginPage();
    }
    
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const userPassword = document.querySelector('.password');

    if(inputUserInfo.value !== "" && userPassword.value != "")
    {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }
    else
    {
        goToLoginPage();
    }

});

loginPageBtn.addEventListener('click', () =>{
    const loginInfoUser = document.querySelector('.login-info-user');
    const loginUserPass = document.querySelector('.login-user-pass');
    
    if(loginInfoUser.value !== "" && loginUserPass.value != "")
    {
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }
    
});

postBtn.addEventListener('click', () => {

    modelp.style.display='block';
    modelPost.classList.add('post-model-display');
});

modelHeader.addEventListener('click', () => {
    modelp.style.display = 'none';
    modelPost.classList.remove('post-model-display');
    if(modelinput.value != "")
    {
        modelinput.value = "";
        ChangeOpacity(0.5);
    }
});

const ChangeOpacity =  x => {
    modelpostbtn.style.opacity =x;
};

modelinput.addEventListener('keypress', (e)=> {
 if( e.target.value != "")
 {
     ChangeOpacity(1);
 }
});

modelinput.addEventListener('blurr', (e)=> {
    if( e.target.value != '')
    {
        ChangeOpacity(0.5);
    }
   });
