<template>
    <ProvideInjectChild/>
</template>
<script>
    import ProvideInjectChild from './ProvideInjectChild';
export default {
    components: {ProvideInjectChild}, 
    data() {
        return {
            itemps:['A','B']
        };
    },
    provide(){
        return{
            itemLength: this.items.length
        };
    }
    
}
</script>