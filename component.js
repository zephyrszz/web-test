var component = {
    props: ["item"],
    template: `
    <div class="item">
        <div class="head">
            <div class="image"><img :src="item.header" alt=""></div>
            <div class="parp">
                <h5>{{item.text}}</h5>
                <span>{{item.name}}</span>
            </div>
        </div>
        <div class="body">
            <img :src="item.images" alt="">
        </div>
        <div class="foot">
            <div class="date">{{item.passtime}}</div>
            <div class="like">
                <span>点赞<span>{{item.up}}</span></span>
                <span>不点赞<span>{{item.down}}</span></span>
            </div>
        </div>
    </div>
    `

}
export default component;