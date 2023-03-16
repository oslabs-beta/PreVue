<template>
  <div class="scroll">
    <div id="splash">
      <div class="nav">
        <div @click="toHome">Try PreVue</div>
        <div @click="oauth">
          <a id="stripStyle" href="https://github.com/open-source-labs/PreVue"
            >Visit our GitHub repo
          </a>
        </div>
      </div>

      <div id="header-wrapper">
        <header id="header" class="container">
          <div id="logo">
            <h1>PreVue</h1>
          </div>
        </header>
      </div>
      <div id="banner-wrapper">
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

      <div
        id="features-wrapper"
        style="background-color: #fdfdfdcb; width: 100%; margin-top: 2em;"
      >
        <div class="container">
          <div class="row card" style="justify-content: center;">
            <div>
              <section class="box feature">
                <div class="inner">
                  <header>
                    <h2>
                      PreVue allows users to conceptualize and visualize
                      component architecture by allowing them to:
                    </h2>
                  </header>
                  <ul>
                    <li>
                      Create components and preview their associated code
                    </li>
                    <li>Set up different routes and views</li>
                    <li>
                      Establish parent-child component relationships
                    </li>
                    <li>
                      View application hierarchy in tree format
                    </li>
                    <li>
                      Export the component architecture as a Vue application
                      created with default Vite settings
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div class="border">
        <p>
          <strong>
            Use PreVue to create projects in single sessions or sign in with
            GitHub to save projects and update them anytime</strong
          >
        </p>
      </div>
      <br />
      <h2>How to use:</h2>
      <div id="features-wrapper">
        <div class="container">
          <div class="row card">
            <div class="col-6 col-12-medium">
              <!-- Box -->
              <section class="box feature">
                <div class="inner">
                  <header>
                    <h2>Adding Components</h2>
                  </header>
                  <ul>
                    <li>
                      Create components by entering a name and clicking the HTML
                      elements you need
                    </li>
                    <li>Drag the elements to change their order</li>
                    <li>
                      Once you're satisfied, click the button to ‘add a
                      component’ and it will show up in the working area
                    </li>
                    <li>
                      Resize and move components to fit the design you have in
                      mind
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div class="col-6 col-12-medium">
              <!-- Box -->
              <section class="box feature">
                <div class="inner">
                  <header>
                    <h2>Editing Components</h2>
                  </header>
                  <ul>
                    <li>Double click elements to bring up the modal view</li>
                    <li>
                      Add additional elements to a component with a live preview
                      of the component code
                    </li>
                    <li>
                      Drag elements on the right side bar to nest elements
                    </li>
                    <li>
                      Establish parent-child component relationships via the
                      dropdown menu when creating or editing components
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div class="row card">
            <div class="col-6 col-12-medium">
              <section class="box feature">
                <div class="inner">
                  <header>
                    <h2>Adding Components</h2>
                  </header>
                  <ul>
                    <li>
                      Create components by entering a name and clicking the HTML
                      elements you need
                    </li>
                    <li>Drag the elements to change their order</li>
                    <li>
                      Once you're satisfied, click the button to ‘add a
                      component’ and it will show up in the working area
                    </li>
                    <li>
                      Resize and move components to fit the design you have in
                      mind
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div class="col-6 col-12-medium">
              <!-- Box -->
              <section class="box feature">
                <div class="inner">
                  <header>
                    <h2>Adding Routes</h2>
                  </header>
                  <ul>
                    <li>
                      Create different routes that represent different Views for
                      your app
                    </li>
                    <li>
                      Any components created on a given route will be
                      automatically saved to that route
                    </li>
                    <li>
                      See a visual representation of your application’s
                      hierarchy by clicking the ‘Tree’ icon in the navigation
                      bar
                    </li>
                  </ul>
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
          <div class="row">
            <div class="col-3 col-6-small">
              <section class="dev-team box feature">
                <h5>Jason Boo</h5>
                <img class="author" src="../assets/jason-photo.jpeg" alt="" />
                <div class="userlinks">
                  <a href="https://www.linkedin.com/in/jason-boo/">LinkedIn</a>
                  <a href="https://github.com/jasonboo123">GitHub</a>
                </div>
              </section>
            </div>
            <div class="col-3 col-6-small">
              <section class="dev-team box feature">
                <h5>Sean Flynn</h5>
                <img class="author" src="../assets/sean-photo.jpeg" alt="" />
                <div class="userlinks">
                  <a href="https://www.linkedin.com/in/sean-g-flynn/"
                    >LinkedIn</a
                  >
                  <a href="http://github.com/seanflynn5">GitHub</a>
                </div>
              </section>
            </div>
            <div class="col-3 col-6-small">
              <section class="dev-team box feature">
                <h5>Robert Drake</h5>
                <img class="author" src="../assets/robert-photo.jpeg" alt="" />
                <div class="userlinks">
                  <a href="https://www.linkedin.com/in/rmdrake8/">LinkedIn</a>
                  <a href="https://github.com/rmdrake8">GitHub</a>
                </div>
              </section>
            </div>
            <div class="col-3 col-6-small">
              <section class="dev-team box feature">
                <h5>Zach Pestaina</h5>
                <img class="author" src="../assets/zach-photo.jpeg" alt="" />
                <div class="userlinks">
                  <a href="https://www.linkedin.com/in/zachpestaina/"
                    >LinkedIn</a
                  >
                  <a href="https://github.com/zachpestaina">GitHub</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <br />
      <h2>
        Please vist PreVue's
        <a href="https://github.com/open-source-labs/PreVue">GitHub</a> if
        you're interested to learn how you can contribute!
      </h2>
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
export default {
  name: 'Splash',

  // beforeCreate() {
  //   fetch('/users/validateSession', {
  //     credentials: 'include',
  //     // headers: {
  //     //   'Access-Control-Allow-Origin': ['localhost:4173']
  //     // }
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       this.toHome();
  //     }
  //   });
  // },
  methods: {
    // oauth() {
    //   // make request to endpoint, to be redirected in server
    //   fetch('/users/oauth', {
    //     method: 'GET',
    //     redirect: 'follow'

    //     // headers: { 'Access-Control-Allow-Origin': ['localhost:4173'] }
    //   })
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(data => window.location.replace(data));
    // },

    toHome() {
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
@import url('../assets/main.css');
/* html {
  height: 140vh;
  overflow-y: auto;
} */

.nav {
  display: flex;
  margin-top: 2em;
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

.nav > div {
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 1.15em;
  color: rgb(103, 103, 103);
}
.nav > div:hover {
  cursor: pointer;
  color: black;
}

#logo:hover {
  cursor: default;
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

.feature {
  background: transparent;
  box-shadow: none;
}

.bring-to-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#stripStyle {
  text-decoration: none;
}

video {
  width: 100%;
  height: 100%;
}

/* #video-container {
  display: flex;
  align-items: center;
  justify-content: center;
} */
#splash {
  background-image: url('../assets/background.jpg');
  background-size: contain;
  background-repeat: repeat;
  background-attachment: fixed;
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#prevue {
  font-size: xx-large;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  color: #39b982;
  text-decoration: none;
}

.border {
  text-align: center;
  padding: 1em;
  color: white;
  background-color: #39b982;
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
}

.author img {
  width: 10em;
  border-radius: 20%;
}

.links {
  display: flex;
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
</style>
