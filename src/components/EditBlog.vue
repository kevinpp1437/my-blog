<template>
  <div id="addblog">
    <h3 v-if="!submitted" class="add">编辑博客</h3>
    <form v-if="!submitted">
      <div class="item">
        <label for>主题:</label>
        <input type="text" v-model="blog.title" required />
      </div>
      <div class="content">
        <label for>内容:</label>
        <textarea cols="30" rows="10" v-model="blog.content"></textarea>
      </div>
      <div class="checkboxes">
        <span>分类:</span>
        <div>
          <label for="v">Vue.js</label>
          <input type="checkbox" value="Vue.js" id="v" v-model="blog.cates" />
          <label for="r">React.js</label>
          <input type="checkbox" value="React.js" id="r" v-model="blog.cates" />
          <label for="n">Node.js</label>
          <input type="checkbox" value="Node.js" id="n" v-model="blog.cates" />
          <label for="a">Angular.js</label>
          <input type="checkbox" value="Angular.js" id="a" v-model="blog.cates" />
        </div>
      </div>
      <div class="author">
        <p>作者:</p>
        <select v-model="blog.author">
          <option v-for="(author, index) in authors" :key="index">{{author}}</option>
        </select>
      </div>
      <div>
        <button class="btn" v-on:click.prevent="deliver">确认</button>
      </div>
    </form>
    <br />
    <br />
    <hr v-if="!submitted" />
    <div v-if="submitted">
      <h3 class="after">你的博客已修改成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:{{blog.content}}</p>
    </div>
    <span>分类:</span>
    <span v-for="(item,index) in blog.cates" :key="index">{{item}}、</span>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data: function() {
    return {
      id: this.$route.params.id,
      blog: {
        msg: "kevin1437",
        title: "",
        content: "",
        cates: [],
        author: ""
      },
      authors: ["Kevin", "Lynne", "Henry"],
      submitted: false
    };
  },
  methods: {
    deliver: function() {
      this.$axios({
        method: "post",
        url: "http://jsonplaceholder.typicode.com/posts",
        data: {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }
      })
        .then(res => {
          console.log(res.data);
          this.submitted = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // ending:function(){
    //     this.$router.push('/')
    // }
  },
  created() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(res => {
        console.log(res.data);
        this.blog.title = res.data.title;
        this.blog.content = res.data.body;
        this.blog.author = this.authors[res.data.userId];
      });
  }
};
</script>

<style scoped>
#addblog {
  /* width: 1920px; */
  /* border: 1px solid black; */
  /* width: 100%; */
  text-align: center;
  /* margin-top: 40px; */
  color: black;
  font-size: 18px;
  font-weight: 800;
  /* display: inline-block; */
  display: block;
  /* position: relative;
  top: 20px; */
  min-height: 900px;
}
h3.add {
  position: relative;
  left: -70px;
  padding-top: 10px;
  color: black;
  font-weight: 900;
}
h3.after {
  color: blue;
}
div.item > input {
  border: 1px solid black;
  padding: 4px;
}
div.content {
  position: relative;
  box-sizing: border-box;
}
div.content > label {
  display: inline-block;
  text-align: top;
  position: relative;
  top: -192px;
  left: 30px;
}
div.content > textarea {
  display: inline-block;
  position: relative;
  left: 30px;
  padding: 4px;
  line-height: 20px;
}
div.checkboxes {
  position: relative;
  left: 133px;
  margin-top: 20px;
}
div.checkboxes > div {
  display: inline-block;
}
div.author > p {
  margin-top: 30px;
  position: relative;
  left: -88px;
}
div.author > select {
  position: relative;
  top: -40px;
  cursor: pointer;
  display: inline-block;
  width: 100px;
  border-radius: 4px;
  padding: 2px;
}
.btn {
  position: relative;
  left: -68px;
  margin-top: 10px;
  background-color: forestgreen;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
}
</style>