<script setup>
    import MainLayout from '~/layouts/MainLayout.vue';
    const products = [
        { id: 1, title: "Titre 1", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 1111},
        { id: 2, title: "Titre 2", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 2222},
        { id: 3, title: "Titre 3", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 3333},
        { id: 4, title: "Titre 4", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 4444},
        { id: 5, title: "Titre 5", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 5555},
        { id: 6, title: "Titre 6", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 6666},
        { id: 7, title: "Titre 7", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 7777},
        { id: 8, title: "Titre 8", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 8888},
        { id: 9, title: "Titre 9", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 9999},
        { id: 10, title: "Titre 10", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 1010},
        { id: 11, title: "Titre 11", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 1111},
        { id: 12, title: "Titre 12", description: "C'est la description", url:"https://picsum.photos/id/7/800/900", price: 1212},
    ]
</script>
<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <div v-if="products" v-for="product in products" :key="product">
                    <!-- {{ product }} -->
                    <ProductComponent :product="product"/>        
                </div>
            </div>
        </div>
    </MainLayout>
</template>
<style>

</style>