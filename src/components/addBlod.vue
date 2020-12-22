<template>
    <div id="addBlod">
        <h2>添加</h2>
        <form action="blods">
            <label>标题：</label>
            <input type="text" required v-model="blods.title">
            <label>描述：</label>
            <textarea v-model="blods.content"></textarea>
            <div class="checkboxs">
                <label>vue</label>
                <input type="checkbox" value="vue.js"  v-model="blods.categories">
                <label>react</label>
                <input type="checkbox" value="react.js" v-model="blods.categories">
                <label>node</label>
                <input type="checkbox" value="node.js" v-model="blods.categories">
                <label>angular4</label>
                <input type="checkbox" value="angular4.js" v-model="blods.categories">
            </div>
            <label>作者：</label>
            <select v-model="blods.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
        </form>
        <button @click="add">添加</button>
        <hr>
        <div id="preview">
            <h2>标题</h2>
            <p>{{blods.title}}</p>
            <h2>描述</h2>
            <p>{{blods.content}}</p>
            <h2>分类</h2>
            <ul>
                <li v-for="item in blods.categories" :key="item">{{item}}</li>
            </ul>
            <h2>author</h2>
            <p>{{blods.author}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'add',
    data(){
        return {
            blods:{
                title:'',
                content:'',
                categories:[],
                author:''
            },
            authors:['zhan','xiao','next']
        }
    },
    methods:{
        add(){
            console.log(this.blods)
            this.$http.post('https://vue-database-256b0-default-rtdb.firebaseio.com/posts.json',this.blods).then(res =>{
                console.log(res,',,,')
            })
        }
    }
}
</script>
<style scoped>
#addBlod *{
    box-sizing: border-box;
}

#addBlod{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label{
    display: block;
    margin: 20px 0 10px;
}

input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
}

textarea{
    height: 200px;
}

.checkboxs label{
    display: inline-block;
    margin-right: 10px;
}

button{
    width: 100px;
    display: block;
    margin: 20px 0;
    background: #ccc;
    color: #fff;
    border: 0;
    padding: 18px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}

#preview{
    height: 400px;
    border: 1px dashed #ccc;
    padding: 15px;
    margin: 15px auto;
}
</style>