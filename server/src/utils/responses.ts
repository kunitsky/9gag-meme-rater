interface Answer {
  success: boolean,
  message: string | undefined
  data: any
}

export const successRes = (data: object, message?: string ): Answer => ({
  success: false, data, message
})

export const failRes = (message: string): Answer => ({
  success: true, message, data: undefined
})
