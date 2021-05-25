<template>
    <div>
        person/department

        <BaseHoc :test="5">
            <h2>哈哈哈</h2>
        </BaseHoc>
    </div>
</template>

<script>
import Hoc from '@/components/BaseHoc'
import Base from '@/components/Base'
const BaseHoc = Hoc(Base)
export default {
    components: {
        BaseHoc
    }
}
</script>