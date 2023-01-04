<template>
    <div class="container max-w-[1200px] px-0">
        <div class="tabs  mt-[20px]">
            <div class="flex md:flex-row flex-col justify-between">
                <div :class="index === 0 ? 'active' : 'md:bg-white bg-[#F4F4F4]'" class=" md:pb-[28px] md:pl-[34px] md:rounded-t-[35px] p-[10px] md:pr-[31px] md:pt-[32px]" @click="handleActive(0)">
                    <li class="md:w-[235px] text-center w-full shadow-1xl rounded-[11px] px-[30px] md:mx-0 md:h-[140px] h-[80px] bg-white items-center justify-between flex md:justify-center">
                        <div class="flex md:flex-col flex-row">
                            <div>
                                <i class="fas fa-pen rounded-full p-[11px] text-[#F4B840] text-[28px] md:text-[36px] bg-[#F4F4F4]" />
                            </div>
                            <p class="font-bold my-auto ml-[20px] md:ml-0 text-[21px] leading-[31.5px]">
                                Pencils
                            </p>
                        </div>
                        <div class="block md:hidden">
                            <i class="fas fa-chevron-down text-[19px] font-bold" />
                        </div>
                    </li>
                    <div class="md:hidden flex flex-col md:flex-row w-full md:justify-between px-[10px] items-center justify-center md:px-[50px] bg-[#F4F4F4] gap-[38px] pt-[40px]">
                        <div class="max-w-[350px] items-center justify-center flex flex-col">
                            <h2 class=" md:text-[21px] text-[16px] font-normal">
                                Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
                            </h2>
                            <div class="pl-[20px] w-full">
                                <ul class="md:text-[18px] text-[13px] justify-between flex flex-row md:flex-col font-semibold leading-[40px] list-disc text-[black]">
                                    <div>
                                        <li>MECHANICAL PENCILS</li>
                                        <li>ARCHITECT'S CHOICE</li>
                                    </div>
                                    <div>
                                        <li>EXECUTIVE PENCILS</li>
                                        <li>ENGRAVABLE PENCILS</li>
                                    </div>
                                </ul>
                            </div>
                            <button class="bg-[#F4B840] text-white font-bold w-[120px] h-[50px] text-center justify-center">
                                SHOP ALL
                            </button>
                        </div>
                        <div class="flex flex-grow flex-col">
                            <div class="md:hidden border-[3px] border-white p-[1px] rounded-[10px] items-center flex">
                                <div class="flex flex-none py-[13px] px-3 text-center font-bold text-[36px] text-[#F4B840]">
                                    25%
                                    <span class="text-[18px]">OFF</span>
                                </div>
                                <div class="font-thin flex-grow flex pl-6 leading-[24px]  py-[18px] rounded-r-[18px] text-[14px] text-black ">
                                    Offer Applicable on All Our Pencils
                                </div>
                            </div>
                            <div class="grid md:grid-cols-3 grid-cols-2 overflow-hidden mt-[20px] gap-[18px] mb-[40px]">
                                <div class="flex md:h-[320px] h-[260px] bg-white rounded-[18px] flex-col justify-center items-center ">
                                    <img src="@/static/image/pen-img11 1.png" class="md:w-[180px] w-[145px]  pt-[10px] object-cover">
                                    <p class="text-sm px-3  text-center font-medium text-black ">
                                        Aero Mechanical Pencil
                                    </p>
                                    <div>
                                        <span class="text-base text-black font-semibold mr-2">$99.00</span>
                                        <span class="line-through text-sm">$125.00</span>
                                    </div>
                                </div>
                                <div class="flex md:h-[320px] h-[260px] bg-white rounded-[18px] flex-col justify-center items-center ">
                                    <img src="@/static/image/pen-img11 2.png" class="md:w-[180px] w-[145px]  pt-[10px] object-cover">
                                    <p class="text-sm px-3  text-center font-medium text-black ">
                                        Castell Mechanical Pencil
                                    </p>
                                    <div>
                                        <span class="text-base text-black font-semibold mr-2">$75.00</span>
                                        <span class="line-through text-sm">$99.00</span>
                                    </div>
                                </div>
                                <div class="md:flex hidden md:h-[320px] h-[260px] bg-white rounded-[18px] flex-col justify-center items-center ">
                                    <img src="@/static/image/pen-img11 3.png" class="md:w-[180px] w-[145px]  pt-[10px] object-cover">
                                    <p class="text-sm px-3  text-center font-medium text-black ">
                                        Architect Choice Pencil
                                    </p>
                                    <div>
                                        <span class="text-base text-black font-semibold mr-2">$45.00</span>
                                        <span class="line-through text-sm">$70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="index === 1 ? 'active' : 'md:bg-white bg-[#F4F4F4]'" class="mt-[10px] md:pb-[28px] md:pl-[34px] md:rounded-t-[35px] p-[10px] md:pr-[31px] md:pt-[32px]" @click="handleActive(1)">
                    <li class="md:w-[235px] text-center w-full shadow-1xl rounded-[11px] px-[30px] md:mx-0 md:h-[140px] h-[80px] bg-white items-center justify-between flex md:justify-center">
                        <div class="flex md:flex-col flex-row">
                            <div>
                                <i class="fas fa-paint-brush rounded-full p-[11px] text-[#F4B840] text-[28px] md:text-[36px] bg-[#F4F4F4]" />
                            </div>
                            <p class="font-bold my-auto ml-[20px] md:ml-0 text-[21px] leading-[31.5px]">
                                Markets
                            </p>
                        </div>
                        <div class="block md:hidden">
                            <i class="fas fa-chevron-down text-[19px] font-bold" />
                        </div>
                    </li>
                </div>
                <div :class="index === 2 ? 'active' : 'md:bg-white bg-[#F4F4F4]'" class="mt-[10px] md:pb-[28px] md:pl-[34px] md:rounded-t-[35px] p-[10px] md:pr-[31px] md:pt-[32px]" @click="handleActive(2)">
                    <li class="md:w-[235px] text-center w-full shadow-1xl rounded-[11px] px-[30px] md:mx-0 md:h-[140px] h-[80px] bg-white items-center justify-between flex md:justify-center">
                        <div class="flex md:flex-col flex-row">
                            <div>
                                <i class="fas fa-palette rounded-full p-[11px] text-[#F4B840] text-[28px] md:text-[36px] bg-[#F4F4F4]" />
                            </div>
                            <p class="font-bold my-auto ml-[20px] md:ml-0 text-[21px] leading-[31.5px]">
                                Drawing Colors
                            </p>
                        </div>
                        <div class="block md:hidden">
                            <i class="fas fa-chevron-down text-[19px] font-bold" />
                        </div>
                    </li>
                </div>
                <div :class="index === 3 ? 'active' : 'md:bg-white bg-[#F4F4F4]'" class="mt-[10px] md:pb-[28px] md:pl-[34px] md:rounded-t-[35px] p-[10px] md:pr-[31px] md:pt-[32px]" @click="handleActive(3)">
                    <li class="md:w-[235px] text-center w-full shadow-1xl rounded-[11px] px-[30px] md:mx-0 md:h-[140px] h-[80px] bg-white items-center justify-between flex md:justify-center">
                        <div class="flex md:flex-col flex-row">
                            <div>
                                <i class="fas fa-book rounded-full p-[11px] text-[#F4B840] text-[28px] md:text-[36px] bg-[#F4F4F4]" />
                            </div>
                            <p class="font-bold my-auto ml-[20px] md:ml-0 text-[21px] leading-[31.5px]">
                                NoteBooks
                            </p>
                        </div>
                        <div class="block md:hidden">
                            <i class="fas fa-chevron-down text-[19px] font-bold" />
                        </div>
                    </li>
                </div>
            </div>
            <div class="md:flex hidden flex-col md:flex-row w-full md:justify-between px-[30px] justify-center md:px-[50px] bg-[#F4F4F4] gap-[38px] pt-[40px]">
                <div class="max-w-[350px]">
                    <h2 class="md:text-[21px] text-[16px] font-normal">
                        Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
                    </h2>
                    <div class="pl-[20px]">
                        <ul class="md:text-[18px] text-[13px] justify-between flex flex-row md:flex-col font-semibold leading-[40px] list-disc text-[black]">
                            <div>
                                <li>MECHANICAL PENCILS</li>
                                <li>ARCHITECT'S CHOICE</li>
                            </div>
                            <div>
                                <li>EXECUTIVE PENCILS</li>
                                <li>ENGRAVABLE PENCILS</li>
                            </div>
                        </ul>
                    </div>
                    <button class="bg-[#F4B840] text-white font-bold w-[120px] h-[50px] text-center justify-center">
                        SHOP ALL
                    </button>
                </div>
                <div class="flex flex-grow flex-col">
                    <div class="bg-white hidden min-h-[80px] p-[1px] rounded-[18px] items-center text-center md:flex">
                        <div class="flex w-[200px] justify-center flex-none py-[13px] text-center font-bold text-[36px] text-[#F4B840]">
                            25% Off
                        </div>
                        <div class="font-thin mr-[2px] flex-grow flex pl-6 leading-[24px] md:leading-[37.5px]  py-[18px] rounded-r-[18px] bg-[#F4F4F4] text-[14px] md:text-[25px] text-black ">
                            Offer Applicable on All Our Pencils
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 grid-cols-2 overflow-hidden mt-[20px] gap-5 mb-[40px]">
                        <div class="flex md:h-[320px] h-[260px] bg-white rounded-[18px] flex-col justify-center items-center ">
                            <img src="@/static/image/pen-img11 1.png" class="w-[180px] mx-[22px] pt-[10px] object-cover">
                            <p class="text-[14px] font-medium text-black ">
                                Aero Mechanical Pencil
                            </p>
                            <div>
                                <span class="text-base text-black font-semibold mr-2">$99.00</span>
                                <span class="line-through text-sm">$125.00</span>
                            </div>
                        </div>
                        <div class="flex md:h-[320px] h-[260px] bg-white rounded-[18px] flex-col justify-center items-center ">
                            <img src="@/static/image/pen-img11 2.png" class="w-[180px] mx-[22px] pt-[10px] object-cover">
                            <p class="text-[14px] font-medium text-black ">
                                Castell Mechanical Pencil
                            </p>
                            <div>
                                <span class="text-base text-black font-semibold mr-2">$99.00</span>
                                <span class="line-through text-sm">$125.00</span>
                            </div>
                        </div>
                        <div class="md:flex hidden md:h-[320px] h-[260px] bg-white rounded-[18px] flex-col justify-center items-center ">
                            <img src="@/static/image/pen-img11 3.png" class="md:w-[180px] w-[145px]  pt-[10px] object-cover">
                            <p class="text-[14px] px-3  text-center font-medium text-black ">
                                Architect Choice Pencil
                            </p>
                            <div>
                                <span class="text-base text-black font-semibold mr-2">$45.00</span>
                                <span class="line-through text-sm">$70.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-20">
            <div class="md:flex hidden mt-[100px] flex-col text-center justify-center">
                <h2 class="md:text-[45px] text-[36px] font-bold leading-[67.5px]">
                    PACKER PEN GALLERY
                </h2>
                <div class="grid grid-cols-4 gap-y-[13px] gap-x-[9px] ">
                    <div class=" mt-[40px]">
                        <img src="@/static/image/Rectangle 23.png">
                        <img class="mt-[13px]" src="@/static/image/Rectangle 25.png">
                    </div>
                    <div class="md:col-span-2 mx-auto">
                        <img src="@/static/image/Rectangle 21.png">
                        <img class="mt-[13px]" src="@/static/image/Rectangle 24.png">
                    </div>
                    <div class="mt-[40px]">
                        <img src="@/static/image/Rectangle 26.png">
                        <img class="mt-[13px]" src="@/static/image/Rectangle 27.png">
                        <img class="mt-[13px]" src="@/static/image/Rectangle 28.png">
                    </div>
                </div>
            </div>
            <div class="md:hidden flex mt-[100px] flex-col text-center justify-center">
                <h2 class="text-[30px] font-bold leading-[67.5px]">
                    PACKER PEN GALLERY
                </h2>
                <div class="grid gap-y-[9px] rounded-md grid-cols-2 grid-rows-7 gap-x-[9px] ">
                    <img class="h-[128px] object-cover rounded-md" src="@/static/image/Rectangle 23.png">
                    <img class="row-start-2 max-h-[152px] w-full object-cover rounded-md" src="@/static/image/Rectangle 25.png">
                    <img class="row-span-2 h-full object-cover rounded-md" src="@/static/image/Rectangle 21.png">
                    <img class="row-span-2 min-h-[298px] col-span-2 object-cover rounded-md " src="@/static/image/Rectangle 24.png">
                    <img class="row-span-2 min-h-[298px] col-span-2 object-cover rounded-md " src="@/static/image/Rectangle 26.png">
                    <img class="w-full h-full object-cover rounded-md" src="@/static/image/Rectangle 27.png">
                    <img class="w-full h-full object-cover rounded-md" src="@/static/image/Rectangle 28.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
            };
        },
        methods: {
            handleActive(index) {
                this.index = index;
            },
        },
    };
</script>

<style lang="scss">
.active {
    @apply bg-[#F4F4F4] #{!important}
}
</style>
