<template>
    <div id="showBlog">
        <h2>博客总览</h2>
        <div class="singBlog" v-for="(blog,index) in blogs" :key="index">
            <h2>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShowBlog',
    data:function(){
        return{
            blogs:[]
        }
    },
    created(){
        this.$axios.get('./../static/posts.json',
        {
        }).then(res=>{
            console.log(res);
            this.blogs = res.data.slice(0,10);
            console.log(this.blogs)
            })

    }
}
</script>

<style scoped>
    #showBlog{
        width:1920px;
        margin: 0 auto;
    }
    #showBlog >h2{
        color:cadetblue;
        position: relative;
        margin-top: 30px;
        margin-left: 20px;
    }
    .singBlog{
        color: black;
        position: relative;
        text-indent: 2em;
        background-color: #eee;
        padding: 10px;
        margin: 20px;
    }
    .singBlog >article{
        position: relative;
        padding-bottom: 20px;
        width: 800px;
    }
</style>