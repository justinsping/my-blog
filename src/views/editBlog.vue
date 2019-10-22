<template>
  <div id="edit-blog">
    <h2>博客编辑</h2>
    <div class="inp">
      <label for="title">标题</label>
      <input v-model="blogFrom.title" type="text" id="title" placeholder="输入标题">
      <label for="tags">标签</label>
      <input v-model="blogFrom.tags" type="text" id="tags" placeholder="输入标签，多个请用逗号隔开">
    </div>
    <editor ref="editorEle"></editor>
    <button class="submit" @click="submitBlog">发布</button>
  </div>
</template>
<script>
import editor from '../components/Editor'
import api from '../api/index'
export default {
  components: {
    editor
  },
  data () {
    return {
      blogFrom: {
        title: null,
        tags: null,
        content: null
      }
    }
  },
  methods: {
    submitBlog () {
      if (!this.blogFrom.title) {
        this.$message({type: 'warning', message: '请输入标题'})
        return false
      }
      if (!this.blogFrom.tags) {
        this.$message({type: 'warning', message: '请输入至少一个标签'})
        return false
      }
      if (!this.$refs.editorEle.content) {
        this.$message({type: 'warning', message: '请输入博客内容'})
        return false
      }
      this.blogFrom.content = this.$refs.editorEle.content
      api.editBlog(this.blogFrom).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    // this.$nextTick(() => {
    //   console.log(this.$refs.editorEle)
    // })
  }
}
</script>
<style lang="scss">
#edit-blog {
  margin: 20px 0;
  background: #fff;
  box-shadow: 0 0 10px #666;
  padding: 10px;
  // max-height: 600px;
  h2 {
    margin-bottom: 10px;
  }
  .inp {
    margin-bottom: 10px;
    font-size: 14px;
    input {
      padding: 2px 3px;
      width: 200px;
      outline: none;
      border: 1px solid #666;
      border-radius: 4px;
      font-size: 12px;
      margin-right: 10px;
    }
  }
  .submit {
    margin-top: 20px;
    padding: 5px 10px;
    background: #fff;
    border: 1px solid rgb(77, 74, 74);
    cursor: pointer;
    border-radius: 4px;
  }
}
</style>
