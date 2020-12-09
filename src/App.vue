<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer v-if="!$route.meta.isFooterShow"></Footer>
        <Links></Links>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './components/Links'

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Links,
    },
}
</script>

<style></style>
