<script setup>
import {ref} from "vue";

const level = ref(1)

const grayCat = ref(null)
const orangeCat = ref(null)

const emits = defineEmits(['hello'])

const test = () => {
    alert('hello')
    console.log('completed animation')
    grayCat.value.classList.add('completed');
    orangeCat.value.classList.add('completed');
}

const startIdleAnimation = () => {
    test()
    console.log('clicked')
    emits('hello', level.value)
}
</script>

<template>
    <div class="w-full bg-blue-200 max-h-[50vh] flex items-end relative">
        <div class="h-[5vh] bg-gray-300 w-full" @hello="test">

        </div>
        <svg class="absolute bottom-4 w-full" width="729" height="155" viewBox="0 0 729 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="cats">
                <g id="orange-cat" ref="orangeCat">
                    <ellipse id="Ellipse 3" cx="73" cy="145.5" rx="45" ry="5.5" fill="#6B7280"/>
                    <g id="cat">
                        <path id="body" d="M20.9783 99.3914C20.9783 79.2645 38.3655 63.543 58.3908 65.5631L106.159 70.3819C122.523 72.0326 134.978 85.8075 134.978 102.255V102.255C134.978 119.947 120.636 134.289 102.944 134.289H54.9783C36.2006 134.289 20.9783 119.067 20.9783 100.289V99.3914Z" fill="#FB923C"/>
                        <rect id="leg-back" x="37.9783" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 37.9783 122.125)" fill="#FB923C"/>
                        <rect id="leg-front" x="85.9783" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 85.9783 122.125)" fill="#FB923C"/>
                        <g id="eye">
                            <path id="Vector 1" d="M126.977 93.7891H99.9783C99.9783 93.7891 99.9783 105.275 113.653 105.774C127.328 106.274 126.977 93.7891 126.977 93.7891Z" fill="white"/>
                            <path id="Vector 2" d="M126.978 93.7891H109.978C109.978 93.7891 109.978 101.446 118.588 101.779C127.199 102.112 126.978 93.7891 126.978 93.7891Z" fill="black"/>
                        </g>
                        <g id="ear">
                            <path id="Vector 5" d="M96.2105 74.8465L90.8116 87.8675C90.1314 89.508 87.81 89.5143 87.1208 87.8776L82.0395 75.8094C81.5142 74.562 82.3538 73.164 83.7017 73.0415L94.182 72.0887C95.6802 71.9525 96.7867 73.4569 96.2105 74.8465Z" fill="#F97316"/>
                            <path id="Intersect" d="M95.9962 75.3635L90.982 87.4564L87.1206 78.415C86.5698 77.1251 87.4832 75.6836 88.8848 75.6309L95.9962 75.3635Z" fill="#FECDD3"/>
                        </g>
                        <path id="whiskars" d="M116.478 112.789L104.978 115.789M118.478 114.789L111.478 124.289" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="tail" d="M20.7595 36.7891C20.7595 44.789 19.9375 71.3275 29.6071 88.0308L22.4782 98.7891C22.4782 98.7891 17.4802 94.0694 14.8258 90.583C2.52408 74.4259 5.97822 52.3934 5.97824 39.3412C5.97826 26.2891 20.7595 28.7891 20.7595 36.7891Z" fill="#FB923C"/>
                        <path id="mouth" d="M134.978 105.789L133.978 102.789L131.978 107.189" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="nose" d="M131.978 101.122C131.978 101.859 132.575 102.456 133.312 102.456H134.645C135.381 102.456 135.978 101.859 135.978 101.122V101.122C135.978 100.386 135.381 99.789 134.645 99.789H133.312C132.575 99.789 131.978 100.386 131.978 101.122V101.122Z" fill="#FECDD3"/>
                    </g>
                </g>
                <g id="black-cat">
                    <ellipse id="Ellipse 2" cx="331" cy="147.5" rx="45" ry="5.5" fill="#6B7280"/>
                    <g id="cat_2">
                        <path id="body_2" d="M278.978 101.391C278.978 81.2645 296.365 65.543 316.391 67.5631L364.159 72.3819C380.523 74.0326 392.978 87.8075 392.978 104.255V104.255C392.978 121.947 378.636 136.289 360.944 136.289H312.978C294.201 136.289 278.978 121.067 278.978 102.289V101.391Z" fill="#111827"/>
                        <rect id="leg-back_2" x="295.978" y="124.125" width="20" height="23" rx="9" transform="rotate(-0.961192 295.978 124.125)" fill="#111827"/>
                        <rect id="leg-front_2" x="343.978" y="124.125" width="20" height="23" rx="9" transform="rotate(-0.961192 343.978 124.125)" fill="#111827"/>
                        <g id="eye_2">
                            <path id="Vector 1_2" d="M384.977 95.7891H357.978C357.978 95.7891 357.978 107.275 371.653 107.774C385.328 108.274 384.977 95.7891 384.977 95.7891Z" fill="white"/>
                            <path id="Vector 2_2" d="M384.978 95.7891H367.978C367.978 95.7891 367.978 103.446 376.588 103.779C385.199 104.112 384.978 95.7891 384.978 95.7891Z" fill="black"/>
                        </g>
                        <g id="ear_2">
                            <path id="Vector 5_2" d="M354.211 76.8465L348.812 89.8675C348.131 91.508 345.81 91.5143 345.121 89.8776L340.039 77.8094C339.514 76.562 340.354 75.164 341.702 75.0415L352.182 74.0887C353.68 73.9525 354.787 75.4569 354.211 76.8465Z" fill="#1F2937"/>
                            <path id="Intersect_2" d="M353.996 77.3635L348.982 89.4564L345.121 80.415C344.57 79.1251 345.483 77.6836 346.885 77.6309L353.996 77.3635Z" fill="#FECDD3"/>
                        </g>
                        <path id="whiskars_2" d="M374.478 114.789L362.978 117.789M376.478 116.789L369.478 126.289" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="tail_2" d="M278.76 38.7891C278.76 46.789 277.937 73.3275 287.607 90.0308L280.478 100.789C280.478 100.789 275.48 96.0694 272.826 92.583C260.524 76.4259 263.978 54.3934 263.978 41.3412C263.978 28.2891 278.76 30.7891 278.76 38.7891Z" fill="#111827"/>
                        <path id="mouth_2" d="M392.978 107.789L391.978 104.789L389.978 109.189" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="nose_2" d="M389.978 103.122C389.978 103.859 390.575 104.456 391.312 104.456H392.645C393.381 104.456 393.978 103.859 393.978 103.122V103.122C393.978 102.386 393.381 101.789 392.645 101.789H391.312C390.575 101.789 389.978 102.386 389.978 103.122V103.122Z" fill="#FECDD3"/>
                    </g>
                </g>
                <g id="gray-cat" ref="grayCat">
                    <ellipse id="Ellipse 1" cx="582" cy="145.5" rx="45" ry="5.5" fill="#6B7280"/>
                    <g id="cat_3">
                        <path id="body_3" d="M529.978 99.3914C529.978 79.2645 547.365 63.543 567.391 65.5631L615.159 70.3819C631.523 72.0326 643.978 85.8075 643.978 102.255V102.255C643.978 119.947 629.636 134.289 611.944 134.289H563.978C545.201 134.289 529.978 119.067 529.978 100.289V99.3914Z" fill="#9CA3AF"/>
                        <rect id="leg-back_3" x="546.978" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 546.978 122.125)" fill="#9CA3AF"/>
                        <rect id="leg-front_3" x="594.978" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 594.978 122.125)" fill="#9CA3AF"/>
                        <g id="eye_3">
                            <path id="Vector 1_3" d="M635.977 93.7891H608.978C608.978 93.7891 608.978 105.275 622.653 105.774C636.328 106.274 635.977 93.7891 635.977 93.7891Z" fill="#6EE7B7"/>
                            <path id="Vector 2_3" d="M635.978 93.7891H618.978C618.978 93.7891 618.978 101.446 627.588 101.779C636.199 102.112 635.978 93.7891 635.978 93.7891Z" fill="black"/>
                        </g>
                        <g id="ear_3">
                            <path id="Vector 5_3" d="M605.211 74.8465L599.812 87.8675C599.131 89.508 596.81 89.5143 596.121 87.8776L591.039 75.8094C590.514 74.562 591.354 73.164 592.702 73.0415L603.182 72.0887C604.68 71.9525 605.787 73.4569 605.211 74.8465Z" fill="#4B5563"/>
                            <path id="Intersect_3" d="M604.996 75.3635L599.982 87.4564L596.121 78.415C595.57 77.1251 596.483 75.6836 597.885 75.6309L604.996 75.3635Z" fill="#FECDD3"/>
                        </g>
                        <path id="whiskars_3" d="M625.478 112.789L613.978 115.789M627.478 114.789L620.478 124.289" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="tail_3" d="M529.76 36.7891C529.76 44.789 528.937 71.3275 538.607 88.0308L531.478 98.7891C531.478 98.7891 526.48 94.0694 523.826 90.583C511.524 74.4259 514.978 52.3934 514.978 39.3412C514.978 26.2891 529.76 28.7891 529.76 36.7891Z" fill="#9CA3AF"/>
                        <path id="mouth_3" d="M643.978 105.789L642.978 102.789L640.978 107.189" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="nose_3" d="M640.978 101.122C640.978 101.859 641.575 102.456 642.312 102.456H643.645C644.381 102.456 644.978 101.859 644.978 101.122V101.122C644.978 100.386 644.381 99.789 643.645 99.789H642.312C641.575 99.789 640.978 100.386 640.978 101.122V101.122Z" fill="#FECDD3"/>
                    </g>
                </g>
                <g id="gray-bowl">
                    <path id="Ellipse 6" d="M213 144C213 150.075 196.658 155 176.5 155C156.342 155 140 150.075 140 144C140 142.488 141.012 141.048 142.842 139.737L150 129H203L210.158 139.737C211.988 141.048 213 142.489 213 144Z" fill="white"/>
                    <ellipse id="Ellipse 7" cx="176.5" cy="129.5" rx="26.5" ry="7.5" fill="#D9D9D9"/>
                    <rect id="Rectangle 2" x="170" y="140" width="14.2" height="12" rx="6" fill="#9CA3AF"/>
                    <path id="Intersect_4" d="M194 135.132C189.332 136.295 183.207 137 176.5 137C169.793 137 163.668 136.295 159 135.132V133C159 129.134 162.134 126 166 126H187C190.866 126 194 129.134 194 133V135.132Z" fill="#FEE2E2"/>
                </g>
                <g id="black-bowl">
                    <path id="Ellipse 6_2" d="M473 144C473 150.075 456.658 155 436.5 155C416.342 155 400 150.075 400 144C400 142.488 401.012 141.048 402.842 139.737L410 129H463L470.158 139.737C471.988 141.048 473 142.489 473 144Z" fill="white"/>
                    <ellipse id="Ellipse 7_2" cx="436.5" cy="129.5" rx="26.5" ry="7.5" fill="#D9D9D9"/>
                    <rect id="Rectangle 2_2" x="430" y="140" width="14.2" height="12" rx="6" fill="black"/>
                    <path id="Intersect_5" d="M454 135.132C449.332 136.295 443.207 137 436.5 137C429.793 137 423.668 136.295 419 135.132V133C419 129.134 422.134 126 426 126H447C450.866 126 454 129.134 454 133V135.132Z" fill="#FEE2E2"/>
                </g>
                <g id="orange-bowl">
                    <path id="Ellipse 6_3" d="M729 141C729 147.075 712.658 152 692.5 152C672.342 152 656 147.075 656 141C656 139.488 657.012 138.048 658.842 136.737L666 126H719L726.158 136.737C727.988 138.048 729 139.489 729 141Z" fill="white"/>
                    <ellipse id="Ellipse 7_3" cx="692.5" cy="126.5" rx="26.5" ry="7.5" fill="#D9D9D9"/>
                    <rect id="Rectangle 2_3" x="686" y="137" width="14.2" height="12" rx="6" fill="#F97316"/>
                    <path id="Intersect_6" d="M710 132.132C705.332 133.295 699.207 134 692.5 134C685.793 134 679.668 133.295 675 132.132V130C675 126.134 678.134 123 682 123H703C706.866 123 710 126.134 710 130V132.132Z" fill="#FEE2E2"/>
                </g>
            </g>
        </svg>

    </div>
