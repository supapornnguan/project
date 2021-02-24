<template>
    <div>
        <Suspense>
            <template #default>
                <test1/>
            </template>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
        
    </div>
</template>
<script>
import test1 from "../views/test1"
export default {
 
    
}
</script>
<style scoped>
    
</style>