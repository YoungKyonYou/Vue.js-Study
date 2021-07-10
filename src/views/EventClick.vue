<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                counter:0
            };
        },
        methods:{
            increaseCounter(){
                this.counter=this.counter+1;
            }
        }
    }
</script>


