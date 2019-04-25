
let mock = [{
  flag:true,
  content:'1',
  children:[{
    flag:true,
    content:'1-1',
    children:[{
      flag:false,
      content:'1-1-1',
    }]
  }]
},{
  flag:true,
  content:'2',
  children:[{
    flag:false,
    content:'2-1'
  }]
},{
  flag:false,
  content:'meile'
},{
  flag:true,
  content:'3',
  children:[{
    flag:false,
    content:'3-1'
  }]
},{
  flag:true,
  content:'4',
  children:[
    {
      flag:true,
      content:'4-1',
      children:[{
        flag:true,
        content:'4-1-1',
        children:[{
          flag:false,
          content:'4-1-1-1',
        }]
      }]
    },
    {
      flag:true,
      content:'5',
      children:[{
        flag:true,
        content:'5-1',
        children:[{
          flag:true,
          content:'5-1-1',
          children:[{
            flag:true,
            content:'5-1-1-1',
            children:[{
              flag:false,
              content:'5-1-1-1-1',
            }]
          }]
        }]
      }]
    }
  ]
},{
  flag:false,
  content:'meile'
}]

const renderToStream = function(h,vnode){
  console.log(vnode)
  return h(
    'div',
    vnode.map(item => {
      return item.flag
              ?h(
                'div',
                {
                  style:{
                    marginLeft:'100px'
                  }
                },
                [item.content,renderToStream(h,item.children)]
              )
              :h(
                'div',
                [item.content]
              )
    })
  )
}

const renderTree = {
  install:function (Vue) {
    Vue.component('renderTree', {
      render: function(h) {
          return renderToStream(h,mock)
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      },
      methods: {
        clickHandler: function() {
          console.log(this.$slots)
        }
      }
    })
  }
}

export default renderTree