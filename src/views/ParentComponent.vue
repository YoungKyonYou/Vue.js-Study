<template>
    <child-component @send-message="sendMessage" ref="child_component"/>
</template>
<script>
import ChildComponent from '../components/ChildComponent.vue'
export default {
    components: {ChildComponent}, 
    mounted(){
        this.$refs.child_component.$refs.btn.click();
    }
}
</script>

템플렛에 작성한 html 코드가 랜더링 된 후 실행된다.