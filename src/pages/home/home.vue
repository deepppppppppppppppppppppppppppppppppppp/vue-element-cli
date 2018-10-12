<template>
    <div class="home">
        <el-container style="height:100%;margin-top:-190px">
            <el-aside width="200px" class="aside">
                <div :class="['logo',{collapse:isCollapse}]">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <left-menu :isCollapse="isCollapse"></left-menu>
            </el-aside>
            <el-container>
                <el-main id="container">
                    <common-header></common-header>
                    <!-- 一部分页面需要被缓存 -->
                    <keep-alive>
                        <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta || !$route.meta.keepAlive"></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import LeftMenu from "@/pages/home/components/LeftMenu";
    import CommonHeader from "@/pages/home/components/header";
    export default {
      name: "App",
      data() {
        return {
          tabIndex: "1",
          isCollapse: false
        };
      },
      components: {
        LeftMenu,
        CommonHeader
      },
      methods: {}
    };
</script>

<style lang="less">
    .home {
      height: 800px;

      .logo {
        width: 159px;
        height: 100px;
        background: #273a4a;
        display: table-cell;
        text-align: center;
        vertical-align: middle;

        img {
          width: 60px;
        }
      }

      .collapse {
        width: 99px;

        img {
          width: 40px;
        }
      }

      .aside {
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: rgb(48, 57, 62);
      }

      .common_header {
        padding: 0;
      }

      #container {
        min-width: 1250px;
      }
    }
</style>