import { HttpException } from "@nestjs/common"

export const errorResponse = (message = 'internal server error', statusCode = 500) => {
  throw new HttpException({
    success: false,
    statusCode: statusCode,
    message: message,
  }, statusCode)
}