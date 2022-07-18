<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer_nav_container {
  height: 130px;
}
.cr {
  margin-right: 48px;
}
.footer_nav li {
  display: inline-block;
  margin-right: 45px;
}
.footer_nav li:last-child {
  margin-right: 0px;
}
.footer_nav li a,
.cr {
  font-size: 14px;
  color: #51545f;
  line-height: 30px;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}
.footer_nav li a:hover,
.cr a,
.cr i {
  color: #fe4c50;
}
.footer_social {
  height: 130px;
}
.footer_social ul li {
  display: inline-block;
  margin-right: 10px;
}
.footer_social ul li:last-child {
  margin-right: 0px;
}
.footer_social ul li a {
  color: #51545f;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  padding: 10px;
}
.footer_social ul li:last-child a {
  padding-right: 0px;
}
.footer_social ul li a:hover {
  color: #fe4c50;
}
</style>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center"
          >
            <ul class="footer_nav">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center"
          >
            <ul>
              <li>
                <a href="#"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-pinterest" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer_nav_container">
            <div class="cr">
              ©2018 All Rights Reserverd. This template is made with
              <i class="fa fa-heart-o" aria-hidden="true"></i> by
              <a href="#">Colorlib</a> &amp; distributed by
              <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
