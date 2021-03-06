<template>
    <div class="clock">
        <span @click="show($event)">
            <slot>
                <input class="clock-input" type="text" v-model="time">
            </slot>
        </span>
        <div class="clock-picker" :style="pickerOffset" v-show="showHourPanel != null" v-blur:close>
            <div class="clock-display">
                <b>{{pad(hour)}}:{{pad(minute)}}</b>
            </div>
            <div class="clock-panel clock-hour" v-show="showHourPanel" transition="fade">
                <div class="clock-tick" v-for="p in AMPoints" :style="p">
                    <div @click="select($index,'hour')" :class="{active: $index == hour}">{{$index}}</div>
                </div>
                <div class="clock-tick" v-for="p in PMPoints" :style="p">
                    <div @click="select(12 + $index,'hour')" :class="{active: 12 + $index == hour}">{{$index + 12}}</div>
                </div>
            </div>
            <div class="clock-panel clock-minute" v-show="showHourPanel == false" transition="fade">
                <button class="clock-center" @click="back">&lt;</button>
                <div class="clock-tick" v-for="p in minPoints" :style="p">
                    <div @click="select(5 * $index,'minute')" :class="{active: 5 * $index == minute}">{{$index * 5}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @param R {Number} radius of panel
     * @param gap {Number} the gap between notation and border
     * @param tick {Number} amount of notations
     * @return {Array}
     */
    function generatePostion(R, gap = 15, tick = 12) {
        const PI = Math.PI,
            ZERO_CLOCK = 3 / 2 * PI, // (North direction on screen)
            STEP = 2 * PI / tick
        return new Array(tick).toString().split(',').map((point, i) => {
            let theta = ZERO_CLOCK + STEP * i
            return {
                left: (R - gap) * Math.cos(theta) + R + 'px',
                top: (R - gap) * Math.sin(theta) + R + 'px'
            }
        })
    }
    module.exports = {
        props: {
            time: {
                type: String,
                twoWay: true,
                validator(value) {
                    return new RegExp(/^([01]\d)|(2[0-3])\:[0-5]\d$/).test(value)
                },
                default: '00:00'
            }
        },
        data() {
            let hour = +this.time.slice(0, 2),
                minute = +this.time.slice(3),
                restToFive = minute % 5
            return {
                hour,
                minute: minute + (restToFive ? 5 - restToFive : 0),
                    AMPoints: generatePostion(100),
                    PMPoints: generatePostion(100, 45),
                    minPoints: generatePostion(100),

                    showHourPanel: null,
                    pickerOffset: {}
            }
        },
        methods: {
            show(e) {
                    this.showHourPanel = true
                    this.pickerOffset = {
                        top: e.target.offsetTop + 'px',
                        left: e.target.offsetLeft + e.target.offsetWidth + 'px'
                    }
                },
                close() {
                    this.showHourPanel = null
                },
                back() {
                    this.showHourPanel = true
                },
                select(value, unit) {
                    this[unit] = value
                    this.time = `${this.pad(this.hour)}:${this.pad(this.minute)}`
                    if (unit == 'hour') {
                        this.showHourPanel = false
                    }
                },
                pad(number) {
                    return number < 10 ? '0' + number : number
                }
        },
        directives: {
            blur: {
                bind() {
                        let self = this.vm,
                            methodName = this.arg
                        this.handler = function(e) {
                            if (!self.$el.contains(e.target)) {
                                self[methodName]()
                            }
                        }
                        window.addEventListener('click', this.handler)
                    },
                    unbind() {
                        window.removeEventListener('click', this.handler)
                    }
            }
        }
    }
</script>

<style lang="less" scoped>
    @border-color: #ddd;
    .clock {
        position: relative;
    }

    .clock-input {
        width: 50px;
        height: 30px;
        box-sizing: border-box;
        text-align: center;
        display: inline-block;
    }

    .clock-picker {
        @R: 100px;
        @display-height: 30px;
        @clock-size: 2 * @R;
        width: @clock-size;
        height: @clock-size + @display-height;
        position: absolute;
        background-color: #fff;
        border: 1px solid @border-color;
        border-radius: 4px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        .clock-display {
            text-align: center;
            font-size: @display-height;
            line-height: @display-height;
            border-bottom: 1px solid @border-color;
        }
        .clock-panel {
            @size: @clock-size;
            width: @size;
            height: @size;
            border-radius: 100%;
            background: #B6B6B6;
            position: absolute;
            top: @display-height;
            left: 0;
            .clock-tick {
                @size: 30px;
                width: @size;
                height: @size;
                border-radius: 100%;
                line-height: @size;
                text-align: center;
                position: absolute;
                transform: translate(-50%, -50%);
                &:hover {
                    background: #ffee53;
                }
                .active {
                    border-radius: 100%;
                    background: #fff;
                }
            }
            .clock-center {
                position: absolute;
                top: @R;
                left: @R;
                transform: translate(-50%, -50%);
            }
        }
    }

    .fade-transition {
        transition: opacity .5s cubic-bezier(0.47, 0, 0.745, 0.715);
        opacity: 1;
    }

    .fade-enter,
    .fade-leave {
        opacity: 0;
    }
</style>
