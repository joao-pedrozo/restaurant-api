export interface BaseController {
  validateRequiredFields<T>(fields: string[], data: Record<string, T>): void
}

export class ValidationFailedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationFailedError'
  }
}

export abstract class BaseControllerImpl implements BaseController {
  validateRequiredFields<T>(fields: string[], data: Record<string, T>) {
    const missingFields = fields.filter((field) => !data[field])

    if (missingFields.length > 0) {
      const errorMessage = `Missing required fields: ${missingFields.join(
        ', ',
      )}`
      throw new ValidationFailedError(errorMessage)
    }
  }
}
