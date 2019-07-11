<template>
    <div id="single-blog">
        <h1>{{blog.title | alluppercase}}</h1>
        <article>{{blog.body | uppercase}}</article>
        <br>
        <!-- <span>Author:{{authors[blog.userId]}}</span> -->
        <span>Author:{{showAuthor}}</span>
        <br>
        <router-link :to="'/edit/'+blog.id"><button>编辑</button></router-link>
        <button class="delete" @click="deleteBlog">删除</button>
        
    </div>
</template>
<script>
export default {
    name:'SingleBlog',
    data:function(){
        return {
            id:this.$route.params.id,
            blog:{},
            authors: ["Kevin", "Lynne", "Henry"],
        }
    },
    created(){
        this.$axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.id)
        .then(res => {
            console.log(res)
            this.blog = res.data;
        })
    },
    // filters:{
    //     alluppercase2(value){
    //         return value.toUpperCase()
    //     }
    // },
    methods:{
        deleteBlog(){
            this.$axios.delete('https://jsonplaceholder.typicode.com/posts/'+ this.id)
            .then(res => {
                this.$router.push({path:'/'})
            }).catch(err => console.log(err))
        }
    },
    computed:{
        showAuthor(){
            return this.authors[this.blog.userId]
        }
    }
}
</script>
<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 40px;
        padding:20px;
        background:#eee;
        border: 1px dotted #aaa;
    }
    button{
        display: inline-block;
        margin-top: 20px;
        background: rgba(134, 115, 115, 0.6);
        font-size: 14px;
        margin-right: 5px;
        padding: 4px;
    }
    button.delete{
        display: inline-block;
        background: rgba(199, 29, 29, 0.6)
    }
</style>