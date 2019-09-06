<template>
    <section class="full-height">
        <div class="background">
            <img :src="'./images/trees.jpg'" alt="">
        </div>
        <div class="phone-preview-sizer" style="left: 25%;">
            <div class="phone-preview" style="background-image: url(./images/nexus5x.png)"></div>
            <div class="circle__container">
                <div class="circle">
                    <div class="circle_item" v-if="prizes" v-for="(prize,index) in prizes"
                         :style="'--value:'+circle._value +';--offset:'+ (circle._value * index) +';--rotate-label:'+circle._rotateLabel">
                        <input type="checkbox" :value="prize" name="present">
                        <label :for="prize" v-text="prize"></label>
                    </div>
                </div>
                <div class="circle__arrow"></div>
            </div>
        </div>
        <div class="horizontal-half-wrapper right">
            <div class="header-background white"></div>
            <div class="header-wrapper valign-wrapper">
                <div class="offset-m2 ">
                    <h1>Startup!</h1>
                    <span class="small">Show off your business in a whole new way.</span>
                    <button class="read-more" v-on:click="play"><i class="material-icons dp48">details</i></button>
                </div>
            </div>
        </div>
        <div class="horizontal-half-wrapper">

        </div>

    </section>
</template>

<script>
    export default {
        name: 'Index',
        data: () => ({
            message: 'Колесо удачи',
            prizes: [],
            circle: {
                _count: 0,
                _value: 0,
                _deg: 0,
                _rotateLabel: 0,
                degree: 0
            }
        }),
        mounted() {
            let full = document.querySelector('.full-height');
            full.style.cssText = '--full_width:' + `${window.innerWidth}px` + ';--full_height:' + `${window.innerHeight}px`;
            this.getPrizes();
        },
        methods: {
            getPrizes() {
                this.prizes = ['foo1', 'bar1', 'foo2', 'bar2', 'foo3', 'bar3', 'foo4', 'bar4'];
                this.circle._count = this.prizes.length;
                this.circle._deg = 360 / this.circle._count;
                this.circle._value = 100 / this.circle._count;
                this.circle._rotateLabel = this.circle._deg / 2;
            },
            play() {
                let index = this.randomInteger(0, this.prizes.length - 1);
                let circle = document.querySelector('.circle');
                let g = (this.circle._deg * index) + 90;
                console.log(g);
                console.log(g + (360 * 3) + this.circle._rotateLabel);

                if (this.circle.degree % 1 === 0) {
                    this.circle.degree = this.circle.degree + (360 * 3) + g + this.circle._rotateLabel;
                } else {
                    this.circle.degree = this.circle.degree + (360 * 3) + g;
                }
                circle.style.transform = 'rotate(' + this.circle.degree + 'deg)';
                console.log(this.prizes[index]);

            },
            randomInteger(min, max) {
                var rand = min + Math.random() * (max - min);
                rand = Math.round(rand);
                return rand;
            }
        }
    };
</script>

<style scoped>
    #my-canvas {
        position: absolute;
        left: 0;
        width: 800px;
        height: auto;
    }
</style>
