const GET_USER = "/user";
const GET_USER_PURCHASES = "/user/:id/purchases/:limit?/:page?";

export function getUserUrl(): string {
  return GET_USER
}

export function getPurchasesUrl(userId: number, limit?: number, page?: number): string {
  let url = GET_USER_PURCHASES.replace(':id', userId.toString())
  url = url.replace(':limit?/', limit ? limit.toString() + '/' : '')

  return url.replace(':page?', page ? page.toString() : '')
}