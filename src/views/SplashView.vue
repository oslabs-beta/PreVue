<template>
  <div class="scroll">
    <div id="splash">
      <v-app-bar style="background-color:  #39b982;"
        ><v-app-bar-nav-icon
          ><img
            height="50"
            src="../assets/prevue-large.png"
            alt=""/></v-app-bar-nav-icon
        ><v-app-bar-title
          style="color: white; font-size: 2em; font-weight: 850; font-family: Nunito;"
          >PreVue</v-app-bar-title
        >
        <MenuComponent :oauth="oauth" :toHome="toHome"></MenuComponent>
        <v-btn
          @click="toHome"
          style="color: white; font-size: 1em; font-weight: 650; margin-right: 20px"
          >Try PreVue</v-btn
        >
        <v-btn
          @click="oauth"
          style="color: white; font-size: 1em; font-weight: 650; margin-right: 15px"
          >Log In</v-btn
        ><v-app-bar-nav-icon style="margin-right: 15px;"
          ><a href="https://github.com/open-source-labs/PreVue"
            ><img height="25" src="../assets/github-mark-white.png" alt=""/></a
        ></v-app-bar-nav-icon>
        <v-app-bar-nav-icon style="margin-right: 50px;"
          ><a href="https://hub.docker.com/r/prevue/prevue-production"
            ><i class="fab fa-docker icon fa-lg" style="color: white;"></i></a
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <div id="banner-wrapper" style="margin-top: 2em;">
        <div id="banner" class="box container" style="padding: 3em;">
          <div class="row">
            <div class="col-5 col-12-medium">
              <h2>This is PreVue.</h2>
              <p style="font-size: 2.4em;">
                An All in One Prototyping Tool For Vue Developers
              </p>
            </div>
            <div
              class="col-7 col-12-medium"
              style="padding: 1em ,0 , 0 , 0; display: flex;"
            >
              <div id="video-container">
                <video
                  src="../assets/PreVueDemo.mp4"
                  muted
                  autoplay
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div class="border" style="margin-bottom: 1.5em;">
        <p>
          <strong>
            Use PreVue to create projects in single sessions or sign in with
            GitHub to save projects and update them anytime</strong
          >
        </p>
      </div>

      <div id="features-wrapper">
        <div class="container">
          <div class="rowCard" style="background-color: white;">
            <div class="col-6 col-12-medium" style="flex:40%">
              <section
                class="box feature"
                style="background-color: transparent;"
              >
                <a href="#" class="image featured"><img src="" alt=""/></a>
                <div class="inner">
                  <header>
                    <h2><center>Adding Components</center></h2>
                    <br />
                  </header>
                  <ul>
                    <li>
                      Create components and populate them with HTML elements.
                      Add routes that represent different views for your
                      application. See your hierarchy in the tree view.
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div class="col-6 col-12-medium" style="flex:60%">
              <section class="box feature">
                <a href="#" class="image featured"><img src="" alt=""/></a>
                <div class="inner">
                  <video
                    src="../assets/ComponentMp4.mp4"
                    muted
                    autoplay
                    loop
                  ></video>
                </div>
              </section>
            </div>
          </div>
          <div class="rowCard" style="background: none">
            <div class="col-6 col-12-medium" style="flex:60%">
              <section class="box feature" style="background: none;">
                <a href="#" class="image featured"><img src="" alt=""/></a>
                <div class="inner">
                  <video
                    src="../assets/ModalMp4.mp4"
                    muted
                    autoplay
                    loop
                  ></video>
                </div>
              </section>
            </div>

            <div class="col-6 col-12-medium" style="flex:40%">
              <section class="box feature" style="background: none">
                <a href="#" class="image featured"><img src="" alt=""/></a>
                <div class="inner">
                  <header>
                    <h2 style="color: #39b982">
                      <center>Editing Components</center>
                    </h2>
                    <br />
                  </header>
                  <ul>
                    <li style="color: #39b982">
                      Double click your components to open the modal view.
                      Change the nesting of your HTML elements and create
                      parent/child relationships.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div class="rowCard" style="background-color: white;">
            <div class="col-6 col-12-medium" style="flex: 40%">
              <section class="box feature">
                <a href="#" class="image featured"><img src="" alt=""/></a>
                <div class="inner">
                  <header>
                    <h2>
                      <center>Manage Projects</center>
                    </h2>
                    <br />
                  </header>
                  <ul>
                    <li>
                      Export your project as a fully functional Vue application.
                      Sign in with GitHub to save projects and retrieve them
                      later on.
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div class="col-6 col-12-medium" style="flex: 60%">
              <section class="box feature">
                <a href="#" class="image featured"><img src="" alt=""/></a>
                <div class="inner">
                  <video
                    src="../assets/SaveMp4.mp4"
                    muted
                    autoplay
                    loop
                  ></video>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="border">
        <h2>Meet the team</h2>
      </div>
      <br />
      <div id="dev-team-wrapper">
        <div class="container">
          <div class="row ">
            <div class="col-3 col-6-small ">
              <section class="dev-team box feature profile">
                <p class="teamMemberName">Jason Boo</p>
                <img class="author" src="../assets/jason-photo.jpeg" alt="" />
                <AuthorButtons
                  github="https://github.com/jasonboo123"
                  linkedin="https://www.linkedin.com/in/jason-boo/"
                ></AuthorButtons>
                <!-- <div class="userlinks">
                <a href="https://www.linkedin.com/in/jason-boo/">LinkedIn</a>
                <a href="https://github.com/jasonboo123">GitHub</a>
              </div> -->
              </section>
            </div>
            <div class="col-3 col-6-small ">
              <section class="dev-team box feature profile">
                <p class="teamMemberName">Sean Flynn</p>
                <img class="author" src="../assets/sean-photo.jpeg" alt="" />
                <AuthorButtons
                  github="http://github.com/seanflynn5"
                  linkedin="https://www.linkedin.com/in/sean-g-flynn/"
                ></AuthorButtons>
                <!-- <div class="userlinks">
                <a href="https://www.linkedin.com/in/sean-g-flynn/">LinkedIn</a>
                <a href="http://github.com/seanflynn5">GitHub</a>
              </div> -->
              </section>
            </div>

            <div class="col-3 col-6-small ">
              <section class="dev-team box feature profile">
                <p class="teamMemberName">Robert Drake</p>
                <img class="author" src="../assets/robert-photo.jpeg" alt="" />
                <AuthorButtons
                  github="https://github.com/rmdrake8"
                  linkedin="https://www.linkedin.com/in/rmdrake8/"
                ></AuthorButtons>
                <!-- <div class="userlinks">
                <a href="https://www.linkedin.com/in/rmdrake8/">LinkedIn</a>
                <a href="https://github.com/rmdrake8">GitHub</a>
              </div> -->
              </section>
            </div>
            <div class="col-3 col-6-small ">
              <section class="dev-team box feature profile">
                <p class="teamMemberName">Zach Pestaina</p>
                <img class="author" src="../assets/zach-photo.jpeg" alt="" />
                <AuthorButtons
                  github="https://github.com/zachpestaina"
                  linkedin="https://www.linkedin.com/in/zachpestaina/"
                ></AuthorButtons>
                <!-- <div class="userlinks">
                <a href="https://www.linkedin.com/in/zachpestaina/">LinkedIn</a>
                <a href="https://github.com/zachpestaina">GitHub</a>
              </div> -->
              </section>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="border-nostyle">
        Please vist PreVue's
        <a href="https://github.com/open-source-labs/PreVue">GitHub</a> if
        you're interested to learn how you can contribute!
      </div>

      <br />
      <div class="border">
        <div id="bottom-elements">
          <div id="copyright">
            <ul class="menu">
              <li>&copy; Prevue 2023. All rights reserved</li>
            </ul>
          </div>
          <!-- <v-btn width="200px" color="white" class="mt-4" @click="oauth">
            Sign in with GitHub
          </v-btn> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorButtons from '../components/AuthorButtons.vue';
