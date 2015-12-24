<template>
    <main data-size="300">
        <div class="clock-hour"></div>
        <div class="clock-minut"></div>
    </main>
</template>

<script>
    export default {
        props: {
            time: {
                type: String,
                twoWay: true,
                validator(value) {
                    return new RegExp(/([01]\d)|(2[0-3])\:[0-5]\d/).test(value)
                }
            }
        },
        data() {
            return {
                hour: null,
                minute: null
            }
        },
        watch: {
            minute(v1, v2) {
                if (v2 === null && v1 !== null) {
                    this.time = `${this.hour}:${this.minute}`
                    this.hour = this.minute = null
                }
            }
        },
        methods: {
            show(){
                this.hour = new Date().getHours()
            },
            back(){
                this.minute = null
            }
        }
    }
</script>

<style lang="less">
main{
    background-color: red;
    position: relative;
    width: attr(data-size px,auto);
}
</style>
