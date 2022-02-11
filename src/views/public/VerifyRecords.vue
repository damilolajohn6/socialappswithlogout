<template>
     <div class="">
        <div class="">
            <div class="lg:w-7/12 md:w-9/12 mx-auto w-full py-10">
                <div class="bg-white shadow py-10">
                    <div class="px-10">
                        <h3 class="text-blue-dark text-h4 font-semibold py-4">Verify Records</h3>
                    </div>
                    <div class="mx-10 ">
                        <div class="my-4">
                            <label for="" class="text-medium mb-2">
                                Select Record
                            </label>
                            <select placeholder="Undergraduate or Post-graduate Transcript?" class="border border-blue text-medium py-3 px-4 w-full rounded focus:outline-none">
                                <option value="">Select</option>
                                <option value="">Transcript</option>
                                <option value="">Certificate</option>
                                <option value="">Proof of English Proficiency</option>
                            </select>
                        </div>
                        
                         <div class="my-6">
                             <label for="" class="text-medium mb-2">
                                Reference Number
                            </label>
                            <input type="text" placeholder="Enter Matric No here" class="border border-blue text-medium py-3 px-4 w-full rounded focus:outline-none">
                        </div>
                        <div class="my-6">
                             <label for="" class="text-medium mb-2">
                                Matriculation Number
                            </label>
                            <input type="text" placeholder="Enter Matric No here" class="border border-blue text-medium py-3 px-4 w-full rounded focus:outline-none">
                        </div>
                       
                        <div class="my-6 ">
                            <button class="bg-blue-dark text-white text-medium w-full mx-auto h-16">Verify</button>
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