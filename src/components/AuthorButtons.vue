<template>
  <div class="b-container">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />

    <ul>
      <li>
        <a :href="github"><i class="fab fa-github icon"></i></a>
      </li>
      <li>
        <a :href="linkedin"><i class="fab fa-linkedin-in icon"></i></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AuthorButtons',
  props: ['github', 'linkedin']
};
</script>
<style scoped>
ul {
  display: flex;
  justify-content: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

ul li {
  list-style: none;
}

ul li a {
  width: 50px;
  height: 50px;
  background-color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
}

ul li:nth-child(1) a:before {
  background: #37b47d;
}

ul li:nth-child(2) a:before {
  background: #3ab982;
}

ul li:nth-child(3) a:before {
  background: #0077b5;
}

ul li:nth-child(4) a:before {
  background: #dd4b39;
}
</style>
