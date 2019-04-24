<template>
  <el-menu @click.native="curMenu($event)"
    default-active="/home"
    class="el-menu-vertical-demo"
    router
    :collapse="isCollapse"
    :collapse-transition="false"
    background-color="#30393E"
    active-text-color="#fff"
    text-color="#83878F">
    <template v-for="(item, index) in routersMap">
      <el-submenu :key="item.id"
        :index='String(index+1)'
        style="text-align:left"
        v-if="item.children.length!=0">
        <template slot="title">
          <img :src="cdn+'leftmenu/off-zujuan.png'"
            class="label_icon"
            alt="">
          <span>第一部分</span>
        </template>
        <el-menu-item :index="child.path"
          v-for="child in item.children"
          :key="child.id">
          <img :src="cdn+'leftmenu/off-zyzujuan.png'"
            class="label_icon"
            alt="">
          <span slot="title">{{child.name}}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
  let getChildrenByRoutes = (r_path, child) => {
    let r = child ? [].slice.call(child) : []

    if (r && JSON.stringify(r) !== '[]') {
      r.map(item => Object.assign(item, { path: r_path + '/' + item.path }))
    }
    return r
  }

  export default {
    data() {
      return {
        cdn: 'http://p.htwx.net/pandora/',
        routersMap: []
      }
    },
    props: ['isCollapse'],
    created() {
      const _rmap = this.$router.options.routes

      this.routersMap = _rmap.reduce((last, item) => {
        const { path, children } = item

        return [
          ...last,
          {
            ...item,
            children: getChildrenByRoutes(path, children)
          }
        ]
      }, [])

      console.log('routersMap:', this.routersMap)
    },
    methods: {
      curMenu(event) {
        let target = event.target || window.event.target
        let ele =
          target.closest('.el-submenu__title') || target.closest('.el-menu-item')
        if (ele) {
          let iconSrc = ele.childNodes[0].src
          let oldOffon =
            iconSrc.substr(parseInt(iconSrc.lastIndexOf('/') + 1), 3) == 'off'
              ? 'off'
              : 'on'
          let newOffon =
            iconSrc.substr(parseInt(iconSrc.lastIndexOf('/') + 1), 3) != 'off'
              ? 'off'
              : 'on'
          let newSrc = iconSrc.replace(oldOffon, newOffon)

          if (oldOffon == 'off') {
            document.querySelectorAll('.label_icon').forEach(Ele => {
              Ele.src = Ele.src.replace('on-', 'off-')
            })

            ele.childNodes[0].src = newSrc
          }
        }
      }
    }
  }
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