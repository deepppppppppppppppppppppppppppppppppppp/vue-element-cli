<template>
    <div class="header">
        <div class="header_top">

            <div class="user_banner">
                <img src="@/assets/logo.png" alt="" class="user_img">
                <span class="user_name">admin</span>
                <div class="quit">
                    <img src="@/assets/off.png" alt="">
                    <router-link to="/login" @click.native="quit">退出登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
      name: "commonHeader",
      computed: {},
      methods: {
        quit() {
          this.util.setCookie("userIsLogin", "");
        }
      },
      created() {}
    };
</script>

<style lang="less" scoped>
    .header {
      margin: -20px -20px 0 -20px;
      .header_top {
        height: 60px;
        position: relative;
        padding: 0 20px;
        background-color: #f3f3f4;
        .toggle {
          position: absolute;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -o-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 48px;
          height: 36px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          outline: none;
          background-color: #20a8d8;
          border: none;
          span {
            display: block;
            width: 16px;
            height: 1px;
            background-color: #fff;
            margin: 4px auto;
          }
        }
        .user_banner {
          float: right;
          margin-right: 28px;
          height: 60px;
          line-height: 60px;
          .user_img {
            position: relative;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 35px;
            height: 35px;
            -webkit-border-radius: 25px;
            -moz-border-radius: 25px;
            border-radius: 25px;
            overflow: hidden;
          }
          .user_name {
            color: #979797;
            font-size: 14px;
          }
          .quit {
            margin-top: -20px;
            height: 60px;
            display: inline-block;
            color: #979797;
            font-size: 14px;
            margin-left: 30px;
            cursor: pointer;
            img {
              width: 15px;
              position: relative;
              top: 2px;
            }
          }
        }
      }
      .switch_banner {
        padding: 0 20px;
        margin-bottom: 16px;
        background-color: #fff;
        height: 48px;
        line-height: 48px;
        .subject {
          font-size: 18px;
          color: #4a4a4a;
        }
        .switch_sub {
          font-size: 14px;
          color: #20a8d8;
          cursor: pointer;
          padding: 5px;
        }
        .breadcrumbs {
          float: right;
          height: 48px;
          line-height: 48px;
          color: #999;
          .crumbs {
            display: inline-block;
            .is_link {
              color: #303030;
              cursor: pointer;
              &:hover {
                color: #20a8d8;
              }
            }
          }
        }
      }
    }
</style>
