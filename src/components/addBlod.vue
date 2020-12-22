<template>
    <div class="addBlod">
        <h2>添加</h2>
        <form action="blods">
            <label>标题：</label>
            <input type="text"  v-model="blods.title">
            <label>描述：</label>
            <textarea v-model="blods.content"></textarea>
            <label>类型：</label>
            <span v-for="item in list" :key="item">
                <input type="checkbox" v-model="blods.type">{{item}}
            </span>
            <label>作者：</label>
            <select v-model="blods.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
        </form>
        <div>
            <h2>title</h2>
            <p>{{blods.title}}</p>
            <h2>description</h2>
            <p>{{blods.content}}</p>
            <h2>type</h2>
            <p>{{blods.type}}</p>
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
                type:'',
                author:'zhan'
            },
            list:['vue.js','react.js','node.js','javaScript'],
            authors:['zhan','xiao','next']
        }
    },

}
</script>
<style scoped>
.addBlod{

}
</style>