export type ActionResult =
  | { isSuccess: true }
  | { isSuccess: false; error: { message: string } }
