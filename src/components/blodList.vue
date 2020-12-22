<template>
    <div class="blodList">
       <div class="box_blod">
        <input type="text" placeholder="请输入" v-model="value" />
        <div v-for="item in blod" :key="item.id" class="blod_item">
            <h3 v-directive>{{item.title}}</h3>
            <p>{{item.body}}</p>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'blod',
    data(){
        return {
            blod:[],
            value:''
        }
    },
    created(){
        this.getBlodMethod()
    },
    methods:{
        getBlodMethod(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
                this.blod = res.body.splice(0,15)
                console.log(this.blod,'....')
            })
        }
    },
    filters:{
        filter:function(value){
            console.log(value,'value')
        }
    }
}
</script>
<style  scoped>
.blodList{
    width: 100%;
    box-sizing: border-box;
}

.box_blod{
    max-width: 960px;
    margin: auto;
}

input[text]{
    width: 100%;
}

.blod_item{
    max-width: 960px;
    height: 200px;
    background: #ccc;
    margin: auto;
}
</style>