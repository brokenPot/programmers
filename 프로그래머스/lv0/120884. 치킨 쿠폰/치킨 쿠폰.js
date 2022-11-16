function solution(chicken) {
  let service = 0;
  let restCoupon = 0;
  let restrestCoupon = 0;
  while (chicken > 0) {
    service += Math.floor(chicken / 10);
    restCoupon += chicken % 10;
    chicken = Math.floor(chicken / 10);
  }
  while (restCoupon > 0) {
    service += Math.floor(restCoupon / 10);
    restrestCoupon += restCoupon % 10;
    restCoupon = Math.floor(restCoupon / 10);
  }

  if (restrestCoupon > 9) {
    service += Math.floor(restrestCoupon / 10);
  }
  return service;
}