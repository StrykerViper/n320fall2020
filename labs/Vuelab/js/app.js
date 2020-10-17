// Vue.component("book-view", {
//     props: ["bookInfo"],
//     template: "<li> {{bookInfo.title }} : {{bookInfo.author}}</li>"
// })

// let app = new Vue({
//     el:"#app",
//     data: {
//         message: "Author",
//         ready: true,
//         bookInfos: [
//             {title: "Hatchet", author: "Gary Paulsen"},
//             {title: "Hatchet1", author: "Gary Paulsen1"}
//         ]
//     },
// });

Vue.component("book-view", {
    props: ["book"],
    template: "<div class='bookOneCss'> {{book.title }}  {{book.icon}}  {{book.author}}</div>"
})


let app = new Vue({
    el:"#app",
    data: {
        books: [
        {id: 0, author: "Gary Paulsen", title: "Hatchet", icon: "🪓"}
        ]
    }
});

Vue.component("book2-view", {
    props: ["book2"],
    template: "<div class='bookTwoCss'> {{book2.title }} <br> {{book2.icon}} <br> {{book2.author}}</div>"
})


let app2 = new Vue({
    el:"#app2",
    
    data: {
        ready: false,
        books2: [   
        {id: 2, author: " Rick Riordans", title: "Percy Jackson & The Lightning Thief", icon: "⚡"}
        ]
    }
    // methods: {
    //     buyCoffee: function(){
    //         // console.log("buy")
    //         this.purchases += 1;
    //     }
    // }
});