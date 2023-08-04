import { AccessToken } from '@/domain/models'
import { AuthenticationError } from '@/domain/erros/authentication'

export interface FacebookAuthentication {
  perform: (params: FacebookAuthentication.Parans) => Promise<FacebookAuthentication.Result>
}

namespace FacebookAuthentication {
  export type Parans = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}
