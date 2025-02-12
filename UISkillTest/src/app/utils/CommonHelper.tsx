import _ from 'lodash'

export function dateConverter(date:string) {
    if(_.isUndefined(date) || date === "-"){
      return "-"
    }
    const num:any = date?.match(/\d+/g);
    // Get the sign of the offset
    const offsetSign = /-/.test(date)? -1 : +1;

    // Adjust the time value by the offset
    const ms = +num[0] + offsetSign * (num[1].slice(0,2)*3.6e6 + num[1].slice(-2)*6e4);
    return new Date(ms).toLocaleDateString()
}

export function orderConverter(orderList:any) {
  const newOrderList:any = []
  orderList?.forEach(element => {
    element.order.orderDate = dateConverter(element.order.orderDate)
    element.order.requiredDate = dateConverter(element.order.requiredDate)
    element.order.shippedDate = dateConverter(element.order.shippedDate)
    const order = {...element.order, orderDetails:element.orderDetails ?? {}};
    newOrderList.push(order)
  });

  return newOrderList
}