</template>

<style>
#tail, #tail_2, #tail_3 {
    transform-origin: bottom center;
    transform-box: fill-box;
    animation: idle-tail 2s infinite alternate-reverse;
}

#body, #body_2, #body_3 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: idle-body 2s infinite alternate-reverse;
}

//#leg-back, #leg-back_2, #leg-back_3, #leg-front, #leg-front_2, #leg-front_3
#leg-back, #leg-back_2, #leg-back_3, #leg-front, #leg-front_2, #leg-front_3 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: moveLegs 1s infinite alternate-reverse;
}

#gray-cat.completed {
    transform-origin: center;
    transform-box: fill-box;
    animation: gray-walk 2s linear forwards;
}

#orange-cat.completed {
    transform-origin: center center;
    transform-box: fill-box;
    animation: orange-walk 2s linear forwards;
}

#leg-back.completed, #leg-front.completed, #leg-back_3.completed, #leg-front_3.completed {
    transform-origin: center center;
    transform-box: fill-box;
    animation: moveLegs .5s infinite alternate-reverse;
}

@keyframes idle-tail {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes idle-body {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes orange-walk {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(510px);
    }
}

@keyframes gray-walk {
    0% {
        transform: translateX(0) scaleX(-1) ;
    }
    50% {
        transform: translateX(-510px) scaleX(-1) ;
    }
    99% {
        transform: translateX(-510px) scaleX(-1) ;
    }
    100% {
        transform: translateX(-510px) scaleX(1);
    }
}

@keyframes moveLegs {
    0% {
        transform: rotate(0deg) translateY(0);
    }
    50% {
        transform: rotate(45deg) translateY(2px);
    }
    100% {
        transform: rotate(-45deg) translateY(0);
    }
}
</style>