export default {
  name: 'Splash',
  components: {
    AuthorButtons
  },

  beforeCreate() {
    fetch('/users/validateSession', {
      credentials: 'include'
      // headers: {
      //   'Access-Control-Allow-Origin': ['localhost:4173']
      // }
    }).then(res => {
      if (res.status === 200) {
        this.toHome();
      }
    });
  },
  methods: {
    oauth() {
      // make request to endpoint, to be redirected in server
      fetch('/users/oauth', {
        method: 'GET',
        redirect: 'follow'

        // headers: { 'Access-Control-Allow-Origin': ['localhost:4173'] }
      })
        .then(res => {
          return res.json();
        })
        .then(data => window.location.replace(data));
    },

    toHome() {
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
@import url('../assets/main.css');
div.linkme:hover {
  color: black;
  cursor: pointer;
}

div.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section.box,
li {
  list-style: none;
}

a#striStyle {
  text-decoration: none;
  color: inherit;
}

a#striStyle:hover {
  color: black;
}

.menu {
  list-style: none;
}

.userlinks {
  display: flex;
}

.userlinks > a {
  margin-left: 1em;
  text-decoration: none;
}
.userlinks > a:visited {
  color: inherit;
}

.border-nostyle {
  font-size: 1.2em;
  text-align: center;
  padding: 1em;
  color: black;

  width: 100vw;
}

.nav > div {
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 1.15em;
  color: rgb(103, 103, 103);
}

#prevue:hover {
  cursor: default;
}

#linkout {
  display: flex;
  align-items: center;
}

#linkout > div {
  margin-left: 1em;
}

div.linkme {
  margin-left: 0;
}

.nav > div > a {
  color: inherit;
}

.nav > div > a:visited {
  color: inherit;
}
.card {
  margin-bottom: 2em;
}

.bring-to-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

video {
  border-radius: 5px;
}

#stripStyle {
  text-decoration: none;
}

video {
  width: 100%;
  height: 100%;
}

#splash {
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rowCard {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
}

#prevue {
  font-size: xx-large;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  color: #39b982;
  /* background-color: #39b982; */
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 0.5em;
}

.border {
  font-size: 1.2em;
  text-align: center;
  padding: 1em;
  color: white;
  background-color: #36b47d;
  width: 100vw;
}

#top-elements {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#authors {
  display: flex;
}

.author {
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
  align-items: center;
  margin-bottom: 2em;
}

/* .author img {
  width: 10em;
  border-radius: 20%;
  margin-bottom: 2em;
} */

.links {
  display: flex;
}

.teamMemberName {
  padding: 10px 0;
  font-weight: 850;
  font-family: 'Nunito', sans-serif;
  font-size: 1.25em;
}

.links h4 {
  margin: 0 0px 0 5px;
}

#list {
  margin: 0 10em 0em 10em;
}

#prevue-link {
  margin-top: 12px;
  margin-right: 20px;
}

#prevue-link:hover {
  color: green;
  cursor: pointer;
}

#bottom-elements {
  display: flex;
  margin-bottom: 1em;
  justify-content: center;
  align-items: center;
}

.nav {
  margin-top: 2em;
}

section.profile {
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
}

section.profile:hover {
  transform: scale(1.1);
}

/* .profile {
  transition: all 0.3s;
}

.profile:hover {
  transform: translateY(25px);
} */
</style>
