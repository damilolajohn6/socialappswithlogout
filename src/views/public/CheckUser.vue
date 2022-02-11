<template>
     <div class="">
        <div class="">
            <div class="lg:w-7/12 md:w-9/12 mx-auto w-full py-10">
                <div class="bg-white shadow py-10">
                    <div class="px-10">
                        <h3 class="text-blue-dark text-h4 font-semibold py-4">Fill in Your Details</h3>
                    </div>
                    <div class="mx-10 ">
                        <div class="my-4">
                            <label for="" class="text-medium mb-2">
                                Choose Level
                            </label>
                            <select placeholder="Undergraduate or Post-graduate Transcript?" class="border border-blue text-medium py-3 px-4 w-full rounded focus:outline-none">
                                <option value="">Undergraduate</option>
                                <option value="">Post-graduate</option>
                            </select>
                        </div>
                        <div class="my-6">
                            <label for="" class="text-medium mb-2">
                                Select Department
                            </label>
                            <select placeholder="Campus/Department" class="border border-blue text-medium py-3 px-4 w-full rounded focus:outline-none">
                                <option value="">Physics</option>
                                <option value="">Electronic Electrical</option>
                            </select>
                        </div>
                         <div class="my-6">
                             <label for="" class="text-medium mb-2">
                                Registration No
                            </label>
                            <input type="text" placeholder="Enter Matric No here" class="border border-blue text-medium py-3 px-4 w-full rounded focus:outline-none">
                        </div>
                       
                        <div class="my-6 ">
                            <button class="bg-blue-dark text-white text-medium w-full mx-auto h-16">Check</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.border-blue{
    border: 1px solid #050E65;
}
</style>