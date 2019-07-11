<template>
    <div v-theme="'narrow'" id="showBlog">
        <h2>博客总览</h2>
        <input class='searchBar' type="text" placeholder="搜索"  v-focus v-model='search' >
        <div class="singBlog" v-for="(blog,index) in filterBlogs" :key="index" v-cloak>
            <router-link v-bind:to="'/blog/' + blog.id">
            <h2 class='title' v-showtitle v-text="$options.filters.alluppercase(blog.title)">
                <!-- {{blog.title | alluppercase}} -->
            </h2>
            </router-link>
            <article v-showcolor="'black'" >
                {{blog.body | uppercase}}
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShowBlog',
    data:function(){
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        this.$axios.get('./../static/posts.json').then(res=>{
            console.log(res);
            this.blogs = res.data.slice(0,20);
            // console.log(this.blogs)
            })
    },
    //局部过滤器
    // filters:{
    //     alluppercase(value){
    //         return value.toUpperCase()
    //     },
    // },
    //局部自定义指令
    directives:{
        focus:{
            inserted:function(el){
                el.focus()
            }
        }
    },
    //计算属性实现搜索功能
    computed:{
        filterBlogs:function(){
            return this.blogs.filter((blog)=>{
               return blog.title.includes(this.search.toLowerCase()) //实现大写也能检索到
            })
        }
    }

    }

</script>

<style scoped type='text/css'>
    [v-cloak]{
        display: none;
    }
    #showBlog{
        width:1920px;
        margin: 0 auto;
        /* overflow: auto; */
    }
    #showBlog >h2{
        color:black;
        position: relative;
        margin-top: 30px;
        margin-left: 20px;
        font-weight: 900;
    }
    .singBlog{
        color: black;
        position: relative;
        /* text-indent: 2em; */
        background-color: #eee;
        padding: 10px;
        margin: 20px;
        margin-right: 0px;
        border:1px dotted #aaa;
    }
    .singBlog >article{
        position: relative;
        padding-bottom: 20px;
        width: 800px;
        margin-left: 20px;
        
    }
    h2.title{
        margin-left: 20px;
    } 
    input.searchBar{
        position: relative;
        margin-left: 20px;
        width: 300px;
        padding: 8px;
    }

    /* h2.title::first-letter{
        text-transform: uppercase;
    } */
    
    /* .singBlog article::first-letter{
        text-transform: capitalize;
        font-weight: 900;
    } */
    /* article::before{
        content: 'Content:';
        color:brown;
        font-weight: 900;
        font-size: 20px;
    } */
    a{
        text-decoration: none;
    }
    
</style>