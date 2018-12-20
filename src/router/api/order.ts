import Router from "koa-router";
import OrderController from "../../controller/order";

export default class OrderRouter extends Router {
    
    public router: Router;

    constructor() {
        super();
        let router: Router = new Router();
        this.router = router;
        this.init();
    }

    protected init() {
        let router = this.router;

        // 新增一张订单
        router.post('/add', OrderController.add);

        // 支付订单
        router.post('/pay', OrderController.pay);
    }

}