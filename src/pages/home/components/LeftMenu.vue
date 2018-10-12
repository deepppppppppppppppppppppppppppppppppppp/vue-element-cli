<template>
    <el-menu @click.native="curMenu($event)" default-active="/home" class="el-menu-vertical-demo" router :collapse="isCollapse" :collapse-transition="false" background-color="#30393E" active-text-color="#fff" text-color="#83878F">
        <el-submenu index="0" :style="{width:isCollapse?'56px':''}">
            <template slot="title">
                <img :src="cdn+'leftmenu/off-zujuan.png'" class="label_icon" alt="">
                <span>第一部分</span>
            </template>
            <el-menu-item index="/home/demmo">
                <img :src="cdn+'leftmenu/off-zyzujuan.png'" class="label_icon" alt="">
                <span slot="title">第一节</span>
            </el-menu-item>
        </el-submenu>

    </el-menu>
</template>
<script>
    export default {
      data() {
        return {
          cdn: "http://p.htwx.net/pandora/"
        };
      },
      props: ["isCollapse"],
      methods: {
        curMenu(event) {
          let target = event.target || window.event.target;
          let ele =
            target.closest(".el-submenu__title") || target.closest(".el-menu-item");
          if (ele) {
            let iconSrc = ele.childNodes[0].src;
            let oldOffon =
              iconSrc.substr(parseInt(iconSrc.lastIndexOf("/") + 1), 3) == "off"
                ? "off"
                : "on";
            let newOffon =
              iconSrc.substr(parseInt(iconSrc.lastIndexOf("/") + 1), 3) != "off"
                ? "off"
                : "on";
            let newSrc = iconSrc.replace(oldOffon, newOffon);

            if (oldOffon == "off") {
              document.querySelectorAll(".label_icon").forEach(Ele => {
                Ele.src = Ele.src.replace("on-", "off-");
              });

              ele.childNodes[0].src = newSrc;
            }
          }
        }
      }
    };
</script>
<style lang="less" scoped>
    .el-menu-vertical-demo {
      height: auto !important;
    }

    .el-menu {
      height: 100%;
    }

    .el-menu--collapse {
      width: 200px;
    }

    .label_icon {
      width: 20px;
      margin-right: 5px;
    }

    .el-submenu {
      overflow: hidden;
    }

    .el-menu-item {
      &.is-active {
        background-color: #273a4a !important;
      }
    }
</style>