<template>
    <div class="px-12">
        <header class="header text-white flex items-center justify-center flex-col">
            <h3 class="text-h1">Welcome to</h3>
            <p class="text-h4">Maduka University Transcript Portal</p>
            <div class="my-5">
                <router-link to="/request-transcript" tag="button" class="border border-white rounded text-medium text-white py-2 px-5">Request Transcript</router-link>
                <router-link to="/request-certificate" class="bg-blue-dark text-medium text-white py-3 px-5 ml-8">Request Certificate</router-link>
            </div>
        </header>
        <section class="py-10 px-12">
            <div class="flex flex-wrap text-blue-dark text-body-2 justify-between pb-2">
                <p class="font-bold">Post Charges</p>
                <p class="">List of Processing fees</p>
                <p class="">Bank Accounts</p>
                <p class="">Track Application</p>
                <p class="">Proof of English Proficiency</p>
            </div>
            <hr class="border">
            <div class="text-center text-body-2 mt-4">
                <p class="">
                    For any difficulty, Click Here or Call the Support Line at 08139833300
                </p>
                <p>Maduka University</p>
            </div>
        </section>
    </div>
</template>

<style>
.header{
  background-image:linear-gradient(to right, rgba(5,14,101,.4),rgba(5,14,101,.4)), url('../../assets/header.svg'); 
  background-size: cover;
  background-repeat: no-repeat;
  height:70vh;
}
.border-white{
    border:1px solid #fff;
}
</style>