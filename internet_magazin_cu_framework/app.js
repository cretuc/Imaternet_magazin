const parf = (name, model, vendor_code, manufacturer, price,sale, phone, image) => ({name, model, vendor_code, manufacturer, price, sale, phone, image})
const log = (text,type,sum, date = new Date()) => ({text,type,sum,date})
const parfum = [
    parf('Elixir-rosa', 'Parfum', 'MNO89', 'Viorica','476 ','10', '+373 654 126 21', 'img/elixir_rosa.jpg'),
    parf('Elixir-lacramioara', 'Parfum', 'BPR56', 'Viorica','261 ','5', '+373 694 245 32', 'img/elixir_lacrimioara.jpg'),
    parf('Elixir-iasomie', 'Parfum', 'BRT78', 'Viorica','370 ','25', '+373 174 326 31', 'img/elixir_iasomie.jpg'),
    parf('Difuzor-trandafir', 'Parfum', 'CRW34', 'Viorica','467 ','35', '+373 133 185 83', 'img/difuzor_trandafir.jpg'),
    parf('Difuzor-liliac', 'Parfum', 'BTP62', 'Viorica','391 ','35', '+373 103 322 31', 'img/difuzor_liliac.jpg'),
    parf('Difuzor-lavanda', 'Parfum', 'BRT48', 'Viorica','350 ','50', '+373 623 116 17', 'img/difuzor_lavanda.jpg'),
]
new Vue({
    el: '#app',
    data: {
        parfum: parfum,
        parf: parfum[0],
        logs: [],
        selectedParfIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    }, 
    methods: {
        selectParf(index) {
            this.parf = parfum[index]
            this.selectedParfbIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Succes order: ${this.parf.name} - ${this.parf.model}`, 'ok', this.calculateDiscount(this.parf.price, this.parf.sale ))
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.parf.name} - ${this.parf.model}`, 'cnl', this.calculateDiscount(this.parf.price, this.parf.sale ))
            )
        },
        calculateDiscount(sum, discount){
            console.log(sum)
            console.log(discount)
            let sumDiscounted = Number(sum)/100*(100 - Number(discount));
            return sumDiscounted;
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredParfum() {
            return this.parfum.filter(parf => {
                return parf.name.indexOf(this.search) > -1 || parf.model.indexOf(this.search) > -1
            })
        }
    },
    filters:{
        date(value){
            return value.toLocaleString()
        }
    }
})